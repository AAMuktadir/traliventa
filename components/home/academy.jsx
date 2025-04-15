import React from "react";
import Image from "next/image";

export default function Academy() {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] text-white">
      <Image
        src="/img/Background/home/Academy.jpeg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/50">
        <h4 className="text-3xl sm:text-5xl font-light sm:font-black mb-4">
          ACADEMY
        </h4>
        <p className="text-sm sm:text-base font-medium max-w-3xl">
          Unlock your potential with Traliventa Academy — where aspiring
          athletes, gamers, and enthusiasts come to learn, grow, and thrive.
          From skill-building sessions to expert-led workshops, our academy is
          designed to fuel your passion and elevate your play. Whether you're
          just starting out or sharpening your edge, this is where champions are
          made.
        </p>
      </div>
    </div>
  );
}
