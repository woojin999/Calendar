import React from "react";
import moment from "moment";
import "../css/Schedule.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";

function Schedule({
  date,
  openModal,
  schedule,
  isList,
  handleTodo,
  selectedTodo,
}) {
  // 해당 날짜의 일정 리스트 만들기
  const month = date.getMonth()+1 + "월";
  const scheduleList = Object.keys(schedule).includes(
    `${date.getMonth() + 1}월`
  )
    ? schedule[month]
        .filter((todo) => todo.date === moment(date).format("YYYY년 MM월 DD일"))
        .sort((a, b) => a.idx - b.idx)
    : [];
    console.log(scheduleList);
    
  return (
    <div className="schedule-container">
      <div className="Schedule-header">
        <p className="Schedule-title">Schedule</p>
        <div className="Schedule-date">
          <p>{moment(date).format("YYYY년 MM월 DD일")}</p>
          <button className="Schedule.addBtn" onClick={openModal}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="Schedule-box">
        {isList && scheduleList.map((todo, i) => <TodoItem todo={todo} key={i} />)}
      </div>
    </div>
  );
}

export default Schedule;
