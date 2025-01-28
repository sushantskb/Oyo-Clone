import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

const Payment = () => {
  const params = useRouter();

  const makePayment = async () => {
    const { data } = await axios.post(`/api/razorpay`, {
      amount: params.query.amount,
    });

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      name: "Sushant",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You",
      handler: async function (response) {
        console.log("Payment successful:", response);
        if (response) {
          const res = await axios.post(
            `/api/booking?userId=${params.query.userId}&hotelId=${params.query.id}`,
            { date: params.query.date }
          );
          if (res.status === 200) {
            params.push(`/success?id=${response.razorpay_payment_id}`);
          }
        }
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
