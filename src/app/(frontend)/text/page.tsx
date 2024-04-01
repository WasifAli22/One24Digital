import React from "react";
import clientsData from "@/components/mockApi";
import Image from "next/image";

function App() {


  return (
    <div className="w-screen h-screen bg-white text-black">
      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="text-3xl font-semibold mb-10 text-blue-900">
          With Great Outcomes.
        </div>
        <div className="text-base font-light mb-40 text-gray-600">
          Our customers have gotten offers from awesome companies.
        </div>
        <div className="flex w-1200 overflow-hidden select-none">
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-marquee">
            {clientsData.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <Image
                  src={el.url}
                  alt="AlgoExpert"
                  width={500}
                  className="object-contain w-full h-full rounded-[0.5rem] aspect-[16/9] p-5"
                  style={{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-marquee-reverse animate-delay-3s">
            {clientsData.map((el,index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={el.url}
                  alt="AlgoExpert"
                  className="object-contain w-full h-full rounded-[0.5rem] aspect-[16/9] p-5"
                  style={{
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
