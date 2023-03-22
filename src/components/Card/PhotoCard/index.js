import React from "react";

import "./styles.scss";

const PhotoCard = ({ image, title }) => {
  return (
    <div className="photo-card-wp">
      <div className="photo-card-label">{title}</div>
      <img src={image} alt={title} />
    </div>
  );
};

export default PhotoCard;
