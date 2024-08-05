import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User from '../models/user'






 const authenticateUser = (req: Request, res: Response) => {

      const {email,password}= req.body

    try {

        User.create({
            email:email,
            password:password
        }).then(user => {
            res.json(user)
        })


//         User.findOne({email})
//         .then(user =>{
//             if(!user){
                 
                 
//                 return res.status(404).json('Email not exist')
//             }

//             const checkPassword =   (inputPassword:string,storedPassword:string) => {
//                 return inputPassword === storedPassword
//             } 

//             if(checkPassword(password,user.password)){
//                 const payload = {
//                     id:user.id,
//                     email:user.email
//                 }

//                 const jwtSecret = process.env.USER_JWT_SECRET

//                 if (!jwtSecret) {
//                  throw new Error('USER_JWT_SECRET is not defined in the environment variables');
//   }


//                 jwt.sign(
//                     payload,
//                     jwtSecret,
//                     {
//                         expiresIn:'90d'
//                     },
//                     (err,token) => {
//                         if(err){
//                             console.error('There is some error in Token',err)
//                         }else{ 
//                             res.json({
//                                 success:true,
//                                 email:user.email,
//                                 id:user.id,
//                                 token:`Bearer ${token}`,
//                             })
//                         }
//                     }
//                 )
         


                
//             }else{ 
//                 console.log('incorrect password');
//                 return res.status(400).json('Incorrect password')
                
//             }
//         })

        
     } catch (err) {
         console.log(err);
        
    }
          
    
    }



const logoutUser = (req: Request, res: Response) => {


};

export { authenticateUser, logoutUser }