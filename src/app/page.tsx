
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Header , Banner, Compaign, TrendBanner } from "@/components";
import LogoCarousel from "@/components/LogosCarasuel";



export default function Home() {
  return (
    <div className="relative ">
      <Banner />
      <Compaign />
      <TrendBanner />
      <LogoCarousel />
    </div>
  );
}
