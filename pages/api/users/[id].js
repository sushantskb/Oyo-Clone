import connDB from "@/lib/db";
import User from "@/lib/models/user.model";

export default async function userDetailsHandler(req, res) {
  try {
    if (req.method === "GET") {
      await connDB();
      const id = req.query.id;

      const userDetails = await User.findById(id).populate({
        path: "hotels.hotel",
        select: "name banner",
      });
      if (!userDetails) {
        return res.status(404).json("Invalid Id");
      }
      return res.status(200).json(userDetails);
    }
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
}
