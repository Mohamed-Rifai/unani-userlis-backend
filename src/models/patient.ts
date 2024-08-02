import mongoose, { Document, Schema,Model } from "mongoose";

interface IPatient extends Document {
  name: string;
  fatherName: string;
  motherName: string;
  surname: string;
  dob: string;
  mahallu: string;
  place: string;
  district: string;
  state:string;
  phone:string;
  problem:string;
  solutions:string;
  description:string;
  
}

const patientSchema = new Schema<IPatient>({
    name: {
        type: String,
        
        
    },
    fatherName: {
        type: String,
        
    },
    motherName: {
        type: String,
    },
    surname: {
        type: String,
    },
    dob: {
        type: String,
    },
    mahallu: {
        type: String,
        
    },
    place: {
        type: String,
        
    },
    district: {
        type: String,
        
    },
    state: {
        type: String,
        
    },
    phone: {
        type: String,
        
        
    },
    problem: {
        type: String,
        
        
    },
    solutions: {
        type: String,
        
        
    },
    description: {
        type: String,
        
    },

});


const PatientModel : Model<IPatient> = mongoose.model<IPatient>("Patient", patientSchema);

export default PatientModel ;