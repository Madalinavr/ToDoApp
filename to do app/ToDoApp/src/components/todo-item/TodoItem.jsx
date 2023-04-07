import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    props.onCompleted(props.id, value)
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />

          <h4>{props.title}</h4>
        </div>
        <div>
          <button onClick={() => props.onEdit(props.id)} className="icon-button"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={() => props.onDelete(props.id)} className="icon-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
