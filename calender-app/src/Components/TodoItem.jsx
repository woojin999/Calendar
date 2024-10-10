import React from "react";
import "../css/TodoItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil,faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo }) {
  console.log(todo);

  return (
    <div className="TodoItem-box">
      <div className="circle-box"></div>
      <div className="TodoItem-title-box">
        <p>{todo.title}</p>
      </div>
      <div className="TodoItemBtn">
        <div className="TodoItem-edit">
          <FontAwesomeIcon icon={faPencil} />
        </div>
        <div className="TodoItem-delete">
            <FontAwesomeIcon icon={faTrashCan}/>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
