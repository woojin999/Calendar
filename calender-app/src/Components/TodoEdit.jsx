import React, { useState } from "react";

import "../css/TodoEdit.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TodoEdit({
  todo,
  month,
  handleEditFalse,
  updateTodoItem,
  handleTodo,
}) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [time, setTime] = useState(todo.time);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }

    const updateTodo = {
      id: todo.id,
      date: todo.date,
      title: `${title}`,
      description: `${description}`,
      time: `${time}`,
      idx: todo.idx,
    };
    updateTodoItem(month, updateTodo);
    handleTodo(updateTodo);
    handleEditFalse();
  };
  return (
    <div className="Edit-box">
      <form onSubmit={handleSubmit}>
        <div className="Edit-header">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title edit"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <textarea
            rows="5"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="Edit-Btn">
            <button type="submit">수정하기</button>
            <FontAwesomeIcon icon={faX} onClick={handleEditFalse}/>
        </div>
      </form>
    </div>
  );
}

export default TodoEdit;
