import React, { useState } from "react";
import CalendarBox from "../Components/CalendarBox";
import Schedule from "../Components/Schedule";

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
      </div>
    </div>
  );
}

export default MyCalendarPage;
