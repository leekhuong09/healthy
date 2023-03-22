import React from "react";

import Hexagon from "../Hexagon";

import "./styles.scss";

const Filter = ({ onClick }) => {
  return (
    <div className="filter-wp">
      <Hexagon
        icon="/icons/knife.svg"
        text="Morning"
        onClick={() => onClick("Morning")}
      />
      <Hexagon
        icon="/icons/knife.svg"
        text="Lunch"
        onClick={() => onClick("Lunch")}
      />
      <Hexagon
        icon="/icons/knife.svg"
        text="Dinner"
        onClick={() => onClick("Dinner")}
      />
      <Hexagon
        icon="/icons/cup.svg"
        text="Snack"
        onClick={() => onClick("Snack")}
      />
    </div>
  );
};

export default Filter;
