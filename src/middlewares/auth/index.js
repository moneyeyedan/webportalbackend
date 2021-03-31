import { verifyToken } from './../../jwt'

const authMiddleware=(req,res,next) => {
    if(req.headers.authorization)
    {
        verifyToken(req.headers.authorization.split(" ")[1]).then(()=>{
            next();
        }).catch((err)=>{
            res.status(401).send({ 
                message:"Unauthorized Access!"
            });
        })
    }
    else{
        res.status(401).send({
            message : 'Unauthorized Access!'
        })
    }
}

export default authMiddleware;