import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { Client } from "@/app/lib/types";
import Image from "next/image";
// import customLoader from "@/app/lib/customLoader";

// Docs: https://aws.amazon.com/developer/application-security-performance/articles/image-optimization
export  function cloudfrontLoader({ src, width, quality } : { src: any, width: number, quality?: number }) {
  const url = new URL(`${src}`)
  url.searchParams.set('format', 'auto')
  url.searchParams.set('width', width.toString())
  url.searchParams.set('quality', (quality || 75).toString())
  return url.href
}

const MorqueLogos = ({ morqueData }: { morqueData: Client[] }) => {
  return (
    <Marquee
      fade={true}
      direction="left"
      reverse={false}
      pauseOnHover={true}
    //   numberOfCopies={3}
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
                  src={currentClient?.url}
                  alt={currentClient?.alt}
                  width={200}
                  height={200}
                  loader={cloudfrontLoader}
                  className="h-[60px] w-[60px] object-contain object-center translate-y-4 rounded-[8px] bg-white drop-shadow-lg transform "
                />
              );
            })}
        </div>
      ))}
    </Marquee>
  );
};

export default MorqueLogos;

