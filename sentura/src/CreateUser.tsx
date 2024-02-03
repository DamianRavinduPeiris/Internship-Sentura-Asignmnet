import axios from "axios";
import React, { useState } from "react";
import user from "./User";


export default function CreateUser() {
  
  const [userData, setUser] = useState(user);
  return (
    <div>
      <h1>Create A User.</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="uid"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, uid: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="email"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="given_name"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, given_name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="middle_name"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, middle_name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="name"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="family_name"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, family_name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="nickname"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, nickname: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="phone_number"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, phone_number: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="comment"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, comment: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="picture"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, picture: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="directory"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, directory: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="meta_data"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, meta_data: e.target.value });
          }}
        />
        <input
            type="text"
            placeholder="tags"
            style={{ margin: "1rem" }}
            onChange={(e) => {
                
                let tags = e.target.value.split(",");
                setUser({ ...userData, tags: tags } as typeof userData);
            }}
        />
        <input
          type="text"
          placeholder="is_suspended"
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setUser({ ...userData, is_suspended: e.target.value });
          }}
        />
        <button
          onClick={() => {
            let headers = {
              "Content-Type": "application/json",
              "Authorization": "Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT",
            };
            axios
              .post(
                "https://7057f138d2224f01b4af1705865e57e7.weavy.io/api/users",
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
          Submit.
        </button>
      </div>
    </div>
  );
}
