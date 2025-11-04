import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ratings({ rating }) {
  const safeRating = Math.max(0, Number(rating) || 0); // ensure valid non-negative number

  return (
    <div className="ratings">
      {[...Array(safeRating)].map((_, index) => (
        <i key={index} className="fa fa-star"></i>
      ))}
    </div>
  );
}

export default Ratings;
