import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "./../Contact/Contact";

export default function Navbar() {
  const [height, setHeight] = useState(100);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY > 10 ? 70 : 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="bg-[#2c3e50] border-gray-200 fixed w-full z-20 top-0 left-0 border-b flex"
        style={{ height: `${height}px`, transition: "all 0.5s" }}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Start Framework
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="navbar-default"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              aria-hidden="true"
            >
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-[#34495e] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded ${
                      isActive
                        ? "bg-[#1abc9c] text-white"
                        : "text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded ${
                      isActive
                        ? "bg-[#1abc9c] text-white"
                        : "text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded ${
                      isActive
                        ? "bg-[#1abc9c] text-white"
                        : "text-gray-300 hover:bg-gray-600 hover:text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
