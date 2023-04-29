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

  return (
    <div className={styles.container}>
      <header className={styles.tasksHeader}>
        <div>
          <strong>Tarefas Criadas</strong>
          <p>2</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>2 de 5</p>
        </div>
      </header>
      <div className={styles.content}>
        {tasks.length === 0 ?

          <div className={styles.emptyTaskBoard}>
            <img src={clipboard} alt="ClipBoard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> :
          tasks.map(task => {
            return <TaskCard checkTask={handleCheckTask} key={task.id} task={task} />
          })
        }

      </div>
    </div>
  )
}