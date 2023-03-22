import React from "react";
import "./styles.scss";

const RateBanner = ({ data }) => {
  var dateObj = new Date();
  var date = dateObj.getDate();
  var month = dateObj.getMonth();
  return (
    <div className="rate-banner-wp">
      <div
        className="rate"
        style={{
          background: `conic-gradient(
            var(--light-color) 80deg ${((data || 15) * 360) / 100}deg,
            rgba(0,0,0,0) ${((data || 15) * 360) / 100}deg 360deg
        )`,
        }}
      >
        <div className="rate-bg">
          <div className="rate-text">
            {date}/{month} <span>{data || 15}%</span>
          </div>
        </div>
      </div>

      <img src="/images/d01.jpg" alt="Rate Banner" />
    </div>
  );
};

export default RateBanner;
