import { useRouter } from "next/router";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
const PaymentSuccess = () => {
    const router = useRouter()
    const paymentId = router.query.id
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white  shadow-lg p-12 max-w-md text-center rounded-3xl">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-500 text-white rounded-full h-16 w-16 flex items-center justify-center">
            <CiCircleCheck className="h-16 w-16" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Payment Successfull !
        </h1>
        <p className="text-gray-600 mt-4 text-sm">
          Thank you for your payment. Your booking is confirmed
        </p>
        <p className="text-gray-600 mt-2">
            Payment Id: <span>{paymentId ? paymentId : "123456"}</span>
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
