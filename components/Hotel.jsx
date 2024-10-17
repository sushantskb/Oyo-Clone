import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry{" "}
          </h2>
          <p className="text-justify my-5 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here.,
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilities:</span>
            <span>Free wifi, Pet Care, Swiming Pool, Beaches, Resort</span>
          </p>
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price: 4500
            </button>
            <Link
              href={"/hotels/2"}
              className="text-xl font-bold text-red-600 ml-10">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
