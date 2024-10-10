import React, { useState } from "react";
import "../css/TodoAddModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function TodoAddModal({ open, closeModal, date, schedule, addSchedule }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("09:00");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return;
    }

    const month = date.getMonth() + 1 + "월";
    let newId = crypto.randomUUID();

    const newTodo = {
      id: `${newId}`,
      date: `${moment(date).format("YYYY년 MM월 DD일")}`,
      title: `${title}`,
      description: `${description}`,
      time: `${time}`,
      idx: 1,
    };
    console.log(newTodo);

    if (Object.keys(schedule).includes(`${date.getMonth() + 1}월`)) {
      newTodo.idx = schedule[month].length + 1;
      const monthSchedule = schedule[month].concat(newTodo);
      addSchedule((prev) => ({
        ...prev,
        [month]: monthSchedule,
      }));
      console.log("있어");
    } else {
      addSchedule((prev) => ({
        ...prev,
        [month]: [newTodo],
      }));
      console.log("없어");
    }
    console.log(schedule);

    setTitle("");
    setDescription("");
    setTime("09:00");
    closeModal();
  };

  return (
    <div className={open ? "TodoAddModal-area open" : "TodoAddModal-area"}>
      <form onSubmit={handleSubmit} className="TodoAddModal-form">
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
