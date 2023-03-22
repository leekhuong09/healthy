import React from "react";

import "./styles.scss";

const ArticalCard = ({ title, intro, image, tags }) => {
  return (
    <div className="artical-card-wp">
      <div className="image-wp">
        <div className="label">{title}</div>
        <img src={image} alt={title} />
      </div>
      <div className="intro">{intro}</div>
      <div className="tags">
        {tags.map((value) => (
          <div className="tag">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default ArticalCard;
