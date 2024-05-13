import React from "react";
import Card from "../Components/Card";

const Fullstack = ({ data }) => {
  const fsddata = data.filter((ele) => ele.courseName === "datascience");
  return (
    <div>
      <h1 className="text-center mt-5 pt-5">Fullstack Developement</h1>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {fsddata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Fullstack;
