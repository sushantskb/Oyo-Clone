import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function hotelsHandler(req, res) {
  try {
    await connDB(); // Ensure the DB connection is awaited

    if (req.method === "POST") {
      const params = req.body;
      const newHotel = await Hotel.create(params);
      return res.status(200).json({
        success: true,
        message: "Hotel Created",
        newHotel,
      });
    }

    if (req.method === "GET") {
      const { location } = req.query;
      let hotels = [];

      if (location) {
        hotels = await Hotel.find({ location });
      }

      if (!hotels.length) {
        hotels = await Hotel.find({});
      }

      return res.status(200).json({
        success: true,
        hotels,
      });
    }

    return res.status(404).json({
      success: false,
      message: "Route not found",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

