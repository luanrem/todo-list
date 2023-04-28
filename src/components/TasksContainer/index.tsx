import styles from './TaskContainer.module.css'

import clipboard from '../../assets/Clipboard.svg'
import { useState } from 'react'
import { TaskCard } from '../TaskCard'

export function TasksContainer() {
  const [hasTask, setHasTask] = useState(false)

  const tasks = [1, 2, 3, 4]

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
        {hasTask ?

          <div className={styles.emptyTaskBoard}>
            <img src={clipboard} alt="ClipBoard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> :
          tasks.map(element => {
            return <TaskCard key={element} />
          })
        }

      </div>
    </div>
  )
}