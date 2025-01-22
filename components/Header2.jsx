import Link from "next/link";
import React from "react";

const Header2 = ({ locations }) => {
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {locations.map((e) => (
          <Link key={e} href={`/hotels?location=${e}`}>
            <span key={e} className="text-gray-700 font-medium">
              {e}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header2;
