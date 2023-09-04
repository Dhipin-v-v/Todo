import { useState, useEffect } from 'react'
import Create from './Create'
import { getAllTodos, toggleTask, removeTask } from '../api/axios'
import {
  BsCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from 'react-icons/bs'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(1)

  const fetchTodos = async () => {
    console.log('Fetching')
    const { data } = await getAllTodos()
    setTodos(data.todos)
  }

  const handleDelete = async (id) => {
    const { data } = await removeTask(id)
    if (data) {
      setLoading((oldValue) => oldValue+1)
    }
  }

  const handleToggle = async (id) => {
    const { data } = await toggleTask(id)
    if (data) {
      setLoading((oldValue) => oldValue+1)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [loading])

  return (
    <div className='home'>
      <h2>Todo App</h2>
      <Create setLoading={setLoading} />
      {todos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        <div className='task-container'>
          {todos.map((todo, index) => {
            return (
              <div className='task' key={index}>
                <div
                  className='icon-container'
                  onClick={() => handleToggle(todo._id)}
                >
                  {todo.done ? (
                    <BsFillCheckCircleFill className='icon' />
                  ) : (
                    <BsCircleFill className='icon' />
                  )}
                </div>
                <div className='todo-container'>
                  <p className={todo.done ? 'stike' : ''}>{todo.task}</p>
                </div>
                <div className='icon-container'>
                  <BsFillTrashFill
                    className='icon'
                    onClick={() => handleDelete(todo._id)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Home
