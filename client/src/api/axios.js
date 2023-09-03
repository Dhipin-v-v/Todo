import axios from 'axios'

const getAllTodos = () => {
  try {
    return axios.get('http://localhost:5000/get')
  } catch (error) {
    console.log(error)
  }
}

const addTodo = async (task) => {
  try {
    return await axios.post('http://localhost:5000/add', { task: task })
  } catch (error) {
    console.log(error)
  }
}

const toggleTask = async (id) => {
  try {
    return await axios.put('http://localhost:5000/update/' + id)
  } catch (error) {
    console.log(error)
  }
}
const removeTask = async (id) => {
  try {
    return await axios.delete('http://localhost:5000/remove/' + id)
  } catch (error) {
    console.log(error)
  }

}



export { getAllTodos, addTodo, toggleTask, removeTask }
