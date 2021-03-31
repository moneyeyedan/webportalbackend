import model from '../../../models';
import sequelize from 'sequelize'
import {v4 as uuid} from 'uuid';

// var hash_key = '*123456*';
const Op = sequelize.Op;


const CreateProject = async(req,res) => {
    

    try {
        let params = {
            id:uuid(),
            name:typeof req.body.name !=='undefined' ? req.body.name : '',
            status:'incomplete',
            created_by:typeof req.body.profile_id !==  'undefined'  ?  req.body.profile_id : '',
            updated_by:typeof req.body.profile_id !==  'undefined'  ?  req.body.profile_id : '',
            created_at: new Date(),
            updated_at: new Date()

            
        }
        await model.projects
        .create(params)
        .then(data=>{
            res
            .status(201)
            .send({
                info:'Insert Successfull',
                error:false
            })
        })
       
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
const DeleteProject = async(req,res) => {
    

    try {
        let params = {
            id:typeof req.params.id !=='undefined'? req.params.id :'',
            
        }
        
        await model.projects.destroy({
            where:{
                id:params.id
            }
        })
        .then(data=>{
            res
            .status(201)
            .send({
                info:'Project Delete Successfull',
                error:false
            })
        })
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
const UpdateProject = async(req,res) => {
    

    try {
        let params = {
            id: typeof req.body.id !=='undefined' ? req.body.id : '',
            name:typeof req.body.name !=='undefined' ? req.body.name : '',
            status:typeof req.body.status !=='undefined' ? req.body.status : '',
            // created_by:typeof req.body.created_by !==  'undefined'  ?  req.body.created_by : '',
            updated_by:typeof req.body.profile_id !==  'undefined'  ?  req.body.profile_id : '',
            // created_at: new Date(),
            updated_at: new Date()

            
        }
        await model.projects.update(params,{
            where:{
                id:params.id
            }
        })
        .then(data=>{
            res
            .status(201)
            .send({
                info:'Project Update Successfull',
                error:false
            })
        })
       
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

const GetProject = async(req,res) => {
    

    try {
        let params = {
            id:typeof req.params.id !=='undefined'? req.params.id :'',
            // password:typeof req.body.password !=='undefined' ? req.body.password : '',
            
        }
      
       await model.projects.findAll({
        where:{
            created_by:params.id
        }
       })
       .then(data=>{
        res
        .status(201)
        .send({
            info:'success',
            error:false,
            data
        })
    })
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
export {
    CreateProject,
    UpdateProject,
    DeleteProject,
    GetProject
};