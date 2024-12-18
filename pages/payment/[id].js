import axios from "axios";
import Script from "next/script";
import React, { useEffect } from "react";

const Payment = () => {
  const makePayment = async () => {
    const { data } = await axios.post(`/api/razorpay`);
    console.log(data);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      name: "Sushant",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You",
      handler: function (response) {
        console.log("Payment successful:", response);
      },
      prefill: {
        name: "Sushant",
        email: "sushantsrk2001@gmail.com",
        contact: 9439427124,
      },
    };

    const paymentObj = new window.Razorpay(options);

    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;
