import axios from "axios";
import user from "./User"
import { useState } from "react";





export default function UpdateUser() {
    const[userData,setUser]=useState(user);
  return (
    <div>
        <h1>Update User.</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>

        <input
          type="text"
          placeholder="Which Field Do you want to update?"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, meta_data: e.target.value });
          }}
        />
        <input
            type="text"
            placeholder="Enter the value here."
            style={{ margin: "1rem" }}
            onChange={(e) => {
                
                let tags = e.target.value.split(",");
                setUser({ ...userData, tags: tags } as typeof userData);
            }}
        />
        
        <button
          onClick={() => {
            let headers = {
              "Content-Type": "application/json",
              "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
            };
            axios
              .patch(
                "https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/"+userData.uid,
                userData,
                { headers: headers }
              )
              .then((res) => {
                console.log(res.data);
              })
              .catch((er) => {
                console.log(er);
              });
          }}
        >
          Update User.
        </button>
      </div>

        
      
    </div>
  )
}
