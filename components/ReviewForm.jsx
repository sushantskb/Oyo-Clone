import axios from "axios";
import React, { useState } from "react";

const ReviewForm = ({ id }) => {
  const [review, setReview] = useState({
    rating: "",
    text: "",
  });
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(review);
    const body = {
      rating: review.rating,
      review: review.text,
    };
    try {
      const res = await axios.post(`/api/hotels/reviews?hotelId=${id}`, body);
      console.log(res.status);
      if (res.status === 201) {
        setSubmited(true);
      } else {
        setError(true);
      }
      setReview({
        rating: "",
        text: "",
      });
    } catch (error) {
      setError(true);
      setReview({
        rating: "",
        text: "",
      });
    }
  };
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Submit Your Review</h2>
      {submited ? (
        <p className="text-green-600 font-semibold">
          Thank you for your review
        </p>
      ) : (
        <form>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700">
              Rating 1 to 5
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min={"1"}
              max={"5"}
              value={review.rating}
              onChange={(e) => setReview({ ...review, rating: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none p-2 text-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              rows={"4"}
              value={review.text}
              onChange={(e) => setReview({ ...review, text: e.target.value })}
              className="mt-1 block w-full border p-2 shadow-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-500"></textarea>
          </div>
          {error && (
            <p className="my-4 text-lg text-red-500">Something went wrong</p>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
            onClick={handleSubmit}>
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
