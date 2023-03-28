import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    studentClass: {
        type: Number,
        required: true
    },
    studentClassId: {
        type: String,
        required
    },
    marks: {
        subject1: {
            type: Number, required: true
        },
        subject2: {
            type: Number, required: true
        },
        subject3: {
            type: Number, required: true
        },
        subject4: {
            type: Number, required: true
        },
        subject5: {
            type: Number, required: true
        }
    }
}, { collection: 'student-data' });


const Student = mongoose.model('Student', studentSchema)
export default Student