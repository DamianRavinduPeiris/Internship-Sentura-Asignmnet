import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateUser from './CreateUser'
import ListUsers from './ListUsers'
import SearchUser from './SearchUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'





function App() {
  

  return (
    <>
    <CreateUser />
    <ListUsers />
    <SearchUser />
    <UpdateUser />
    <DeleteUser />
      
       
    </>
  )
}

export default App
