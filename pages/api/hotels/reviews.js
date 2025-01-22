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
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json("Internal Server Error");
  }
}
