import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskCreation.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface TaskCreationProps {
  createNewTask: (newTask: string) => void
}

export function TaskCreation({ createNewTask }: TaskCreationProps) {
  const [newTask, setNewTask] = useState('')

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    // console.log('event: ', event.target[0].value)
    createNewTask(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        name='newTask'
        value={newTask}
        onChange={handleTaskChange}
        onInvalid={handleNewCommentInvalid}
        placeholder='Adicione uma nova tarefa'
        type="text"
        required
      />
      <button type='submit'>
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}