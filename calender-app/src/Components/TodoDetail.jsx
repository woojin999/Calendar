import React from "react";

import "../css/TodoDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan, faX } from "@fortawesome/free-solid-svg-icons";

function TodoDetail({
  todo,
  month,
  deleteTodoItem,
  closeDetail,
  handleEditTrue,
}) {
  return (
    <div className="todo-detail-box">
      <div className="detail-header">
        <h3>{todo.title}</h3>
        <p>{todo.time}</p>
      </div>
      <div className="detail-desc">
        <p>{todo.description}</p>
      </div>
      <div className="detail-btn-box">
        <div className="Xbtn-box">
          <FontAwesomeIcon icon={faX} onClick={closeDetail} />
        </div>
        <div className="edit-box">
          <FontAwesomeIcon
            icon={faPencil}
            className="editBtn"
            onClick={handleEditTrue}
          />
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

export default TodoDetail;
