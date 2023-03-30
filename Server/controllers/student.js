import Student from "../models/student.js";

export const addStudent = async (req, res) => {
    try {
        const { studentName, rollNumber, studentClass, studentClassId, marks, defaulter } = req.body;

        const existingStudent = await Student.findOne({ rollNumber, studentClassId });
        if (existingStudent) {
            return res.status(400).json({ message: 'A student with the same roll number already exists in this class' });
        }

        const marksArray = Object.values(marks)
        const sum = marksArray.reduce((acc, curr) => acc + parseInt(curr), 0);
        const sgpi = (sum / 500 * 10).toFixed(2)

        const newStudent = new Student({
            studentName,
            rollNumber,
            studentClass,
            studentClassId,
            marks,
            sgpi,
            defaulter,
            prediction: "Calculate"
        });

        const savedStudent = await newStudent.save();

        res.status(201).json({ message: 'Student Added Successfully', savedStudent }); // Return the saved student document as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding student to database' });
    }
};

export const getStudents = async (req, res) => {
    const studentClassId = req.query.classId;
    try {
        const students = await Student.find({ studentClassId });
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getStudentData = async (req, res) => {
    const studentId = req.query.studentId;
    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

