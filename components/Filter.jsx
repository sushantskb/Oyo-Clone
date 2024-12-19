import axios from "axios";
import React, { useEffect, useState } from "react";

const Filter = ({ price, setPrice, checked, setChecked, handlePrice }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilites) {
        setList(data.facilites);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCheckList = (e) => {
  //   let newList = [];
  //   if (e.target.checked) {
  //     newList.push(e.target.value);
  //     setChecked(newList);
  //     return;
  //   } else {
  //     newList = newList.filter((i) => i !== e.target.value);
  //     setChecked(newList);
  //     return;
  //   }
  // };

  const handleCheckList = (e) => {
    const { value, checked: isChecked } = e.target; 
    let updatedList = [...checked];

    if (isChecked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter((item) => item !== value);
    }

    setChecked(updatedList);
  };

  console.log(checked);

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="border-2 rounded-md m-5 h-auto py-10 px-3">
      <label htmlFor="price" className="text-xl mr-3 font-bold">
        Price:{" "}
      </label>
      <input
        type="range"
        name="price"
        value={price}
        id="price"
        min={1000}
        max={100000}
        defaultValue={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <span className="ml-10">&#8377; {price}</span>

      <div className="my-10">
        <button
          className="w-full h-12 bg-green-300 cursor-default my-3 rounded-full"
          onClick={handlePrice}>
          Search
        </button>
      </div>

      <div className="my-10">
        <h3 className="text-xl font-bold my-3">Filter by facilities:</h3>
        {list?.map((fac) => (
          <p key={fac} className="grid grid-cols-4 my-3">
            <label htmlFor="checkbox" className="col-span-2">
              {fac.name}
            </label>
            <input
              type="checkbox"
              name="checkbox"
              value={fac.name}
              className="w-5 h-5 ml-3 col-span-1"
              onChange={handleCheckList}
            />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
