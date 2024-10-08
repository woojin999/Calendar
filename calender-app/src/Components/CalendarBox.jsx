import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Schedule from "./Schedule";
import moment from "moment";

function CalendarBox({date, handelDate}) {
    // useEffect(()=>{
    //     let now = moment().format('YYYY년 MM월 DD일');
    //     console.log(now);
        
    // },[]);
  return (
    
      <div className="container">
        <Calendar onChange={handelDate} value={date}/>
      </div>     
    
  );
}

export default CalendarBox;
