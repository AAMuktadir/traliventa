"use client";
import React from "react";

export default function CurvedNav({ events }) {
  return (
    <div className="relative w-full h-72 md:h-80 lg:h-96 text-[13px] sm:[19px]">
      {/* Curved SVG */}
      <svg
        viewBox="0 0 1000 200"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 200 Q 500 0 1000 200"
          fill="none"
          stroke="white"
          strokeWidth="5"
        />
      </svg>

      {/* Buttons aligned on the curve */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Previous Button */}
        <div className="absolute left-[8%] bottom-[22%] translate-y-1/2 pointer-events-auto">
          <button
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white text-white font-bold bg-black hover:bg-red-500 duration-300 hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] backdrop-blur-sm"
            onClick={() => events(true)}
          >
            Previous
          </button>
        </div>

        {/* Current Button */}
        <div className="absolute left-1/2 bottom-[50%] -translate-x-1/2 translate-y-1/2 pointer-events-auto">
          <button
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white text-white font-bold bg-black hover:bg-red-500 duration-300 hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] backdrop-blur-sm"
            onClick={() => events(true)}
          >
            Current
          </button>
        </div>

        {/* Upcoming Button */}
        <div className="absolute right-[8%] bottom-[22%] translate-y-1/2 pointer-events-auto">
          <button
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white text-white font-bold bg-black hover:bg-red-500 duration-300 hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] backdrop-blur-sm"
            onClick={() => events(true)}
          >
            Upcoming
          </button>
        </div>
      </div>
    </div>
  );
}
