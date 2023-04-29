import styles from './App.module.css'

import './global.css'

import ToDoLogo from './assets/Logo.svg'
import { TaskCreation } from './components/TaskCreation'
import { TaskProps, TasksContainer } from './components/TasksContainer'
import { useState } from 'react'

const tasks: TaskProps[] = [
  {
    id: 1,
    checked: true,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  },
  {
    id: 2,
    checked: false,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  },
  {
    id: 3,
    checked: false,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  }
]

function App() {
  const [taskList, setTaskList] = useState(tasks)

  function handleCreateNewTask(message: string) {
    const newTask: TaskProps = {
      message,
      id: taskList.length + 1,
      checked: false
    }
    console.log('newTask', newTask)
    setTaskList([...taskList, newTask])
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={ToDoLogo} alt="ToDo Logo" />
        <TaskCreation createNewTask={handleCreateNewTask} />
        <TasksContainer setTasks={setTaskList} tasks={taskList} />
      </div>
    </div>
  )
}

export default App
