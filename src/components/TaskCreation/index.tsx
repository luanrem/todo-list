import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskCreation.module.css'

export function TaskCreation() {
  return (
    <form className={styles.container}>
      <input
        placeholder='Adicione uma nova tarefa'
        type="text"
      />
      <button type='submit'>
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}