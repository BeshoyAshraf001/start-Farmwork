import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#2c3e50]  text-white">
          <div className="container">
            <div className="upper p-20 flex items-center justify-between bg-[#2c3e50]">
              <div className="">
                <h2>LOCATION</h2>
                <h3>2215 John Daniel Drive</h3>
                <h4>Clark, MO 65243</h4>
              </div>
              <div className="">
                <h2>AROUND THE WEB</h2>
                <div className="icons flex items-center gap-4 mt-3 justify-center">
                  <div className="icon size-7 flex items-center justify-center border border-10 rounded-full border-white">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="icon size-7 flex items-center justify-center border border-10 rounded-full border-white">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="icon size-7 flex items-center justify-center border border-10 rounded-full border-white">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-center">ABOUT FREELANCER</h2>
                <p className="text-center">
                  Freelance is a free to use, licensed Bootstrap <br /> theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 py-6">
          <p className="text-center  text-white">
            Copyright © Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}
