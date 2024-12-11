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
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.models?.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
