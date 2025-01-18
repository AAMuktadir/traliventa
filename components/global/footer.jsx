import React from "react";
import { Paths } from "@/utils/data/navigation";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-8 sm:pt-12 bg-[#B08D18]">
      <div className="grid grid-cols-2 sm:flex items-center sm:space-x-12 justify-center uppercase text-sm px-4 sm:px-0">
        {Paths.map((item, id) => (
          <Link
            key={id}
            href={item.path}
            className="text-white hover:text-gray-400 duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="pt-12 sm:pt-8 flex justify-center gap-8 pb-6">
        <Link href="https://www.facebook.com" target={"_blank"}>
          <FaFacebook className="text-white text-3xl hover:text-gray-400 duration-300" />
        </Link>
        <Link href="https://www.linkedin.com" target={"_blank"}>
          <FaLinkedin className="text-white text-3xl hover:text-gray-400 duration-300" />
        </Link>
        <Link href="https://www.instagram.com/" target={"_blank"}>
          <FaInstagram className="text-white text-3xl hover:text-gray-400 duration-300" />
        </Link>
        <Link href="https://www.youtube.com/" target={"_blank"}>
          <FaYoutube className="text-white text-3xl hover:text-gray-400 duration-300" />
        </Link>
      </div>

      <div className="container mx-auto pt-6 px-6 pb-2">
        <div className="flex flex-col items-center">
          <p className="text-center text-md text-gray-200">
            &copy; {new Date().getFullYear()} Stitched Rose Studio. All rights
            reserved.
          </p>
          <p className="text-center text-xs mt-1 text-gray-100 font-light">
            Designed & Developed by{" "}
            <Link href={"https://planetxinc.xyz/"} target="_blank">
              Planet X Inc Ltd.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
