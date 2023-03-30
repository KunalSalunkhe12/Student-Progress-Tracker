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
        type: String,
        required: true
    },
    studentClassId: {
        type: String,
        required: true
    },
    marks: {
        type: Map,
        of: Number
    },
    sgpi: {
        type: Number,
        required: true
    },
    defaulter: {
        type: String,
        required: true
    },
    prediction: {
        type: String,
        required: true
    }
}, { collection: 'student-data' });


const Student = mongoose.model('Student', studentSchema)
export default Student