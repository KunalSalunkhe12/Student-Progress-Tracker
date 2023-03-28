import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { collection: 'class-data' });


const Class = mongoose.model('Class', classSchema)
export default Class