import {StrictMode, useState} from 'react'
import './ui/App.css'
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
