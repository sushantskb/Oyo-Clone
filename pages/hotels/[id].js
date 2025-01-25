import HotelPage from "@/components/HotelPage";
import HotelRatingsAndPolicy from "@/components/HotelRatingsAndPolicy";
import SearchHeader from "@/components/SearchHeader";
import Slider from "@/components/Slider";
import Cookies from "js-cookie";
import { useEffect } from "react";
const SingleHotel = ({ hotel, hotelId, reviews }) => {
  return (
    <div className=" mx-auto ">
      <SearchHeader />
      <Slider banner={hotel.banner} gallery={hotel.gallery} />
      <HotelPage
        id={hotel._id}
        title={hotel.name}
        description={hotel.description}
        location={hotel.location}
        price={hotel.price}
        facilities={hotel.facilities}
        oldPrice={hotel.oldPrice}
        types={hotel.types}
      />
      <HotelRatingsAndPolicy id={hotelId} reviews={reviews} />
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.id);
  const res = await fetch(`${process.env.API}/api/hotels/${context.query.id}`);
  const data = await res.json();

  // reviews data
  const response = await fetch(
    `${process.env.API}/api/hotels/reviews?hotelId=${context.query.id}`
  );
  const reviewsData = await response.json();
  return {
    props: {
      hotel: data.hotel || {},
      hotelId: context.query.id,
      reviews: reviewsData || {},
    },
  };
}

export default SingleHotel;
