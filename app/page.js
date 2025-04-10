import Image from "next/image";
import Herosection from "@/components/home/herosection";
export default function Home() {
  return (
    <div className="">
      <Herosection />
      <main className="">
        <h4 className="text-2xl sm:text-4xl font-bold">Traliventa</h4>
        <Image src={"/traliventa.png"} height={200} width={200} className="" />

        <h3 className="text-lg sm:text-2xl font-light">
          This website is under construction
        </h3>

        <div className="h-screen"></div>
      </main>
    </div>
  );
}
