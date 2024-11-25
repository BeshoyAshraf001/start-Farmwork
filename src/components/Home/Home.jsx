import React from "react";
import img from "../../assets/imgs/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="bg-[#1abc9c] min-h-screen content-center">
        <picture className="size-48 block mx-auto mb-3">
          <img src={img} alt="" className="w-full" />
        </picture>
        {/* Title Section */}
        <div className="title text-center text-[#fff] text-2xl font-bold uppercase">
          portfolio component
          <div className="icon flex items-center justify-center mt-2 sm:mx-4 lg:mx-8">
            <div className="w-20 h-1 bg-[#fff]"></div>
            <i className="fa-solid fa-star mx-1"></i>
            <div className="w-20 h-1 bg-[#fff]"></div>
          </div>
        </div>
        <p className="text-center text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
