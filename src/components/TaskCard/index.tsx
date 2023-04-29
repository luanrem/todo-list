import { Trash, Check } from '@phosphor-icons/react'

import styles from './TaskCard.module.css'
import { useState } from 'react'

export function TaskCard() {
  const [checked, setChecked] = useState(true)

  function handleCheck() {
    setChecked(!checked)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleCheck} className={`${styles.checkboxField} ${checked && styles.checked}`}>
        {checked ? <Check size={13} weight='bold' /> : ''}
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed </p>
      <button className={styles.trashButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}