import React, { useState } from "react";
import "../css/TodoAddModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function TodoAddModal({ open, closeModal, date }) {
    const [title, setTitle] = useState('');
    const [descrpition,setDescrpition] = useState('');
    const [time, setTime] = useState('09:00');
  return (
    <div className={open ? "TodoAddModal-area open" : "TodoAddModal-area"}>
      <form action="" className="TodoAddModal-form">
        <div className="TodoAddModal-info">
          <h2>일정 등록하기</h2>
          <FontAwesomeIcon icon={faX} onClick={closeModal} />
        </div>
        <div className="TodoAddModal-date">
          <h3>{moment(date).format("YYYY년 MM월 DD일")}</h3>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-title"
          placeholder="title"
        />
        <textarea
          className="modal-desc"
          rows="5"
          cols="33"
          placeholder="description"
          value={descrpition}
          onChange={(e) => setDescrpition(e.target.value)}
        />
        <input
          type="time"
          className="modal-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit" className="modal-submit">
          작성하기
        </button>
      </form>
    </div>
  );
}

export default TodoAddModal;
