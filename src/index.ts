import express from 'express';

import cors,{CorsOptions,CorsRequest} from 'cors'
import dotenv from 'dotenv'



import authRouter from './routes/authRouter'
import patientRouter from './routes/patientRouter'
import connectDb from './connections/database'

const app = express();


const allowedOrigins = ['http://localhost:3000', 'https://main--charming-cannoli-935784.netlify.app'];

//Create the CORS options function
const corsOptions = ( req:CorsRequest, callback:(err:Error | null,options ?:CorsOptions)=> void)=>  {
  let options: CorsOptions;

  console.log('reached inside of cors funtion');
  
  const origin = req.headers.origin as string;  // Access the Origin header directly from req.headers

  console.log('origin si :',origin);
  
  if (allowedOrigins.indexOf(origin) !== -1) {
    options = { 
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization']
     }; // Allow the origin
  } else {
    options = { origin: false }; // Disallow the origin
  }
  callback(null, options); // Callback expects two parameters: error and options
};



dotenv.config()






const port = process.env.PORT || 5000;
// // CORS configuration
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
//     credentials: true, // Allow credentials to be sent with requests
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
//   };
  
//   interface EnvVariables {
//     PORT: string;
//     MONGO_URI: string;
//     // JWT_SECRET: string;
//     // CLIENT_URL: string;
//   }
  
//   const env: EnvVariables = process.env as EnvVariables;
  

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
connectDb()


app.use('/api/user',authRouter)
app.use('/api/patient',patientRouter)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

