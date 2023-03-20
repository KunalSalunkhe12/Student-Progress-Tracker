import mongoose from "mongoose"
const teacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        quote: { type: String },
    },
    { collection: 'teacher-data' }
)

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher
