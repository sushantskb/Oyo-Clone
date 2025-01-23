import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";
import Review from "@/lib/models/review.model";

export default async function reviewHandler(req, res) {
  try {
    await connDB();
    if (req.method === "POST") {
      const { hotelId } = req.query;
      const { rating, review } = req.body;
      const hotel = await Hotel.findById({ _id: hotelId });
      if (!hotel) {
        return res.status(400).json("Invalid Id");
      }

      let feedback = await Review.findOne({ hotelId });

      if (feedback) {
        feedback.reviews.push(review);
        feedback.ratings.push(parseFloat(rating));
        await feedback.save();
      } else {
        feedback = await Review.create({
          hotelId,
          reviews: [review],
          ratings: [parseFloat(rating)],
        });

        hotel.reviews = feedback._id;
        await hotel.save();
      }

      return res.status(201).json("Review Added Successfully");
    }

    if (req.method === "GET") {
      const { hotelId } = req.query;

      const reviews = await Review.findOne({ hotelId });

      const object = Object.fromEntries(
        reviews.ratings.map((rating, index) => [rating, reviews.reviews[index]])
      );

      const ratingCount = reviews.ratings.reduce((acc, rating) => {
        acc[rating] = (acc[rating] || 0) + 1;
        return acc;
      }, {});

      const uniqueRatings = Object.keys(ratingCount)
        .map(Number)
        .sort((a, b) => {
          return b - a;
        });
      const counts = Object.values(ratingCount).sort((a, b) => {
        return b - a;
      });

      const ratings = reviews.ratings.toObject();
      const highestRating = Math.max(...ratings);

      return res.status(200).json({
        rating: highestRating,
        review: object[highestRating],
        ratings: uniqueRatings,
        counts,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json("Internal Server Error");
  }
}
