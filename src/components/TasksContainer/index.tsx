import styles from './TaskContainer.module.css'

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
    </div>
  )
}