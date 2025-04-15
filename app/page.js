import Statistics from "@/components/home/statistics";
import Herosection from "@/components/home/herosection";
import Academy from "@/components/home/academy";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Herosection />
        <Academy />
        <Statistics />
      </main>
    </div>
  );
}
