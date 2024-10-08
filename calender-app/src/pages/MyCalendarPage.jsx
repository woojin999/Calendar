import React from "react";
import CalendarBox from "../Components/CalendarBox";

function MyCalendarPage(props) {
  return (
    <div className="MyCalendarPage-area">
      <div className="cal-area">
        <CalendarBox />
      </div>
    </div>
  );
}

export default MyCalendarPage;
