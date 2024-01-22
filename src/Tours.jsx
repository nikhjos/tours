import React from "react";
import SingleTour from "./SingleTour";

const Tours = ({ tours, removeTours }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return <SingleTour key={id} {...tour} removeTours={removeTours} />;
      })}
    </div>
  );
};

export default Tours;
