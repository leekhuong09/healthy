import React from "react";
import PhotoCard from "../Card/PhotoCard";

import "./styles.scss";

const PhotoList = ({ data, page }) => {
  return (
    <div className="photo-list-wp">
      {data?.slice(0, (page + 1) * 8)?.map((value) => (
        <PhotoCard {...value} />
      ))}
    </div>
  );
};

export default PhotoList;
