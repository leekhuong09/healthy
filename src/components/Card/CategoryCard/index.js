import React from "react";

import "./styles.scss";

const CategoryCard = ({ title, intro }) => {
  return (
    <div className="category-card-wp">
      <div className="title">{title}</div>
      <div className="line"></div>
      <div className="intro">{intro}</div>
    </div>
  );
};

export default CategoryCard;
