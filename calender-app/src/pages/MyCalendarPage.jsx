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

  const openModal = () => {
    setModal(true);
    console.log("openModal");
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="MyCalendarPage-area">
      <div className="MyCalendarPage-box">
        <CalendarBox date={date} handelDate={setDate} />
        <Schedule
          date={date}
          openModal={openModal}
          schedule={schedule}
          isList={isList}
          handleTodo={handleTodo}
          selectedTodo={selectedTodo}
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
  const schedule = JSON.parse(localStorage.getItem("schedule"));
  return schedule ? schedule : {};
}

export default MyCalendarPage;
