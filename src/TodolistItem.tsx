import { Task } from "./App";
import { Tasks } from './Tasks'
import { Button } from "./Button";

type TodolistItemPropsType = {
  title: string
  tasks: Task[]
  date?: string
}

export const TodolistItem = ({ title, tasks, date }: TodolistItemPropsType) => {
  return (
      <div>
        <h3>{title}</h3>
        <div>
          <input/>
          <Button title={'+'} />
        </div>
          <Tasks tasks={tasks} />
        <div>
          <Button title={'All'} />
          <Button title={'Active'} />
          <Button title={'Completed'} />
          <div>{date}</div>
        </div>
      </div>
  )
}
