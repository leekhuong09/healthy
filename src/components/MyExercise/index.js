import React from "react";

import "./styles.scss";

const MyExercise = ({ data }) => {
  var dateObj = new Date();
  var date = dateObj.getDate();
  var month = dateObj.getMonth();
  var year = dateObj.getFullYear();
  return (
    <div className="my-exercise-wp">
      <div className="my-exercise-head">
        <div className="table-name">
          <div>MY</div>
          <div>EXERCISE</div>{" "}
        </div>
        <div className="date">
          {year}.{month}.{date}
        </div>
      </div>
      <div className="my-exercise-body">
        <div className="ul">
          {data.map(({ title, kcal, time }) => (
            <div className="li">
              <div className="item">
                <div className="left">
                  <div className="title">{title}</div>
                  <div className="kcal">{kcal}</div>
                </div>
                <div className="time">{time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyExercise;
