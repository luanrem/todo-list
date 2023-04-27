import styles from './App.module.css'

import './global.css'

import ToDoLogo from './assets/Logo.svg'
import { TaskCreation } from './components/TaskCreation'
import { TasksContainer } from './components/TasksContainer'

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={ToDoLogo} alt="ToDo Logo" />
        <TaskCreation />
        <TasksContainer />
        <p>hello world</p>
      </div>
    </div>
  )
}

export default App
