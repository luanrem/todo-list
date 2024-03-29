import { Trash, Check } from '@phosphor-icons/react'

import styles from './TaskCard.module.css'
import { TaskProps } from '../TasksContainer'

interface TaskCardProps {
  task: TaskProps;
  checkTask: (id: number, checked: boolean) => void;
  deleteTask: (id: number) => void;
}

export function TaskCard({ task, checkTask, deleteTask }: TaskCardProps) {

  function handleCheck() {
    checkTask(task.id, task.checked)
  }

  function handleDelete() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.container}>
      <button
        name='checkboxButton'
        onClick={handleCheck}
        className={`${styles.checkboxField} ${task.checked && styles.checked}`}
      >
        {task.checked && <Check size={13} weight='bold' />}
      </button>
      <p
        className={`${task.checked && styles.checkedParagraph}`}
      >
        {task.message}
      </p>
      <button onClick={handleDelete} className={styles.trashButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}