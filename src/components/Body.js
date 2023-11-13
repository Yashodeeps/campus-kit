import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="flex justify-center mx-auto  bg-blue-950 text-white m-2 w-96 p-2 rounded-full">
        <ul className="flex p-2">
          <li className="px-3">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/events"}> Events</Link>
          </li>
          <li className="px-3">About</li>
        </ul>
      </div>

      <div className="flex">
        <div className=" text-5xl font-bold m-10 w-1/2">Coming Soon....</div>
        <div className="w-1/2">
          <img
            alt="vector"
            src="https://img.freepik.com/free-vector/colleagues-preparing-corporate-party-time-management-deadline-brand-event_335657-3083.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
