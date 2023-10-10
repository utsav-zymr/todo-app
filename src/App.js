import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* Header  with App Title and profile and logout button after successfull login/authentication */}
      <Header isLoggedIn={isLoggedIn} onLogin={setLoggedIn} />
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login onLogin={setLoggedIn} />} />
        {/* Dashboard -> List of todos for the particular user. */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Button for Add new todo  */}
    </div>
  );
}

export default App;
