import express from "express"
import { teacherSignup, teacherLogin } from "../controllers/teacher.js"


const router = express.Router()

router.post('/teacherSignup', teacherSignup)
router.post('/teacherLogin', teacherLogin)

export default router