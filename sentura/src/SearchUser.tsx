import axios from 'axios'
import React, { useState } from 'react'


export default function SearchUser() {
    const[uID,setUID]=useState("")
  return (
    <div>
        <h1>Search a User Via ID.</h1>
        <div style={{display:"flex",flexDirection:"column"}}>
        <input type="text" placeholder='Enter User ID.' style={{margin:"1rem"}} onChange={(e)=>{

            setUID(e.target.value)
        }}/>
        <button onClick={()=>{
            console.log("User ID is: "+uID)
              let headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
              };
              axios.get("https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/"+uID, {headers: headers})
              .then((res)=>{
                console.log(res.data)

              }).catch((er)=>{
                console.log(er)

              })

        }}>Search and Print User Details on console.</button>
        </div>

      
    </div>
  )
}
