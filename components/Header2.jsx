import React from "react";

const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Chennai",
    },
    {
      name: "Kolkata",
    },
  ];
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {List.map((e) => {
          return <span key={e.name}>{e.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Header2;
