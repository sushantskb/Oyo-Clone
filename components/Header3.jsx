"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header3 = () => {
  const [location, setLocation] = useState("");
  
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-64">
      <div className=" p-5">
        <h2 className="text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 contries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            value={location}
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <button
            type="submit"
            className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl">
            <Link href={`/hotels?location=${location}`}>Search</Link>
          </button>
        </div>
        <div className="flex mx-20 my-5">
          <button
            type="submit"
            className="h-16 px-3 py-2 hover:cursor-pointer text-white text-xl mr-5">
            Continue your search
          </button>
          <button
            type="submit"
            className="h-10 px-5 py-2 mt-3 hover:cursor-pointer border-2 border-white
             text-white mr-5 hover:bg-gray-500 rounded-2xl">
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
