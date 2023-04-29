import { Trash } from '@phosphor-icons/react'

import styles from './TaskCard.module.css'

export function TaskCard() {
  return (
    <div className={styles.container}>
      <div>
        <input type="checkbox" />
        <label htmlFor="lang1">Java</label>
      </div>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash />
    </div>
  )
}