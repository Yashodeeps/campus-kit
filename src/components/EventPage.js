import React from "react";
import EventCard from "./EventCard";
import EventCategory from "./EventCategory";
import { CLOUD_IMG, DESIGN_IMG, DS_IMG, WEB_IMG } from "../utils/constants";

const EventPage = () => {
  const categoryObj = [
    {
      category: "Design",
      image: DESIGN_IMG,
    },
    {
      category: "Data Science",
      image: DS_IMG,
    },
    {
      category: "WEB",
      image: WEB_IMG,
    },
    {
      category: "Cloud",
      image: CLOUD_IMG,
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-xl px-2 m-4 font-bold">Upcoming Events</h1>
        <div className="flex flex-wrap">
          {Array(6)
            .fill(null)
            .map((card, index) => (
              <EventCard key={index} />
            ))}
        </div>

        <h1 className="text-xl px-2 m-4 font-bold">Top Categories</h1>
        <div className="flex">
          {categoryObj.map((c, index) => {
            return <EventCategory category={c.category} image={c.image} />;
          })}
        </div>
      </div>

      <h1 className="text-xl px-2 m-4 font-bold">Past Events</h1>
      <div className="grid grid-flow-col">
        {Array(6)
          .fill(null)
          .map((card, index) => (
            <EventCard key={index} />
          ))}
      </div>
    </>
  );
};

export default EventPage;
