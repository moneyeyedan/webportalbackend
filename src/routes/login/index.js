import model from '../../../models';
var CryptoJS = require("crypto-js");
import sequelize from 'sequelize'
import {generateToken} from  '../../jwt';
// var hash_key = '*123456*';
const Op = sequelize.Op;

function decrypt(password,secret_key){

    var ciphertext = CryptoJS.AES.decrypt(password,secret_key )
    var originalText = ciphertext.toString(CryptoJS.enc.Utf8);
    return originalText;
}
const Login = async(req,res) => {
    

    try {
        let params = {
            username:typeof req.body.username !=='undefined'? req.body.username :'',
            password:typeof req.body.password !=='undefined' ? req.body.password : '',
            
        }
        if(params.username.length>0 && params.password.length>0){
            
            await model.users.findOne({
                where:{
                    [Op.or]:[
                        {
                            email:{
                                [Op.eq]:params.username
                            }
                        },
                        {
                            mobile_no:{
                                [Op.eq]:params.username
                            }
                        }
                    ]
                },
                include: [
                    {
                      model: model.user_profiles,
                      as: "user_profiles",
                    }
                ]
            })
            .then(async(user_data)=>{
                if(user_data && user_data.email || user_data.mobile_no){
                    if(decrypt(user_data.password,user_data.hash_key) === params.password){
                        res
                        .status(200)
                        .send({
                            info:"login sucess",
                            error:false,
                            error_username:false,
                            error_password:false,
                            data:user_data.user_profiles[0],
                            token:generateToken(
                                {
                                    id:user_data.user_profiles[0].id,
                                    user_id:user_data.user_profiles[0].user_id,
                                    email:user_data.user_profiles[0].email,
                                    mobile_no:user_data.user_profiles[0].mobile_no,
                                    password:user_data.password
                                }
                                )
                        })
                    }
                   else{
                    res
                    .status(400)
                    .send({
                        info:'enter your valid password',
                        error:true,
                        error_username:false,
                        error_password:true
                    })
                   }
                }
               
            }) 
            .catch((error)=>{
                res
                .status(400)
                .send({
                    info:'enter your valid username',
                    error:true,
                    error_username:true,
                    error_password:false
                })
            })  

        }
        else{
            res.status(400).send({
                msg: params.username.length<=0 && params.password.length<=0 ?"please enter your username and password" : params.username.length<=0 ? 'please enter your username' :'please enter your password',
                error:true
            })
        }
       
    }
    catch(error){
        res
        .status(400)
        .send({
            info:error,
            error:true
        })
    }
  
} 

export default Login;