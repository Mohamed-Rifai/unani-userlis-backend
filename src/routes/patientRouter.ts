import express from 'express'
import {addPatient, getSinglePatient, showPatients} from '../controllers/patientController'


const router = express.Router()

router.get('/show-patients',showPatients)
router.post('/add-patient',addPatient)
router.get('/single-patient/:id',getSinglePatient)

export default router



