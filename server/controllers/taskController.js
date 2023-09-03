import TodoModel from '../models/Todo.js'

const addTask = async (req, res) => {
  const task = req.body.task
  await TodoModel.create({
    task: task,
  })
  res.status(201).send('Todo created')
}

const getAllTodos = async (req, res) => {
  const todos = await TodoModel.find()
  res.status(200).json({ todos })
}

const updateTask = async (req, res) => {
  console.log("request")
  const { id } = req.params
  const todo = await TodoModel.findOne({ _id: id })
  const {done} = todo
  await TodoModel.findByIdAndUpdate(id,{ done: !done })
  console.log(await TodoModel.findOne({ _id: id }))
  res.status(200).send("Done")
}

const deleteTask = async (req, res) => {
  console.log("request")
  const { id } = req.params
  await TodoModel.findByIdAndDelete(id)
  res.status(200).send("Deleted")
}



export { addTask, getAllTodos, updateTask, deleteTask }
