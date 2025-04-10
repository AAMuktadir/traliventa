"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Paths } from "@/utils/data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full px-3 sm:px-12 py-3 sm:py-6 z-50">
      <div className="flex justify-between items-center ">
        <Link href={"/"} className="p-2 ">
          <Image
            src={"/img/Logo.png"}
            height={100}
            width={100}
            alt="logo"
            className=""
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
                  : "text-white hover:text-gray-900 duration-300"
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
