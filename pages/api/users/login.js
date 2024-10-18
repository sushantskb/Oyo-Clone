import signToken from "@/lib/features/signToken";
import User from "@/lib/models/user.model";
import { compare } from "bcryptjs";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please fill all the details",
        });
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Register first",
        });
      }
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
      const token = await signToken(user._id, "1hr");
      return res.status(200).json({
        success: true,
        message: "Logged In",
        token,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Route not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
