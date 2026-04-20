import type {Task} from './App'
import {Button} from './Button'
import { FilterValue } from './App'

type Props = {
  title: string
  tasks: Task[]
  deleteTask: (taskId: number) => void
  filterTasks: (value: FilterValue) => void
}

export const TodolistItem = ({title, tasks, deleteTask, filterTasks}: Props) => {
  return (
      <div>
        <h3>{title}</h3>
        <div>
          <input/>
          <Button title={'+'} />
        </div>
        {tasks.length === 0 ? (
            <p>Тасок нет</p>
        ) : (
            <ul>
              {tasks.map(task => {
                return (
                    <li key={task.id}>
                      <Button title={'x'} onClick={() => deleteTask(task.id)} />
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
