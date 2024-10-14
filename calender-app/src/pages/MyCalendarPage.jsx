import React, { useEffect, useState } from "react";
import CalendarBox from "../Components/CalendarBox";
import Schedule from "../Components/Schedule";
import TodoAddModal from "../Components/TodoAddModal";

function MyCalendarPage(props) {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState(() => loadData());

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const [isList, setIsList] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleTodo = (todo) => {
    setSelectedTodo(todo);
    setIsList(false);
  };
  const closeDetail = () => {
    setIsList(true);
  };

  const openModal = () => {
    setModal(true);
    // console.log("openModal");
  };
  const closeModal = () => {
    setModal(false);
  };

  const updateTodoItem = (month, newTodo) => {
    const updateList = schedule[month]
      .filter((todo) => todo.id !== newTodo.id)
      .concat(newTodo);
    setSchedule((prev) => ({
      ...prev,
      [month]: updateList,
    }));
  };

  const deleteTodoItem = (month, id) => {
    const newList = schedule[month].filter((todo) => todo.id !== id);
    setSchedule((prev) => ({
      ...prev,
      [month]: newList,
    }));
    setIsList(true);
  };

  return (
    <div className="MyCalendarPage-area">
      <div className="MyCalendarPage-box">
        <CalendarBox
          date={date}
          handelDate={setDate}
          schedule={schedule}
          closeDetail={closeDetail}
        />
        <Schedule
          date={date}
          openModal={openModal}
          schedule={schedule}
          isList={isList}
          handleTodo={handleTodo}
          selectedTodo={selectedTodo}
          deleteTodoItem={deleteTodoItem}
          closeDetail={closeDetail}
          updateTodoItem={updateTodoItem}
        />
        <TodoAddModal
          open={modal}
          closeModal={closeModal}
          date={date}
          addSchedule={setSchedule}
          schedule={schedule}
        />
      </div>
    </div>
  );
}

function loadData() {
  // 고정 데이터
  const Todo = {
    id: "14f82edc9-7f03-4b9c-b9bc-1e53913566b47",
    date: "2024년 10월 08일",
    title: "프로젝트 시작",
    description: "calender 프로젝트 시작",
    time: "09:00",
    idx: 1,
  };
  const Todo2 = {
    id: "1f2edc9-7f03-4b9c-b9bc-1e539135b47",
    date: "2024년 10월 14일",
    title: "프로젝트 완성",
    description: "calender 프로젝트 완성",
    time: "22:00",
    idx: 2,
  };
  // 로컬스토리지
  const schedule = JSON.parse(localStorage.getItem("schedule"));
  return schedule ? schedule : { ["10월"]: [Todo, Todo2] };
}

export default MyCalendarPage;
