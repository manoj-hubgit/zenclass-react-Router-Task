import React from "react";
import Card from "../Components/Card";

const Digitalmarketing = ({ data }) => {
  const digital = data.filter((ele) => ele.courseName === "digitalMarket");
  return (
    <div>
      <h1 className="text-center mt-5 pt-5">Digital Marketing</h1>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {digital.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Digitalmarketing;
