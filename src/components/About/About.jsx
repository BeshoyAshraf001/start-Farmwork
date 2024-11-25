import React from "react";

export default function About() {
  return (
    <>
      <div className="content bg-[#1abc9c] min-h-screen content-center">
        <div className="title text-center text-white text-5xl font-bold uppercase">
          portfolio component
          <div className="icon flex items-center justify-center my-4 text-sm">
            <div className="w-20 h-1 bg-white"></div>
            <i className="fa-solid fa-star mx-1"></i>
            <div className="w-20 h-1 bg-white"></div>
          </div>
        </div>
        <div className="container flex items-center justify-center text-white p-4">
          <div className="">
            <p>
              {" "}
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="text">
            <p>
              {" "}
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
