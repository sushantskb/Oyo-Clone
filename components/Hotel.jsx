import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-80 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3"
        />
        <div className="flex flex-col justify-between">
          {hotel?.gallery?.map((ele) => (
            <Image
              src={ele}
              alt="hotel"
              width={200}
              height={200}
              className="w-24 h-16 object-cover"
            />
          ))}
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">{hotel.name}</h2>
          <p className="text-justify my-5 text-lg">{hotel.description}</p>
          <div className="text-2xl my-5">
            <span className="font-bold">Facilities:</span>
            <ul className="flex text-sm">
              {hotel ? (
                hotel.facilities?.map((ele) => (
                  <li key={ele.name} className="mr-10 mb-3 flex items-center">
                    <span>
                      <Image
                        src={ele.img}
                        width={200}
                        height={200}
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span className="ml-2">{ele.name}</span>
                  </li>
                ))
              ) : (
                <li>No facilities avaliable</li>
              )}
            </ul>
          </div>
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
