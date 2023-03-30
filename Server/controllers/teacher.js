import Teacher from "../models/teacher.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';


export const teacherSignup = async (req, res) => {
    const newPassword = await bcrypt.hash(req.body.password, 10)
    try {
        await Teacher.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        })
        res.json({ message: 'ok' })
    } catch (err) {
        res.json({ status: 'error', message: 'Duplicate email' })
    }
}

export const teacherLogin = async (req, res) => {

    try {
        const teacher = await Teacher.findOne({
            email: req.body.email,
        })

        if (!teacher) {
            return res.json({ status: 'error', message: 'Invalid Login Check your Email' })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, teacher.password)

        if (!isValidPassword) {
            return res.json({ message: 'Wrong Password', teacher: false })
        }

        const token = jwt.sign({
            name: teacher.name,
            email: teacher.email
        }, 'secret123')

        res.json({ message: 'Login Successful', teacher: token })

    } catch (err) {
        console.log(err)
        res.json({ status: 'error', message: 'Something went wrong' })
    }

}