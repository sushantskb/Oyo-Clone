import connDB from "@/lib/db";
import signToken from "@/lib/features/signToken";
import User from "@/lib/models/user.model";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      connDB();
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "All fields are necessary",
        });
      }

      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(401).json({
          success: false,
          message: "User Already Exists",
        });
      }

      const hashedPassword = await hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      const token = await signToken(user._id, "1hr");
      return res.status(201).json({
        success: true,
        message: "User registerd",
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
