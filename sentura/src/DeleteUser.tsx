import axios from "axios";
import React, { useState } from "react";
axios;

export default function DeleteUser() {
  const [uid, setUID] = useState("");
  return (
    <div>
      <h1>Delete User.</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Enter ID of the User Here."
          style={{ margin: "2rem" }}
          onChange={(e) => {
            setUID(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let auth = {
              "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT"
            }
            axios.post(`https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users/${uid}/trash`,{},{headers:auth})
            .then((res)=>{
              console.log(res.data)
            }).catch((er)=>{
              console.log(er)

            })
           
          }}
        >
          Delete User.
        </button>
      </div>
    </div>
  );
}
