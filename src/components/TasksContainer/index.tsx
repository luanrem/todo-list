import styles from './TaskContainer.module.css'

import clipboard from '../../assets/Clipboard.svg'
import { TaskCard } from '../TaskCard'

export interface TaskProps {
  id: number;
  checked: boolean;
  message: string;
}

interface TasksContainerProps {
  tasks: TaskProps[]
  setTasks: (tasks: TaskProps[]) => void
}

export function TasksContainer({ tasks, setTasks }: TasksContainerProps) {

  function handleCheckTask(id: number, checked: boolean) {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        return {
          id: task.id,
          checked: !checked,
          message: task.message
        }
      }
      return task
    })
    setTasks(newTask)
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    })

    const taskWithIdFixed = tasksWithoutDeletedOne.map((task, index) => {
      return {
        id: index + 1,
        checked: task.checked,
        message: task.message
      }
    })

    setTasks(taskWithIdFixed)
  }

  return (
    <div className={styles.container}>
      <header className={styles.tasksHeader}>
        <div>
          <strong>Tarefas Criadas</strong>
          <p>{tasks.length}</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>{tasks.filter(task => task.checked === true).length} de {tasks.length}</p>
        </div>
      </header>
      <div className={styles.content}>
        {
          tasks.map(task => {
            return task.checked === false && <TaskCard deleteTask={handleDeleteTask} checkTask={handleCheckTask} key={task.id} task={task} />
          })
        }
        {
          tasks.map(task => {
            return task.checked === true && <TaskCard deleteTask={handleDeleteTask} checkTask={handleCheckTask} key={task.id} task={task} />
          })
        }
        {
          tasks.length === 0 &&

          <div className={styles.emptyTaskBoard}>
            <img src={clipboard} alt="ClipBoard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
        {

        }
      </div>
    </div>
  )
}