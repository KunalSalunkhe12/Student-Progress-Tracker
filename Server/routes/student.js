import express from "express"
import { addStudent, getStudents, getStudentData, studentLogin } from "../controllers/student.js"


const router = express.Router()

router.post('/login', studentLogin)
router.post('/add-student', addStudent)
router.get('/get-students', getStudents)
router.get('/get-student-data', getStudentData)

export default router