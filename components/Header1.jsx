"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaApple, FaBusinessTime, FaUser } from "react-icons/fa";
import { IoBusiness, IoCall } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
const Header1 = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get("user-token");
    if (token !== undefined) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("user-token");
    setUser(null);
    router.push("/");
  };
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className=" h-full flex">
        <Block
          title={"Become a member"}
          para={"Get Additional 10% off.."}
          icon={<FaApple size={40} />}
        />
        <Block
          title={"Oyo for business"}
          para={"Trusted by 5000 Corporates"}
          icon={<FaBusinessTime size={40} />}
        />
        <Block
          title={"List your companies"}
          para={"Start earning in 30 min"}
          icon={<IoBusiness size={40} />}
        />
        <Block
          title={"987654321"}
          para={"Call us to book now"}
          icon={<IoCall size={40} />}
        />
        <div className="flex items-center px-3">
          <span
            className="w-10 h-10 rounded-full mr-5 cursor-pointer"
            onClick={user ? () => router.push(`/user/${user.id}`) : ""}>
            <FaUser size={40} />
          </span>
          {user ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3 className="font-bold">Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
