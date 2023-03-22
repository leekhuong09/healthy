import React from "react";
import CategoryCard from "../Card/CategoryCard";

import "./styles.scss";

const Categories = ({ data }) => {
  return (
    <div className="categories-wp">
      {data?.map((value) => (
        <CategoryCard {...value} />
      ))}
    </div>
  );
};

export default Categories;
