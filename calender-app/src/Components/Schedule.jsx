import React, { useLayoutEffect, useState } from "react";
import moment from "moment";
import "../css/Schedule.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import TodoDetail from "./TodoDetail";
import TodoEdit from "./TodoEdit";

function Schedule({
  date,
  openModal,
  schedule,
  isList,
  handleTodo,
  selectedTodo,
  deleteTodoItem,
  closeDetail,
  updateTodoItem,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditTrue = () => {
    setIsEdit(true);
  };
  const handleEditFalse = () => {
    setIsEdit(false);
  };
  // 해당 날짜의 일정 리스트 만들기
  const month = date.getMonth() + 1 + "월";
  const scheduleList = Object.keys(schedule).includes(
    `${date.getMonth() + 1}월`
  )
    ? schedule[month]
        .filter((todo) => todo.date === moment(date).format("YYYY년 MM월 DD일"))
        .sort((a, b) => a.idx - b.idx)
    : [];
  // console.log(scheduleList);
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
        {scheduleList == "" && <div className="non-schedule">일정 없음</div>}
        {isList &&
          scheduleList.map((todo, i) => (
            <TodoItem
              todo={todo}
              key={i}
              month={month}
              deleteTodoItem={deleteTodoItem}
              handleTodo={handleTodo}
              handleEditTrue={handleEditTrue}
            />
          ))}
        {!isList && !isEdit && (
          <TodoDetail
            todo={selectedTodo}
            month={month}
            closeDetail={closeDetail}
            deleteTodoItem={deleteTodoItem}
            handleEditTrue={handleEditTrue}
          />
        )}
        {!isList && isEdit && (
          <TodoEdit
            todo={selectedTodo}
            month={month}
            handleEditFalse={handleEditFalse}
            handleTodo={handleTodo}
            updateTodoItem={updateTodoItem}
          />
        )}
      </div>
    </div>
  );
}

export default Schedule;
