import React, { useState } from "react";
import CalendarBox from "../Components/CalendarBox";
import Schedule from "../Components/Schedule";
import TodoAddModal from "../Components/TodoAddModal";

function MyCalendarPage(props) {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

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
        <Schedule date={date} openModal={openModal}/>
        <TodoAddModal open={modal} closeModal={closeModal} date={date}/>
      </div>
    </div>
  );
}

export default MyCalendarPage;
