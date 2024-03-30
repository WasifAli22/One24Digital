
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Header , Banner, Compaign, TrendBanner } from "@/components";



export default function Home() {
  return (
    <div className="flex max-w-full flex-col h-[113px] items-start  ">
      <Banner />
      <Compaign />
      <TrendBanner />
      <Footer/>
    </div>
  );
}
