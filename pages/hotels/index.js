import Filter from "@/components/Filter";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";
const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filter />
        </div>
        <div className="col-span-9">
          {hotels
            ? hotels.map((e) => (
                <div className="m-5 col-span-9" key={e._id}>
                  <Hotel hotel={e} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
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
