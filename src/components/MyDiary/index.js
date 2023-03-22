import React from "react";

import DiaryCard from "../Card/DiaryCard";

import "./styles.scss";

const MyDiary = ({ data, page }) => {
  return (
    <div className="my-diary-wp">
      <div className="title">MY DIARY</div>
      <div className="list">
        {data?.slice(0, (page + 1) * 8)?.map((value) => (
          <DiaryCard {...value} />
        ))}
      </div>
    </div>
  );
};

export default MyDiary;
