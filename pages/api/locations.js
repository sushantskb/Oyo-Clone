import connDB from "@/lib/db";
import Hotel from "@/lib/models/hotel.model";

export default async function loactionsHandler(req, res) {
  try {
    await connDB();
    if (req.method === "GET") {
      const hotels = await Hotel.find().select("location");
      const loactions = hotels.map((hotel) => {
        return hotel.location;
      });
      const places = new Set(
        loactions.map((location) => {
          const place = location.split(" ");
          return place[place.length - 1];
        })
      );

      return res.status(200).json({locations: [...places]});
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
