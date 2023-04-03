import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from "./routes/user.js"
import classRoutes from "./routes/class.js"
import studentRoutes from "./routes/student.js"
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors({ origin: process.env.CLIENT_URL }))

app.use("/user", userRoutes)
app.use("/class", classRoutes)
app.use("/student", studentRoutes)

app.get("/", (req, res) => {
    res.send("Student Progress Analyzer API")
});



const CONNECTION_URL = process.env.DATABASE_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    }))
    .catch(err => console.log(err.message))







