import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: [true, "Hotel Id is required"],
  },

  reviews: [
    {
      type: String,
    },
  ],

  ratings: [
    {
      type: mongoose.Schema.Types.Decimal128,
    },
  ],
});

const Review =
  mongoose.models?.Review || mongoose.model("Review", reviewSchema);

export default Review;
