import Image from "next/image";
import React from "react";

const Block = ({ title, para, icon }) => {
  return (
    <div className="border-r border-gray-300 w-60 h-full flex items-center px-3">
      <span className="w-10 h-10 rounded-full mr-5">{icon}</span>
      <div>
        <h3 className="font-bold line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
