import Image from "next/image";
import React from "react";

const Header5 = () => {
  return (
    <div className="bg-gray-100 py-16 mt-12">
      <div className="container mx-auto px-6 lg:px-12 flex md:flex-row items-center">
        {/* Left Section */}
        <div className="flex-1">
          <Image
            width={500}
            height={500}
            src={"/map.avif"}
            alt="world map"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-10 md:mt-0 text-center md:text-left ml-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            There&apos;s an oyo around. Always.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            More Destinations. More Ease. More Affordable.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8 text-lg mb-6">
            <div>
              <span className="text-2xl font-bold">35+</span>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="border border-gray-400 rotate-12"></div>
            <div>
              <span className="text-2xl font-bold">174,000+</span>
              <p className="text-gray-600">Hotels & Homes</p>
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
            <p className="flex items-center gap-2">
              <span className="bg-green-500 w-2 h-2 rounded-full"></span>
              Indonesia
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-red-500 w-2 h-2 rounded-full"></span>
              Malaysia
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-blue-500 w-2 h-2 rounded-full"></span>
              US
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-pink-500 w-2 h-2 rounded-full"></span>
              UK
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
              Denmark
            </p>
            <p className="flex items-center gap-2">
              <span className="bg-purple-500 w-2 h-2 rounded-full"></span>
              Netherlands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header5;
