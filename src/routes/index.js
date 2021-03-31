import express from 'express';
import {CreateProject,UpdateProject,DeleteProject,GetProject} from './project';
import Login from './login';
import Refresh from './refresh';
import authMiddleware from '../middlewares/auth';


const routers= express.Router();

routers.post('/project/create',authMiddleware,CreateProject);
routers.delete('/project/delete/:id',authMiddleware,DeleteProject);
routers.put('/project/update',authMiddleware,UpdateProject);
routers.get('/project/get/:id',authMiddleware,GetProject);


routers.post('/login',Login);
routers.post('/refresh', Refresh);



export default routers;