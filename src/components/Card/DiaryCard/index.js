import React from "react";

import "./styles.scss";

const DiaryCard = ({ date, time, content }) => {
  return (
    <div className="diary-card-wp">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryCard;
