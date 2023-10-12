import React, { useState } from "react";
import "./Login.css";
import data from "../../userData/users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    data.map((item) => {
      if (item.email === email && item.password === password) {
        navigate("/dashboard", { replace: true });
        localStorage.setItem("loginStatus", true);
      }
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="login__container">
        <h3>Todo App</h3>
        <form className="login__form">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
