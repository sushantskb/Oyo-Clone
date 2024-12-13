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
    <div className="w-7/12 mx-auto">
      <Image
        src={hotel.banner}
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5 object-cover mx-auto"
      />
      <div>
        <h3 className="text-3xl font-bold">{hotel.name}</h3>
        <p className="text-xl my-5 text-justify">{hotel.description}</p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price: &#8377; {hotel.price}
        </button>
        <p className="text-3xl font-bold my-5">Facilities: </p>
        <ul className="flex text-xl justify-between">
          {hotel?.facilities?.map((fac) => (
            <li key={fac.name} className="flex gap-4 items-center">
              <span>
                <Image
                  src={fac.img}
                  width={200}
                  height={200}
                  className="h-8 w-8"
                />
              </span>
              <span>{fac.name}</span>
            </li>
          ))}
        </ul>
        {user ? (
          <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
            Book Now
          </button>
        ) : (
          <button
            className="w-60 h-14 rounded-lg bg-blue-400 my-5 text-lg"
            onClick={() => router.push("/login")}>
            Login
          </button>
        )}
      </div>
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
