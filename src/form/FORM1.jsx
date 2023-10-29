// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Style from "./form.module.css";

export const FORM1 = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("Form is submitted");
    let userInfo = {
      Name,
      Email,
      Password,
    };
    console.log(userInfo);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={Style.forForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={Name}
            onChange={handleName}
            required
          />
        </div>

        <div className={Style.forForm}>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={Email}
            onChange={handleEmail}
            required
          />
        </div>

        <div className={Style.forForm}>
          <label htmlFor="name">Pass:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={Password}
            onChange={handlePassword}
            required
          />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
