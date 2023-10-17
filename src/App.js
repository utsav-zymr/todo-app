import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import NewTodo from "./components/new-todo/NewTodo";

function App() {
  return (
    <div className="App">
      {/* Header  with App Title and profile and logout button after successfull login/authentication */}
      <Header />
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        {/* Dashboard -> List of todos for the particular user. */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Adding a new todo */}
        <Route
          path="/addTodo"
          element={
            <ProtectedRoute>
              <NewTodo />
            </ProtectedRoute>
          }
         />
      </Routes>

      {/* Button for Add new todo  */}
    </div>
  );
}

export default App;
