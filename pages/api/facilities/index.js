import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function facilityHandler(req, res) {
  connDB();
  if (req.method === "GET") {
    const facilites = await Hotel.find({}).distinct("facilities");
    return res.status(200).json({ success: true, facilites });
  }
}
