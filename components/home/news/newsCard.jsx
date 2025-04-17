"use client";

import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="bg-[#2c2c2e] rounded-2xl shadow-lg overflow-hidden flex flex-col max-w-sm w-full">
      {/* Image Placeholder */}
      <div className="relative h-52 w-full">
        {/* Replace with your actual image */}
        <Image
          src="/img/news/Card-image.jpeg" // Replace with your actual image path
          alt="Event Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Event Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-white text-lg font-semibold mb-1">
          AIUB Cultural Club Events
        </h2>
        <p className="text-[#ff4d4d] font-semibold text-sm mb-1">
          Sat, 29 Feb 2023
        </p>
        <p className="text-gray-400 text-sm mb-4">Middle Badda, Dhaka</p>

        <div className="mt-auto">
          <button className="bg-[#ff4d4d] text-white font-semibold py-2 px-4 rounded-xl w-full hover:bg-red-600 transition duration-300">
            Get Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
