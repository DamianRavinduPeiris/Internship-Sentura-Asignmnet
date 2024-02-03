import axios from "axios";
import React, { useState } from "react";

export default function CreateUser() {
  let user = {
    uid: "",
    email: "",
    given_name: "",
    middle_name: "",
    name: "",
    family_name: "",
    nickname: "",
    phone_number: "",
    comment: "",
    picture: "",
    directory: "",
    meta_data: "",
    tags: "",
    is_suspended: "",
  };
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
            setUser({ ...userData, tags: e.target.value });
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
        <button onClick={()=>{
            let headers ={
                "Content-Type":"application/json",
                "Authorization":"Bearer wys_L3fkkQECW9Cce7foTj1eBwvfH7X8tA46oDoT"
            }
            axios.post("")
        }}>Submit.</button>
      </div>
    </div>
  );
}
