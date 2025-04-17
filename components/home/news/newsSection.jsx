import React from "react";
import NewsCard from "./newsCard";

export default function NewsSection() {
  return (
    <div className="bg-black px-4 sm:px-20 w-full h-full py-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[27px] font-black text-white uppercase text-center">
          News
        </h3>

        <p className="text-center text-white text-[14px] pt-4 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 sm:gap-12 pt-16">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
