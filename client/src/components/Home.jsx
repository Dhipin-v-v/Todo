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
  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await getAllTodos()
      setTodos(data.todos)
      console.log("fetching")
    }
    fetchTodos()
  }, [todos])
 
  return (
    <div className='home'>
      <h2>Todo App</h2>
      <Create />
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
                  onClick={() => toggleTask(todo._id)}
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
                  <BsFillTrashFill className='icon' onClick={()=>removeTask(todo._id)}/>
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
