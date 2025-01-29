import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearchLocation, FaUserCircle } from "react-icons/fa";

const SearchHeader = ({ placeholder }) => {
  const [location, setLocation] = useState(placeholder || "");
  const [user, setUser] = useState(null);
  const token = Cookies.get("user-token");

  useState(() => {
    if (token !== undefined) {
      
      const decoded = jwtDecode(token);
      setUser(decoded)
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("user-token");
    setUser(null);
  };
  return (
    <div className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl -ml-10 font-black text-black ">OYO</h1>
        </div>

        <div className="flex flex-1 items-center bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mx-6">
          <div className="flex items-center w-1/3">
            <input
              type="text"
              value={location}
              placeholder="Search Here..."
              className="w-full bg-transparent outline-none text-gray-700"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <Link
          href={`/hotels?location=${location}`}
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium mr-4">
          Search
        </Link>
        <button className="flex items-center gap-2 text-gray-700">
          <Link href={`/user/${user?.id}`}>
            {" "}
            <FaUserCircle size={34} />
          </Link>
          <span>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link href={"/login"}>Login / Signup</Link>
            )}
          </span>
        </button>
      </div>
      <div className="border-b border-gray-30000 mt-8"></div>
    </div>
  );
};

export default SearchHeader;
