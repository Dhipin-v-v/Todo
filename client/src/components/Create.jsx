import {useEffect, useState } from 'react'
import { addTodo } from '../api/axios'
const Create = ({setLoading}) => {
  const [task, setTask] = useState('')

  const handlechange = (e) => {
    setTask(e.target.value)
  }

  const handleAdd = async(e) => {
    e.preventDefault()
    const {data} = await addTodo(task)
    if(data){      
      setLoading((oldValue) => oldValue+1)
      setTask('')
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleAdd} className='form'>
        <input type='text' value={task} placeholder='Enter task' onChange={handlechange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Create
