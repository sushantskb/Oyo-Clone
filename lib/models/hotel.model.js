import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Hotel name is required"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
    },
    oldPrice: {
      type: Number,
    },
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    checkIn: {
      type: String,
    },
    checkOut: {
      type: String,
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
    location: {
      type: String,
    },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.models?.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
