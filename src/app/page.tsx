import Image from "next/image";
import { Header , Banner } from "@/components";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col h-[113px] items-start relative ">
      <Header />
      <Banner />
    </div>
  );
}
