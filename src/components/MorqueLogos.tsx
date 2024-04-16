import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { Client } from "@/app/lib/types";
import Image from "next/image";

const MorqueLogos = ({ morqueData }: { morqueData: Client[] }) => {
  return (
    <Marquee
      fade={true}
      direction="left"
      reverse={false}
      pauseOnHover={true}
      numberOfCopies={3}
      className="my-custom-marquee space-y-6 px-6 flex items-center"
      innerClassName="my-custom-content" // Add your custom class to change speed
    >
      {morqueData.map((client, groupIndex) => (
        <div
          key={groupIndex}
          className="flex space-x-reverse first:pt-5 even:pt-2 translate-x-5 rotate-[35deg] px-2 items-center justify-center flex-col gap-2 w-fit"
        >
          {Array(5)
            .fill(null)
            .map((_, boxIndex) => {
              // Calculate the index of the client in morqueData
              const clientIndex = (groupIndex * 5 + boxIndex) % morqueData.length;
              const currentClient = morqueData[clientIndex];
              return (
                <Image
                  key={`${groupIndex}-${boxIndex}`}
                  src={currentClient.url}
                  alt={currentClient.alt}
                  width={200}
                  height={200}
                  className="h-[40px] w-[40px] object-contain object-center translate-y-4 rounded-[8px] bg-white drop-shadow-lg transform "
                />
              );
            })}
        </div>
      ))}
    </Marquee>
  );
};

export default MorqueLogos;

