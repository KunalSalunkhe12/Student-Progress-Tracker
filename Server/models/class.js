import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    sem: {
        type: Number,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    subject: {
        subject1: {
            type: String, required: true
        },
        subject2: {
            type: String, required: true
        },
        subject3: {
            type: String, required: true
        },
        subject4: {
            type: String, required: true
        },
        subject5: {
            type: String, required: true
        }
    }
}, { collection: 'class-data' });


const Class = mongoose.model('Class', classSchema)
export default Class