import Hotel from "@/lib/models/hotel.model";
import User from "@/lib/models/user.model";

export default async function bookingHandler(req, res) {
  try {
    if (req.method === "POST") {
      const { hotelId, userId } = req.query;
      const { date } = req.body;

      // Validate the user
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found or invalid ID" });
      }

      // Validate the hotel
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found or invalid ID" });
      }

      // Ensure arrays are initialized
      user.hotels = user.hotels || [];
      hotel.guests = hotel.guests || [];

      // Add booking details to the user's hotels array
      const booking = {
        hotel: hotel._id, // Store only the ObjectId
        date,
      };
      user.hotels.push(booking);

      // Add the user to the hotel's guests array
      hotel.guests.push(user._id); // Store only the ObjectId

      // Save both user and hotel
      await user.save();
      await hotel.save();

      return res.status(200).json({ message: "Booked Successfully" });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error during booking:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
