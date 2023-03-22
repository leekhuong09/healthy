import React from "react";
import ArticalCard from "../Card/ArticalCard";

import "./styles.scss";

const Articals = ({ data, page }) => {
  return (
    <div className="articals-wp">
      {data?.slice(0, (page + 1) * 8)?.map((value) => (
        <ArticalCard {...value} />
      ))}
    </div>
  );
};

export default Articals;
