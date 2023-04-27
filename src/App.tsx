import styles from './App.module.css'

import './global.css'

import ToDoLogo from './assets/Logo.svg'

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.backgroundHeader} /> */}
        <img src={ToDoLogo} alt="ToDo Logo" />
        <p>hello world</p>
      </div>
    </div>
  )
}

export default App
