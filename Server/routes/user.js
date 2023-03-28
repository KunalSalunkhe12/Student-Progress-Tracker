import express from "express"
import { teacherSignup, teacherLogin } from "../controllers/teacher.js"


const router = express.Router()

router.post('/teacher-signup', teacherSignup)
router.post('/teacher-login', teacherLogin)

export default router