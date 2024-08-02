import {Request,Response} from 'express'
import Patient from '../models/patient'




const showPatients =async (req:Request,res:Response) => {

    try {
        
        const patients =await Patient.find({})


        
    
        res.status(200).json(patients)

    } catch (error) {
        
        console.error('Error fetching patients: ' ,error);
        res.status(500).json({messsage:'Internal Server Error'}) 
        
    }
  
    
}

const getSinglePatient =async (req:Request, res:Response) => {


    
    
    const {id} = req.params;

     try {
        
     const patient =await Patient.findById(id)

     if (!patient) {
      return res.status(404).json({message:'This patient not found'})     
     }

     res.status(200).json(patient)

     } catch (err) {
        console.log(err);
        
     }

}




const addPatient = (req: Request, res: Response) => {

     

      const {
         name,
         fatherName,
         motherName,
         surname,
         date,
         mahallu,
         place,
         district,
          state,
          phone,
          problem,
          solutions,
          description
      } = req.body

      Patient.create({
        name,
        fatherName,
        motherName,
        surname,
        dob:date,
        mahallu,
        place,
        district,
        state,
        phone,
        problem,
        solutions,
        description,

      })
      .then((data) => {
        console.log(data);
        res.status(200).json({message:`${name} added successfully`})
        
      }).catch((err)=> {
        console.log(err);
        res.status(400).json({message:'Something went wrong'})
        
      })    


      
      

}


export {addPatient,showPatients,getSinglePatient}

