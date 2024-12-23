import React from "react";
import { FaStar, FaWifi, FaTv } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BsSnow, BsBuilding } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import Image from "next/image";
const HotelPage = ({
  title,
  ratings,
  description,
  location,
  facilities,
  price,
  oldPrice,
  types,
}) => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
        {/* Main Content Section */}
        <div className="lg:w-2/3">
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-600">{location}</p>
              <p className="flex items-center text-gray-600 mt-2">
                <span className="font-medium">{ratings ? ratings : 4.4}</span> ·
                Check-in rating · Delightful experience
              </p>
            </div>
            <div className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
              <span className="text-lg font-semibold">
                {ratings ? ratings : 4.4}
              </span>
              <FaStar className="ml-2 text-white" />
              <span className="ml-2">(186 Ratings)</span>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="my-6">
            <h2 className="text-xl font-bold">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {facilities.map((fac) => (
                <div key={fac.name} className="flex items-center">
                  <Image
                    src={fac.img}
                    width={100}
                    height={100}
                    alt="facility image"
                    className="h-8 w-8 mr-2"
                  />
                  <span>{fac.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="my-6">
            <h2 className="text-xl font-bold">About this OYO</h2>
            <p className="text-gray-700 mt-2">{description}</p>
          </div>
        </div>

        {/* Booking Section */}

        <div className="lg:w-1/3 border p-6 rounded-lg bg-gray-50 shadow-lg">
          {/* Card Header */}
          <div className="bg-red-500 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6">
            <div className="flex gap-4 justify-center items-center text-lg font-semibold">
              <CiDiscount1 size={32} />{" "}
              <span className="text-sm">
                Login now to get upto 15% lower prices
              </span>
              <button
                className="px-2 text-base mr-2 rounded-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
                Login
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-2xl font-bold">₹2962</p>
              <p className="text-gray-600 text-sm line-through">₹12612</p>
              
            </div>
            <p className="text-lg text-orange-500">76% off</p>
          </div>
          <div className="my-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="my-4">
            <label className="text-sm font-medium text-gray-600 block mb-1">
              Room Type
            </label>
            <select className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
              <option>Classic</option>
              <option>Deluxe</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">Total Price: ₹3532</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold">
              Continue to Book
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            By proceeding, you agree to our{" "}
            <span className="text-blue-600 underline">Guest Policies</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
