import Teacher from "../models/teacher.js"
import jwt from "jsonwebtoken"


export const teacherSignup = async (req, res) => {
    console.log(req.body)
    try {
        await Teacher.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
}

export const teacherLogin = async (req, res) => {
    const teacher = await Teacher.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (teacher) {
        const token = jwt.sign({
            name: req.body.name,
            email: req.body.email
        }, 'secret123')

        res.json({ status: 'ok', teacher: token })
    } else {
        res.json({ status: 'error', teacher: 'false' })
    }
}