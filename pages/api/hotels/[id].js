import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function hotelHandler(req, res) {
  if (req.method === "GET") {
    connDB();
    if (req.query.id) {
      const hotel = await Hotel.findById(req.query.id);
      return res.status(200).json({
        success: true,
        hotel,
      });
    }
  }
}
