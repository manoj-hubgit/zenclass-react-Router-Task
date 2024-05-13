import React from "react";

const Card = ({ element, index }) => {
  return (
    <div
      key={element.id}
      className="cardStyle mt-md-2 mx-md-1 col-md-3 card my-4"
    >
      <img
        src={element.image}
        style={{ height: "10rem" }}
        className="card-img-top mt-2"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">By {element.author}</p>
        <p className="card-text">{element.date}</p>
      </div>
    </div>
  );
};

export default Card;
