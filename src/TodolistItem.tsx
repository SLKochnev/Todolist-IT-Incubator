import type {Task} from './App'
import {Button} from './Button'
import { FilterValue } from './App'
import { useState, ChangeEvent, KeyboardEvent } from 'react'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: string) => void
  filterTasks: (value: FilterValue) => void
  addTask: (title: string) => void
}

export const TodolistItem = ({title, tasks, deleteTask, filterTasks, addTask}: Props) => {
  
  const [taskTitle, setTasksTitle] = useState('')

  const createTaskHandler = () => {
    addTask(taskTitle)
    setTasksTitle('')
  }

  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => setTasksTitle(event.currentTarget.value);
  const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
              createTaskHandler()
            }
          }

  return (
      <div>
        <h3>{title}</h3>
        <div>
          <input value={taskTitle} onChange={ changeTaskTitleHandler } onKeyDown={ createTaskOnEnterHandler }/>
          <Button title={'+'} onClick={createTaskHandler} />
        </div>
        {tasks.length === 0 ? (
            <p>Тасок нет</p>
        ) : (
            <ul>
              {tasks.map(task => {
                  const deleteTaskHandler = () => {
                    deleteTask(task.id)
                  }
                return (
                    <li key={task.id}>
                      <Button title={'x'} onClick={ deleteTaskHandler } />
                      <input type="checkbox" checked={task.isDone} />
                      <span>{task.title}</span>
                    </li>
                )
              })}
            </ul>
        )}
        <div>
          <button title={'All'} onClick={() => filterTasks('All')}>All</button>
          <button title={'Active'} onClick={() => filterTasks('Active')}>Active</button>
          <button title={'Completed'} onClick={() => filterTasks('Completed')}>Completed</button>
        </div>
      </div>
  )
}
