import axios from 'axios'
import React, { useState } from 'react'
axios

export default function DeleteUser() {
  return (
    <div>
        <h1>Delete User.</h1>
        <div style={{display:'flex',flexDirection:'column'}}>
        <input type="text" placeholder='Enter UID of the User Here.'style={{margin:"2rem"}}/>
        <button onClick={()=>{
             let headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
              };

        }}>Delete User.</button>
        </div>
      
    </div>
  )
}
