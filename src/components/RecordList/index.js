import React from "react";
import RecordCard from "../Card/RecordCard";

import "./styles.scss";

const RecordList = () => {
  return (
    <div className="record-list-wp">
      <RecordCard
        image="/images/MyRecommend-1.jpg"
        title="BODY RECORD"
        label="自分のカラダの記録"
      />
      <RecordCard
        image="/images/MyRecommend-2.jpg"
        title="MY EXERCISE"
        label="自分の運動の記録"
      />
      <RecordCard
        image="/images/MyRecommend-3.jpg"
        title="MY DIARY"
        label="自分の日記"
      />
    </div>
  );
};

export default RecordList;
