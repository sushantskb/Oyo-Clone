"use client";
import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    ...(isLogin ? {} : { name: "" }),
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      if (isLogin) {
        response = await axios.post(`/api/users/login`, formData);
      } else {
        response = await axios.post(`/api/users/register`, formData);
      }

      const { data } = response;
      console.log(data);

      if (data.token) {
        Cookies.set("user-token", data.token, { expires: 7 });
      }
      return router.back();
    } catch (err) {
      if (err.response) {
        return setError(err.response.data.message || "Invalid credentials");
      } else {
        return setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };
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
            <p className="font-bold text-5xl text-justify mt-24">
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
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name.."
                    className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                    value={formData.name}
                    onChange={handleChange}
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email.."
                  className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password.."
                  className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                  value={formData.password}
                  onChange={handleChange}
                />
                <p>
                  {error && (
                    <p className="text-sm text-red-500 font-semibold">
                      {error}
                    </p>
                  )}
                </p>
                <button
                  className="w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                  disabled={loading}>
                  {isLogin
                    ? loading
                      ? "Loading..."
                      : "Login"
                    : loading
                    ? "Signing In..."
                    : "Sign Up"}
                </button>
              </form>
              <p className="my-1 text-xl">
                <span>Already have an account ?</span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}>
                  {isLogin ? "Sign Up" : "Login"}
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
