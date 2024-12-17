import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function rangeHandler(req, res) {
  if (req.method === "GET") {
    connDB();
    let hotels = [];
    const value = req.query.price;
    // console.log(price);
    
    if (!value) {
      hotels = await Hotel.find({});
    } else {
      hotels = await Hotel.find({ price: { $lt: value } });
    }
    return res.status(200).json({ success: true, hotels });
  }
}
