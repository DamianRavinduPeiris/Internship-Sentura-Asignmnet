import axios from 'axios';
import React, { useEffect, useState } from 'react'



export default function ListUsers() {
    useEffect(()=>{
        let headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
          };
          axios.get("https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users", {headers: headers})
          .then((res)=>{
            console.log(res.data)

          }).catch((er)=>{
            console.log(er)

          })
        

    })
  return (
    <div>
        <h1>List Users</h1>
        


        
      
    </div>
  )
}
