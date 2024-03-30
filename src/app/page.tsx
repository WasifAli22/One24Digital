
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Header , Banner, Compaign, TrendBanner } from "@/components";



export default function Home() {
  return (
    <div className="relative ">
      <Banner />
      <Compaign />
      <TrendBanner />
      {/* <Footer/> */}
    </div>
  );
}
