import Class from "../models/class.js";
import Student from "../models/student.js"

export const addClass = async (req, res) => {
    const { className, sem, year, subject } = req.body;

    try {
        const existingClass = await Class.findOne({ className, sem, year });

        if (existingClass) {
            return res.status(400).json({ message: 'Class already exists' });
        }

        const newClass = new Class({
            className,
            sem,
            year,
            subject
        });

        const savedClass = await newClass.save();

        res.status(201).json({
            message: 'Class added successfully',
            class: savedClass
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding class' });
    }
};

export const getAllClass = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving classes' });
    }
}

export const deleteClass = async (req, res) => {
    const classId = req.query.classId;

    try {
        const deletedClass = await Class.findByIdAndDelete(classId);

        if (!deletedClass) {
            return res.status(404).json({ error: 'Class not found' });
        }

        await Student.deleteMany({ studentClassId: classId });

        res.json({ message: 'Class deleted successfully', status: 'ok' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}