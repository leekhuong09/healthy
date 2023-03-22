import React from "react";

import RateBanner from "../RateBanner";
import Chart from "../Chart";

import "./styles.scss";

const Highlight = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {},
    },
  };
  return (
    <div className="highlight-wp">
      <RateBanner data={75} />
      <Chart options={options} data={data} />
    </div>
  );
};

export default Highlight;
