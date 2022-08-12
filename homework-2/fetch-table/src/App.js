import "./App.css";
import React, { useState } from "react";
import Film from "./Film";

const App = () => {
  const [IsAuth, setIsAuth] = useState(false);

  const [userName, setUserName] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const [userPassword, setUserPassword] = useState("");
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (userName === "admin" && userPassword === "admin") {
      setIsAuth({ IsAuth: true });
    } else {
      window.confirm("Hatalı Giriş");
    }
  };

  return (
    <div className="loginDiv">
      {IsAuth ? <Film/> : (
        <form className="loginForm">
        <label className="label">Username</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="username"
          value={userName}
          onChange={handleUserNameChange}
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="password"
          value={userPassword}
          onChange={handleUserPassword}
        />
        <button className="button" type="submit" onClick={handleSignIn}>
          Login
        </button>
      </form>   
      )}
    </div>
  );
};

export default App;
