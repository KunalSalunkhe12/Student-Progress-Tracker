import express from "express"
import { addClass, deleteClass, getAllClass } from "../controllers/class.js"


const router = express.Router()

router.post('/add-class', addClass)
router.get('/get-all-class', getAllClass)
router.delete('/delete-class', deleteClass)

export default router