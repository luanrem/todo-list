import styles from './TaskContainer.module.css'

import clipboard from '../../assets/Clipboard.svg'

export function TasksContainer() {
  return (
    <div className={styles.container}>
      <header className={styles.tasksHeader}>
        <div>
          <strong>Tarefas Criadas</strong>
          <p>2</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p>2</p>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.emptyTaskBoard}>
          <img src={clipboard} alt="ClipBoard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}