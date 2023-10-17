import React from "react";
import "./Todo.css";
import { Delete, Done, Edit } from "@material-ui/icons";

const Todo = ({title, description, createdAt}) => {
  const handleCompleteToDo = () => {
    console.log("Complete todo");
  };
  const handleDeleteToDo = () => {
    console.log("Delete Todo");
  };
  const handleEditToDo = () => {
    console.log("Delete Todo");
  };
  return (
    //  this is a single todo that is to be mapped and displayed according to data recieved
    <div className="todo">
      <li className="todo__item">{title}</li>
      <div className="todo__actions">
        <button className="edit__button" onClick={handleEditToDo}>
          <Edit />
        </button>
        <button className="complete__button" onClick={handleCompleteToDo}>
          <Done />
        </button>
        <button className="delete__button" onClick={handleDeleteToDo}>
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default Todo;
