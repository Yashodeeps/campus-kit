import React from "react";

const EventCard = () => {
  return (
    <div className="mx-auto">
      <div className="bg-gray-300 w-52 p-4 m-4 rounded-lg h-80 hover:bg-gray-600 hover:text-white hover:px-2 hover:mx-2">
        <img
          src="https://secure-content.meetupstatic.com/images/classic-events/517183652/272x153.webp?w=384"
          alt="event"
          className="rounded-lg"
        />
        <h1 className="font-bold text-2xl p-2">Event Name</h1>
        <h1>Department</h1>
        <h1>Date & Time: </h1>
        <h1>Online/ Offline</h1>
      </div>
    </div>
  );
};

export default EventCard;
