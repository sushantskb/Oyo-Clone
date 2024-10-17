import Image from "next/image";
import React from "react";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto">
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5 object-cover mx-auto"
      />
      <div>
        <h3 className="text-3xl font-bold">Where does it come from</h3>
        <p className="text-xl my-5 text-justify">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price: 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities: </p>
        <ul className="flex text-xl justify-between">
          <li>Swimming Pool</li>
          <li>Dogs</li>
          <li>Garden</li>
          <li>Loundry</li>
          <li>Cricket</li>
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
