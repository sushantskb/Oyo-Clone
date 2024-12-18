import connDB from "@/lib/db";
import Razorpay from "razorpay";

export default async function paymentHandler(req, res) {
  if (req.method === "POST") {
    connDB();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const amount = 10;

    const options = {
      amount: (amount * 100).toString(), // Convert to the smallest currency unit (paise for INR)
      currency: "INR",
      payment_capture: 1, // Auto-capture the payment
    };

    try {
      const result = await razorpay.orders.create(options);
      console.log(result);

      res.status(200).json({
        success: true,
        id: result.id,
        currency: result.currency,
        amount: result.amount,
      });
    } catch (error) {
      console.error("Error in payment", error);
      res.status(500).json({
        success: false,
        error: error.message || "Server error occurred",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
