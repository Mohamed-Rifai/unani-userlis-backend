import { Request, Response } from "express";
import User from '../models/user'



const authenticateUser = (req: Request, res: Response) => {

      const {email,password}= req.body

    try {

        // User.create({
        //     email:email,
        //     password:password
        // }).then(user => {
        //     res.json(user)
        // })


        User.findOne({email})
        .then(user =>{
            if(!user){
                 console.log('email not exist');
                 
                return res.status(404).json('Email not exist')
            }
        })

        
    } catch (err) {
        console.log(err);
        
    }
          
    


};

const logoutUser = (req: Request, res: Response) => {


};

export { authenticateUser, logoutUser };