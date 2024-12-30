import Filter from "@/components/Filter";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import SearchHeader from "@/components/SearchHeader";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Hotels = ({ hotels }) => {
  const router = useRouter();
  const { location: placeholder } = router.query;

  const [list, setList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [price, setPrice] = useState(3500);
  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?value=${checked}`);
    if (data?.hotels) {
      setList(data?.hotels);
    }
  };

  useEffect(() => {
    if (checked.length > 0) {
      handleCheckList();
    }
  }, [checked]);
  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    setList(data.hotels);
  };

  return (
    <div>
      <SearchHeader placeholder={placeholder} />
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 overflow-y-auto max-h-screen border-r scrollbar-hide">
          <Filter
            price={price}
            setPrice={setPrice}
            checked={checked}
            setChecked={setChecked}
            handlePrice={handlePrice}
          />
        </div>
        <div className="col-span-9 overflow-y-auto max-h-screen scrollbar-hide">
          {list.length > 0
            ? list.map((e) => (
                <div className="m-5 col-span-9" key={e._id}>
                  <Hotel hotel={e} />
                </div>
              ))
            : hotels.map((e) => (
                <div className="m-5 col-span-9" key={e._id}>
                  <Hotel hotel={e} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { location } = context.query;
  try {
    const res = await fetch(
      `${process.env.API}/api/hotels?location=${location || ""}`
    );
    const data = await res.json();

    return {
      props: {
        hotels: data.hotels || [],
      },
    };
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return {
      props: {
        hotels: [],
      },
    };
  }
}

export default Hotels;
