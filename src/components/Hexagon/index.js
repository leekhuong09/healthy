import React from "react";

import "./styles.scss";

const Hexagon = ({ icon, text, ...otherProps }) => {
  return (
    <div className="hexagon-wp" {...otherProps}>
      <div className="hexagon-icon">
        <img src={icon} alt={text} />
      </div>
      <div className="hexagon-text">{text}</div>
    </div>
  );
};

export default Hexagon;
