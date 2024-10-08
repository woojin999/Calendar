import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Schedule from "./Schedule";
import moment from "moment";

function CalendarBox(props) {
    // useEffect(()=>{
    //     let now = moment().format('YYYY년 MM월 DD일');
    //     console.log(now);
        
    // },[]);
  return (
    <div className="MyCalendarPage-box">
      <div className="container">
        <Calendar />
      </div>
      <div className="schedule-container">
      <Schedule />

      </div>
    </div>
  );
}

export default CalendarBox;
