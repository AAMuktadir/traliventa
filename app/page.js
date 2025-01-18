import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <main className="flex flex-col items-center justify-center h-full gap-8">
        <h4 className="text-2xl sm:text-4xl font-bold">Traliventa</h4>
        <Image src={"/traliventa.png"} height={200} width={200} className="" />

        <h3 className="text-lg sm:text-2xl font-light">
          This website is under construction
        </h3>
      </main>
    </div>
  );
}
