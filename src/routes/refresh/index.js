import model from '../../../models';
var CryptoJS = require("crypto-js");
import sequelize from 'sequelize'
import {verifyToken} from  '../../jwt';
import { token } from 'morgan';
// var hash_key = '*123456*';
const Op = sequelize.Op;

// function decrypt(password,secret_key){

//     var ciphertext = CryptoJS.AES.decrypt(password,secret_key )
//     var originalText = ciphertext.toString(CryptoJS.enc.Utf8);
//     return originalText;
// }
const Refresh = async(req,res) => {
    

    try {
        let params = {
            token:typeof req.body.token !== 'undefined' ? req.body.token : ""
            
        }
        if(params.token.length>0 ){
            await verifyToken(params.token)
            .then(async(response)=>{
                await model.users.findOne({
                    where:{
                        [Op.or]:[
                            {
                                email:{
                                    [Op.eq]:response.email
                                }
                            },
                            {
                                mobile_no:{
                                    [Op.eq]:response.mobile_no
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
                        if(user_data.password === response.password){
                            res
                            .status(200)
                            .send({
                                info:"token valid",
                                error:false,
                                data:user_data.user_profiles[0],
                                token:params.token
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
                        info:'token not valid',
                        error:true,
                    })
                })  
            })
            

        }
        else{
            res.status(400).send({
                msg: 'token not valid',
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

export default Refresh;