import { Trash, Check } from '@phosphor-icons/react'

import styles from './TaskCard.module.css'
import { TaskProps } from '../TasksContainer'

interface TaskCardProps {
  task: TaskProps;
}

export function TaskCard({ task }: TaskCardProps) {

  function handleCheck() {
    console.log('acionou')
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
      <button className={styles.trashButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}