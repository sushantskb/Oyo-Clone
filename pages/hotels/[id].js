import Header1 from "@/components/Header1";
import HotelPage from "@/components/HotelPage";
import HotelRatingsAndPolicy from "@/components/HotelRatingsAndPolicy";
import SearchHeader from "@/components/SearchHeader";
import Slider from "@/components/Slider";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const SingleHotel = ({ hotel }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get("user-token");
    if (token !== undefined) {
      setUser(token);
    }
  }, []);
  return (
    <div className=" mx-auto ">
      <SearchHeader />
      <Slider banner={hotel.banner} gallery={hotel.gallery} />
      <HotelPage
        title={hotel.name}
        description={hotel.description}
        location={hotel.location}
        price={hotel.price}
        facilities={hotel.facilities}
        oldPrice={hotel.oldPrice}
        types={hotel.types}
      />
      <HotelRatingsAndPolicy />
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.id);
  const res = await fetch(`${process.env.API}/api/hotels/${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel || {},
    },
  };
}

export default SingleHotel;
