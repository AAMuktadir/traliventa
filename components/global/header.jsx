"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Paths } from "@/utils/data/navigation";

export default function Header() {
  const [selectedLogo, setSelectedLogo] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logo = () => {
    if (selectedLogo) {
      return "/Logo-icon-white.png";
    } else {
      return "/Logo-icon.png";
    }
  };
  return (
    <nav className="fixed w-full px-3 sm:px-12 py-3 sm:py-6">
      <div className="bg-white bg-opacity-40 backdrop-blur-sm rounded-2xl flex justify-between items-center">
        <Link href={"/"} className="p-2 ">
          <Image
            src={logo()}
            height={50}
            width={50}
            alt="logo"
            className="p-3 bg-white hover:bg-gray-700 duration-300 rounded-xl"
            onMouseEnter={() => setSelectedLogo(true)}
            onMouseLeave={() => setSelectedLogo(false)}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 pr-4">
          {Paths.map((item, id) => (
            <Link
              key={id}
              href={item.path}
              className={`${
                pathname == item.path
                  ? "text-white"
                  : "text-[#4E4D4D] hover:text-gray-900 duration-300"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="md:hidden block pr-2">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 w-4/5 h-full  p-4 md:hidden z-50 bg-white bg-opacity-20 backdrop-blur-lg">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col px-8 items-start space-y-4 mt-10">
            {Paths.map((item, id) => (
              <Link
                key={id}
                href={item.path}
                onClick={toggleMenu}
                className={`${
                  pathname == item.path
                    ? "text-white"
                    : "text-[#4E4D4D] hover:text-gray-900 duration-300"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          style={{ width: "20%" }}
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
