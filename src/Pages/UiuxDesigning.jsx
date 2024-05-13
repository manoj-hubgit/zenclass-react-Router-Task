import React from "react";
import Card from "../Components/Card";
const UiuxDesigning = ({ data }) => {
  const ui = data.filter((ele) => ele.courseName === "uiux");
  return (
    <div>
      <h1 className="text-center mt-5 pt-5">UI/UX Desigining</h1>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {ui.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UiuxDesigning;
