import React, { useState } from "react";
import "./NewTodo.css";
import { useNavigate } from "react-router-dom";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [newTodo, setNewTodo] = useState([]);
  const navigate = useNavigate();
  const todoObject = {
    id: Math.round(Math.random() * 100),
    title: title,
    description: description,
    createdAt: createdAt,
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDateChange = (e) => {
    setCreatedAt(e.target.value);
  };
  const handleToDoSubmit = (e) => {
    console.log("Enter in todo", title, description, createdAt);

    e.preventDefault();
    setNewTodo((prevTodo) => [...prevTodo, todoObject]);
    console.log(JSON.stringify(newTodo));
    localStorage.setItem("newTodo", JSON.stringify(newTodo));
    navigate("/dashboard", { replace: true });
  };
  return (
    <div className="newtodo">
      <div className="newtodo__container">
        <h3>Add New Todo</h3>
        <form className="newtodo__form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <label>Created At</label>
          <input
            type="date"
            name="createdAt"
            id="createdAt"
            value={createdAt}
            onChange={handleDateChange}
          />
          <button onClick={handleToDoSubmit}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default NewTodo;
