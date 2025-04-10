import React from "react";

export default function Herosection() {
  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/Hero-video-01.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Traliventa
        </h1>
        <h4 className="text-white text-lg font-extralight text-center">
          Where the game begins, passion grows, and every moment is made for
          play.
        </h4>
      </div>
    </div>
  );
}
