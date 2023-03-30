import express from "express"
import { addStudent, getStudents, getStudentData } from "../controllers/student.js"


const router = express.Router()

router.post('/add-student', addStudent)
router.get('/get-students', getStudents)
router.get('/get-student-data', getStudentData)

export default router