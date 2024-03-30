import { Header , Banner, Compaign, TrendBanner } from "@/components";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col h-[113px] items-start relative ">
      <Banner />
      <Compaign />
      <TrendBanner />
    </div>
  );
}
