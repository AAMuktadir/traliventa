import React from "react";
import { Paths } from "@/utils/data/navigation";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-8 sm:pt-12 bg-black px-3 sm:px-12">
      <section className="sm:flex">
        <div className="sm:w-1/2 flex justify-center sm:justify-start pb-12 sm:pb-0">
          <Link href={"/"}>
            <Image
              src={"/img/Logo-white.png"}
              height={200}
              width={200}
              alt="logo"
            />
          </Link>
        </div>
        <div className="sm:w-1/2 grid grid-cols-2 uppercase text-sm px-4 sm:px-0">
          <section className="text-white">
            <h3 className="text-[18px] font-bold py-4">QUICK LINKS</h3>
            {Paths.map((item, id) => (
              <Link
                key={id}
                href={item.path}
                className="text-white hover:text-gray-400 duration-300"
              >
                <p className="py-2 text-[18px]">{item.title}</p>
              </Link>
            ))}
          </section>

          <section className="text-white">
            <h3 className="text-[18px] font-bold py-4">IMPORTANT LINKS</h3>

            <Link
              href={"/"}
              className="text-white hover:text-gray-400 duration-300"
            >
              <p className="py-2 text-[18px]">Privacy & policy</p>
            </Link>

            <Link
              href={"/"}
              className="text-white hover:text-gray-400 duration-300"
            >
              <p className="py-2 text-[18px]">Terms & Conditions</p>
            </Link>
          </section>
        </div>
      </section>

      <div className="pt-12">
        <div className="pt-12 sm:pt-8 flex justify-center gap-8">
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
              &copy; {new Date().getFullYear()} Traliventa. All rights reserved.
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
    </div>
  );
}
