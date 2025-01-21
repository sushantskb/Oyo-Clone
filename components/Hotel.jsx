import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hotel = ({ hotel }) => {
  return (
    <div className="border rounded-lg bg-white shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hotel Banner */}
        <div className="flex-shrink-0">
          <img
            src={hotel?.banner}
            alt="hotel"
            width={200}
            height={200}
            className="w-full md:w-96 h-[21rem] object-cover rounded-lg"
          />
        </div>

        {/* Gallery */}
        <div className="flex flex-col gap-2 w-28">
          {hotel?.gallery?.slice(0, 4).map((ele, index) => (
            <div key={index} className="w-28 h-20 rounded-lg overflow-hidden">
              <img
                src={ele}
                alt="gallery"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Hotel Details */}
        <div className="flex-grow">
          <h2 className="font-bold text-2xl text-gray-800 line-clamp-1 mb-2">
            {hotel.name}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {hotel.description}
          </p>

          {/* Facilities */}
          <div className="mb-6">
            <span className="font-semibold text-lg text-gray-800">
              Facilities:
            </span>
            <ul className="flex flex-wrap gap-4 mt-2">
              {hotel?.facilities?.length > 0 ? (
                hotel.facilities.map((ele) => (
                  <li key={ele.name} className="flex items-center">
                    <Image
                      src={ele.img}
                      width={32}
                      height={32}
                      alt="facility"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {ele.name}
                    </span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">
                  No facilities available
                </li>
              )}
            </ul>
          </div>

          {/* Price and Link */}
          <div className="flex items-center gap-6">
            <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
              Price: ₹{hotel?.price}
            </button>
            <Link
              href={`/hotels/${hotel._id}`}
              className="text-lg font-bold text-red-500 hover:underline">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
