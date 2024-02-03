import axios from 'axios';
import React, { useEffect, useState } from 'react'
import user from './User';



export default function ListUsers() {
    const[userData,setUser]=useState(user);
    useEffect(()=>{
        let headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
          };
          axios.get("https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users", {headers: headers})
          .then((res)=>{
            console.log(res.data)
            setUser(res.data.data)


          }).catch((er)=>{
            console.log(er)

          })
        

    },[])
  return (
    <div>
        <h1>List Users</h1>
        <button onClick={()=>{
            console.log(userData)
        }}>Print Users in the Console.</button>
        


        
      
    </div>
  )
}
