import React, { useState } from "react";
import img1 from "../../assets/imgs/poert1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";

const images = [img1, img2, img3, img1, img2, img3];

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const closeOverlay = () => {
    setShow(false);
    setSelectedImage(null);
  };

  return (
    <section>
      <div className="container min-h-[102vh]  content-center py-28">
        {/* Title Section */}
        <div className="title text-center text-[#2c3e50] text-2xl font-bold uppercase">
          portfolio component
          <div className="icon flex items-center justify-center mt-2 sm:mx-4 lg:mx-8">
            <div className="w-20 h-1 bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star mx-1"></i>
            <div className="w-20 h-1 bg-[#2c3e50]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {images.map((image, index) => (
            <picture
              key={index}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="rounded-lg w-full"
              />
              <div className="overlay w-full h-full bg-[#1abc9c] opacity-0 hover:opacity-100 absolute flex items-center justify-center top-0 left-0 rounded-lg transition-opacity duration-500">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </picture>
          ))}
        </div>

        {/* Overlay Section */}
        {show && (
          <div
            className="overlay w-screen h-screen bg-[#000000b3] bg-opacity-90 fixed top-0 left-0 flex items-center justify-center"
            onClick={closeOverlay}
          >
            <img
              src={selectedImage}
              alt="Selected Portfolio"
              className="size-[50%] object-contain "
            />
          </div>
        )}
      </div>
    </section>
  );
}
