import Image from "next/image";
import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const Slider = ({ banner, gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [banner, ...gallery];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Main Image */}
      <Image
        src={images[currentIndex]}
        width={2000}
        height={2000}
        className="w-full h-full object-cover"
      />
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={handlePrev}>
        <SlArrowLeft className="w-6 h-6 text-red-500" />
      </button>
      <button
        className="absolute top-1/2 right-5 transform bg-white -translate-y-1/2 p-2 rounded-full shadow-md"
        onClick={handleNext}>
        <SlArrowRight className="w-6 h-6 text-red-500" />
      </button>
    </div>
  );
};

export default Slider;
