import { useEffect, useState } from 'react'
import {addTodo} from '../api/axios'
const Create = () => {
  const [task, setTask] = useState([])
  const handlechange = (e) => {
    setTask(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(task)
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleAdd} className='form'>
        <input type='text' placeholder='Enter task' onChange={handlechange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Create
