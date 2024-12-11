import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";
const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      {hotels
        ? hotels.map((e) => (
            <div className="m-5" key={e._id}>
              <Hotel hotel={e} />
            </div>
          ))
        : ""}
    </>
  );
};

export async function getServerSideProps(context) {
  const { location } = context.query;
  try {
    const res = await fetch(
      `http://localhost:3000/api/hotels?location=${location || ""}`
    );
    const data = await res.json();
    console.log(data);

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
