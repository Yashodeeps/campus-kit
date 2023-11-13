import React from "react";

const EventCategory = ({ image, category }) => {
  return (
    <div className="flex flex-col justify-items-center m-4 p-4">
      <img
        alt="category"
        src={image}
        className="rounded-full w-24 h-24 p-2 hover:w-28 hover:h-28"
      />
      <h1 className="px-2 text-lg">{category}</h1>
    </div>
  );
};

export default EventCategory;
