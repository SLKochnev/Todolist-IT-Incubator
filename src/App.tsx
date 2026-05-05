import { useState } from 'react'
import './App.css'
import {TodolistItem} from './TodolistItem'
import {v1} from 'uuid'

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValue = 'All' | 'Active' | 'Completed'

export const App = () => {

  let [tasks, setTasks] = useState<Task[]> ([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])

  const [filterValue, setFilterValue] = useState<FilterValue>('All')

  const filterTask = (value: FilterValue) => {
  setFilterValue(value);
}
  
  let filteredTasks = tasks
    if(filterValue === 'Active') {
      filteredTasks = tasks.filter((el => !el.isDone))
    }
    if(filterValue === 'Completed') {
      filteredTasks = tasks.filter((el => el.isDone))
    }
  

 const deleteTask = (taskId: string) => {
  const filteredTasks = tasks.filter(task => {
    return task.id !== taskId
  })
    setTasks(filteredTasks)
 }

 const addTask = (title: string) => {
  const newTask: Task = {
    id: v1(),
    title,
    isDone: false
  }
  setTasks([newTask, ...tasks])
 }

  return (
      <div className="app">
        <TodolistItem 
          title="What to learn" 
          tasks={filteredTasks} 
          deleteTask={deleteTask} 
          filterTasks={filterTask}
          addTask={addTask} />
      </div>
  )
}
