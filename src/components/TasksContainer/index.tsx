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
}

export function TasksContainer({ tasks }: TasksContainerProps) {

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
            return <TaskCard key={task.id} task={task} />
          })
        }

      </div>
    </div>
  )
}