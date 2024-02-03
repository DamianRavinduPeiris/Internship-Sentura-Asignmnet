import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateUser from './CreateUser'
import ListUsers from './ListUsers'
import SearchUser from './SearchUser'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CreateUser />
    <ListUsers />
    <SearchUser />
      
       
    </>
  )
}

export default App
