import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <div>
      <Head>
        <title>OYO-Login!</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className="absolute w-full top-10 px-20 flex items-center">
          <h2 className="text-5xl font-bold mr-5 text-white">OYO</h2>
          <p className="font-bold text-2xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center item-center w-9/12">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify">
              There&apos;s a smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners
            </p>
          </div>
          <div className="ml-20 pb-40 w-10/12 border bg-white">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to-red-600 text-xl font-bold text-white">
              Sign up & Get $500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your phone number
              </p>
              <input
                type="text"
                placeholder="Enter your name.."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <input
                type="email"
                placeholder="Enter your email.."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <input
                type="password"
                placeholder="Enter your password.."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <button className="w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg">
                Sign Up
              </button>
              <p className="my-1 text-xl">
                <span>Already have an account ?</span>
                <span className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
