import jwt from 'jsonwebtoken'
const models = require('../../models')

const generateToken = (payload) => {
    try {
        let token = jwt.sign(payload, process.env.JWT_TOKEN_KEY, {
            expiresIn: '1d'
        })
        return token
    } catch (error) { 
        console.error(error);
    }
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            let payload = jwt.verify(token, process.env.JWT_TOKEN_KEY)
            models.users.findOne({
                where:{
                    id:payload.user_id
                }
            })
            .then(response=>{
                resolve(payload);

            })
            .catch((err)=>{
            reject(err);

            })
        } catch (error) {
            reject(error);
        }
    });
}

export { generateToken, verifyToken }