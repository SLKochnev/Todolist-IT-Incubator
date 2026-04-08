import { Task } from "./App"

type TasksPropsType = {
  tasks: Task[]
}

export const Tasks = ({tasks}: TasksPropsType) => {
  return (
    <ul>
          {tasks.map(el => {
            return (
              <li key={el.id}>
                <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
              </li>
            )
          })}
        </ul>
  )
}