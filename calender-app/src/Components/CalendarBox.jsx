import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Schedule from "./Schedule";
import moment from "moment";

function CalendarBox({ date, handelDate, schedule, closeDetail }) {
  const showTitle = ({ date, view }) => {
    if (view === "month") {
      const month = date.getMonth() + 1 + "월";
      let hcode = [];
      const scheduleList = Object.keys(schedule).includes(
        `${date.getMonth() + 1}월`
      )
        ? schedule[month]
            .filter(
              (todo) => todo.date === moment(date).format("YYYY년 MM월 DD일")
            )
            .sort((a, b) => a.idx - b.idx)
        : [];

      for (let i = 0; i < scheduleList.length; i++) {
        if (i === 2) break;
        hcode.push(
          <div key={scheduleList[i].id} className="showtitle-dt">
            <p> {scheduleList[i].title}</p>
          </div>
        );
      }
      return <div className="showtitle-box">{hcode}</div>;
    }
  };
  return (
    <div className="container">
      <Calendar
        onChange={handelDate}
        value={date}
        tileContent={showTitle}
        onClickDay={closeDetail}
      />
    </div>
  );
}

export default CalendarBox;
