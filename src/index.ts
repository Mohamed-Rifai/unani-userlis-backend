import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'



import authRouter from './routes/authRouter'
import connectDb from './connections/database'

const app = express();
dotenv.config()




const port = process.env.PORT || 5000;
// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true, // Allow credentials to be sent with requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  };
  
//   interface EnvVariables {
//     PORT: string;
//     MONGO_URI: string;
//     // JWT_SECRET: string;
//     // CLIENT_URL: string;
//   }
  
//   const env: EnvVariables = process.env as EnvVariables;
  

app.use(cors(corsOptions))
app.use(express.json());

//database connection
connectDb()


app.use('/api/user',authRouter)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

