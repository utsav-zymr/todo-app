import React from "react";
import "./Dashboard.css";
import { Add } from "@material-ui/icons";
import { useNavigate } from "react-router";
import Todo from "../todo/Todo";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const newTodo = localStorage.getItem("newTodo");
  const navigate = useNavigate();
  // console.log(JSON.parse(newTodo));
  const addToDo = () => {
    console.log("Add btn clicked");
    navigate("/addTodo");
  };
  return (
    <div className="dashboard__container">
      <h3>Welcome {user}</h3>
      <div className="dashboard">
        {/* Button for adding a new todo */}
        <button onClick={addToDo} className="add__button">
          New <Add />
        </button>
        {/* Display list of todos added by the user */}
        <ul className="todo__list"></ul>
      </div>
    </div>
  );
};

export default Dashboard;
