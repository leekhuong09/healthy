import React from "react";

import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button-wp">
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default Button;
