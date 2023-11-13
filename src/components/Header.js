import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex p-6 shadow-2xl justify-between">
        <Link to={"/"}>
          <div className="flex">
            <h1 className="text-3xl font-bold text-blue-600   ">Campus</h1>
            <span className="text-3xl font-bold text-gray-600 ">Kit</span>
          </div>
        </Link>

        {/* <div>
        <input className="border border-slate-500 rounded-lg w-96  px-10 py-1 m-2" />
        <button className="bg-blue-600 px-2 py-1 text-white rounded-lg">
          Search
        </button>
      </div> */}

        <div className="flex justify-center mx-4">
          <button className="m-2 py-2 px-3">Sign in</button>
          <button className="m-2 py-2 px-3 bg-blue-500 text-white rounded-lg">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
