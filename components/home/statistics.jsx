import React from "react";

export default function Statistics() {
  return (
    <div className="w-full h-full bg-[url(/img/Background/home/Stat-bg.jpeg)] bg-cover bg-no-repeat bg-center py-12 sm:py-20">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-0">
        <StatCard title="EVENTS ORGANIZED" value="1,000" />
        <StatCard title="SUBSCRIBERS" value="5,000" />
        <StatCard title="TICKETS SOLD" value="12,000" />
      </section>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h4 className="text-[40px] font-bold font-inter">{value}</h4>
      <div className="w-20 border-t border-white"></div>

      <p className="text-[17px] font-inter pt-1">{title}</p>
    </div>
  );
}
