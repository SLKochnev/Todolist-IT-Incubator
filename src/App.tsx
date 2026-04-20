import { useState } from 'react'
import './App.css'
import {TodolistItem} from './TodolistItem'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export type FilterValue = 'All' | 'Active' | 'Completed'

export const App = () => {

  let [tasks, setTasks] = useState<Task[]> ([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
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
  

 const deleteTask = (taskId: number) => {
  const filteredTasks = tasks.filter(task => {
    return task.id !== taskId
  })
    setTasks(filteredTasks)
 }
 

  return (
      <div className="app">
        <TodolistItem title="What to learn" tasks={filteredTasks} deleteTask={deleteTask} filterTasks={filterTask} />
      </div>
  )
}
