import express from "express"
import { addClass, getAllClass } from "../controllers/class.js"


const router = express.Router()

router.post('/add-class', addClass)
router.get('/get-all-class', getAllClass)

export default router