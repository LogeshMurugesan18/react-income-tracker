import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserLIst  from './components/UserLIst'
import ExpenseTracker from './components/UserLIst'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExpenseTracker/>
    </>
  )
}

export default App
