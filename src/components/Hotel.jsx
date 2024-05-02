import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ title, address, price, img }) => {
  return (
    <Link to={"/booking"}>
      <div className="flex bg-gray-500 mb-2 rounded-2xl">
        <img
          className="rounded-2xl object-cover aspect-square"
          src={img}
          alt="image"
        />
      </div>
      <h2 className="font-bold">{title}</h2>
      <h3 className="text-sm text-gray-400">{address}</h3>
      <div className="mt-1">
        <span className="font-bold">${price}</span> per night
      </div>
    </Link>
  );
};

export default Hotel;
