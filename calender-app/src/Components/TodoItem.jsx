import React from "react";
import "../css/TodoItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, month, deleteTodoItem, handleTodo, handleEditTrue }) {
  // console.log(todo);

  return (
    <div className="TodoItem-box">
      <div className="circle-box"></div>
      <div
        className="TodoItem-title-box"
        onClick={() => {
          handleTodo(todo);
        }}
      >
        <p>{todo.title}</p>
      </div>
      <div className="TodoItemBtn">
        <div className="TodoItem-edit">
          <FontAwesomeIcon icon={faPencil} onClick={()=>{
            handleTodo(todo);
            handleEditTrue();
          }}/>
        </div>
        <div className="TodoItem-delete">
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => {
              deleteTodoItem(month, todo.id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
