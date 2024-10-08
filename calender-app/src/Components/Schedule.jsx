import React from "react";
import moment from "moment";
import "../css/Schedule.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Schedule({ date, openModal }) {
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
    </div>
  );
}

export default Schedule;
