import styles from './App.module.css'

import './global.css'

import ToDoLogo from './assets/Logo.svg'
import { TaskCreation } from './components/TaskCreation'
import { TaskProps, TasksContainer } from './components/TasksContainer'



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
  },
  {
    id: 4,
    checked: true,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  },
  {
    id: 5,
    checked: true,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  },
  {
    id: 6,
    checked: false,
    message: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed bla bla bla bla "
  },
]

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={ToDoLogo} alt="ToDo Logo" />
        <TaskCreation />
        <TasksContainer tasks={tasks} />
      </div>
    </div>
  )
}

export default App
