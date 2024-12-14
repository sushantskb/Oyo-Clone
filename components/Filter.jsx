import React from "react";

const Filter = () => {
  return (
    <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
      <label htmlFor="price" className="text-xl mr-3 font-bold">
        Price:{" "}
      </label>
      <input type="range" name="price" id="price" min={500} max={3000} />
      <span className="ml-10">&#8377; 50</span>

      <div className="my-10">
        <h3 className="text-xl font-bold my-3">Filter by facilities:</h3>
        <p className="flex items-center my-3">
          <label htmlFor="checkbox">Free Wifi</label>
          <input type="checkbox" name="checkbox" className="w-5 h-5 ml-3" />
        </p>
        <p className="flex items-center my-3">
          <label htmlFor="checkbox">Free Wifi</label>
          <input type="checkbox" name="checkbox" className="w-5 h-5 ml-3" />
        </p>
      </div>
    </div>
  );
};

export default Filter;
