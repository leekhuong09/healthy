import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="scroll-to-top" onClick={() => scrollTop()}>
        <img src="/icons/arrow.svg" alt="" />
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
