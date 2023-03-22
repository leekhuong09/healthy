import React from "react";

import "./styles.scss";

const RecordCard = ({ image, title, label }) => {
  return (
    <div className="record-card-wp">
      <div className="mask">
        <div className="record-card-title">{title}</div>
        <div className="record-card-label">{label}</div>
      </div>

      <img src={image} alt={title} />
    </div>
  );
};

export default RecordCard;
