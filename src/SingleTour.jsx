import React, { useState } from "react";

const SingleTour = ({ id, name, info, image, price, removeTours }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="single-tour">
      <img src={image} alt={name} className="image" />
      <h5 className="name">{name} </h5>
      <p className="info">
        {show ? info.slice(0, 200) : info}....
        <button type="button" className="show" onClick={() => setShow(!show)}>
          {show ? "read more" : "read less"}{" "}
        </button>
      </p>
      <p className="price">₹ {price} </p>

      <button
        type="button"
        className="btn btn-border"
        onClick={() => removeTours(id)}
      >
        Not Intrested
      </button>
    </div>
  );
};

export default SingleTour;
