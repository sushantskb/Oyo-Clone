import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function hotelHandler(req, res) {
  connDB();
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
    let hotels;
    if (location || location !== undefined) {
      hotels = await Hotel.find({ location });
      if (hotels.length > 0) {
        return res.status(200).json({
          success: true,
          hotels,
        });
      }

      hotels = await Hotel.find({});
      return res.status(200).json({
        success: true,
        hotels,
      });
    }
    hotels = await Hotel.find({});
    return res.status(200).json({
      success: true,
      hotels,
    });
  }
}
