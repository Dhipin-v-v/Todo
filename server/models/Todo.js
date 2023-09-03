import mongoose, { mongo } from 'mongoose'

const todoSchema = mongoose.Schema({
  task: String,
  done: {
    type:Boolean,
    default:false
  },
})

const TodoModel = mongoose.model('todos', todoSchema)

export default TodoModel
