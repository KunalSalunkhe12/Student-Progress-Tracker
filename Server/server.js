import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from "./routes/user.js"



const app = express()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors({ origin: "http://localhost:3000" }))

app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.send("Student Progress Tracker API")
});



const CONNECTION_URL = "mongodb+srv://KunalSalunkhe12:Ridersalunkhe1@analyzer.ziktmgd.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    }))
    .catch(err => console.log(err.message))