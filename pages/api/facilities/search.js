import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function searchHandler(req, res) {
  if (req.method == "GET") {
    connDB();
    const key = req.query.value;
    let hotels = [];
    if (!key) {
      hotels = await Hotel.find({});
    } else {
      hotels = await Hotel.find({ "facilities.name": { $in: key } });
    }
    return res.status(200).json({ success: true, hotels });
  }
}
