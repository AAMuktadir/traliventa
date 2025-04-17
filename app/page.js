import Statistics from "@/components/home/statistics";
import Herosection from "@/components/home/herosection";
import Academy from "@/components/home/academy";
import AboutUs from "@/components/home/aboutUs";
import NewsSection from "@/components/home/news/newsSection";
import EventSection from "@/components/home/events/eventSection";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Herosection />
        <AboutUs />
        <Academy />
        <NewsSection />

        <EventSection />

        <Statistics />
      </main>
    </div>
  );
}
