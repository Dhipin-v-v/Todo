import express from 'express'
import { addTask, getAllTodos, updateTask, deleteTask } from '../controllers/taskController.js'
const router = express.Router()

router.post('/add', addTask)
router.get('/get', getAllTodos)
router.put('/update/:id',updateTask)
router.delete('/remove/:id',deleteTask)

export default router
