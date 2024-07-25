import express from 'express'
import {addPatient} from '../controllers/patientController'


const router = express.Router()

router.post('/add-patient',addPatient)

export default router



