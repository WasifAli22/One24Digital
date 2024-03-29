import Image from "next/image";
import TrendBanner from "@/components/TrendBanner";
import { Header , Banner, Compaign } from "@/components";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col h-[113px] items-start relative ">
      <Header />
      <Banner />
      <Compaign />
      <TrendBanner />
      <Footer/>
    </div>
  );
}
