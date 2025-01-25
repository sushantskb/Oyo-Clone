import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";

const HotelRatingsAndPolicy = ({ id, reviews }) => {
  console.log(reviews);

  const rating = 4.5;
  return (
    <div className="max-w-4xl font-bold mx-28 my-8 p-4">
      {/* Ratings and Review Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Ratings and Reviews</h2>
        <div className="flex items-center gap-4 border p-4">
          {/* Ratings Box */}
          <div className="bg-gray-100 p-4 rounded-md shadow-lg w-1/3 flex flex-col items-center justify-center">
            <div
              className={`flex items-center gap-2 px-2 rounded-lg ${
                rating >= 4
                  ? "bg-green-600"
                  : rating >= 3
                  ? "bg-green-300"
                  : rating >= 2
                  ? "bg-yellow-500"
                  : "bg-orange-500"
              }`}>
              <span className={`text-2xl font-bold text-white`}>
                {reviews?.rating || "No ratings"}
              </span>
              <FaStar className="text-white text-xl" />
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-2">
              {reviews.review || "No reviews yet"}
            </p>
            <p className="text-sm text-gray-600">
              {reviews?.ratings?.length || 0} ratings
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="w-2/3">
            {reviews?.ratings?.length > 0 ?
              reviews?.ratings?.map((star, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="w-8 text-sm font-semibold">{star}★</span>
                <div className="w-full bg-gray-200 h-2 rounded-md">
                  <div
                    className="bg-yellow-400 h-2 rounded-md"
                    style={{ width: `${reviews?.counts[index]}%` }}></div>
                </div>
                <span className="text-sm text-gray-600">
                  {reviews?.counts[index]}%
                </span>
              </div>
            )) : <p>No ratings</p>}
          </div>
        </div>
      </div>

      {/* Hotel Policies Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Hotel Policies</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Check-in check-out */}
          <div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-700">Check-in</p>
              <p className="font-semibold text-gray-700">Check-out</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-semibold text-gray-700">12:00 PM</p>
              <p className="font-semibold text-gray-700">11:00 AM</p>
            </div>
          </div>

          {/* Policy Notes */}
          <div>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Couples are welcome</li>
              <li>
                Guests can check in using any local or outstation ID proof (PAN
                card not accepted).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ReviewForm id={id} />
    </div>
  );
};

export default HotelRatingsAndPolicy;
