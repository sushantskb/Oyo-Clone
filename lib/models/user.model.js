import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    hotels: [
      {
        hotel: {
          type: mongoose.Schema.Types.ObjectId,
        },
        date: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
