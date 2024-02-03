import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateUser from './CreateUser'
import ListUsers from './ListUsers'
import SearchUser from './SearchUser'
import UpdateUser from './UpdateUser'





function App() {
  

  return (
    <>
    <CreateUser />
    <ListUsers />
    <SearchUser />
    <UpdateUser />
      
       
    </>
  )
}

export default App
