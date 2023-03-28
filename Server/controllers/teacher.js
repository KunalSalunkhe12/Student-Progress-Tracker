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
        console.log(err)
        res.json({ status: 'error', message: 'Duplicate email' })
    }
}

export const teacherLogin = async (req, res) => {

    const teacher = await Teacher.findOne({
        email: req.body.email,
    })


    if (!teacher) {
        res.json({ status: 'error', message: 'Invalid Login' })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, teacher.password)

    if (isValidPassword) {
        const token = jwt.sign({
            name: teacher.name,
            email: teacher.email
        }, 'secret123')

        res.json({ message: 'ok', teacher: token })
    } else {
        res.json({ message: 'error', teacher: 'false' })
    }
}