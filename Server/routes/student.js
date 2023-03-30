import express from "express"
import { addStudent, getStudents, getStudentData, studentLogin, deleteStudent } from "../controllers/student.js"


const router = express.Router()

router.post('/login', studentLogin)
router.post('/add-student', addStudent)
router.get('/get-students', getStudents)
router.get('/get-student-data', getStudentData)
router.delete('/delete-student', deleteStudent)

export default router