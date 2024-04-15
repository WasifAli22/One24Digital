import { arrow, curverArrow } from "../../public/mock";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  compaign01,
  compaign02,
  compaign03,
  compaign04,
  compaign05,
  compaign06,
  compaign07,
  compaign08,
  compaign09,
  compaign10,
  compaign11,
  compaign12,
  compaign13,
  compaign14,
} from "../../public/compaign images";

export const bannerData = {
  animeText: "We help brands think differently",
  background: {
    bgColor: {
      dark: "#004999", // gradient color made from dark-blue to dark-light
    },
    bgImg: "/trendBannerbg.png", // optional image if present then it shows
  },
  curveArrow: {
    url: curverArrow, // Replace with the actual path
    alt: "name of img",
    h: 197,
    w: 206,
  },
  arrowImg: {
    link: "#compaign", // name of section you want to link
    url: arrow, // Replace with the actual path
    alt: "arrow img", // pointing image to a specific section
    size: {
      h: 90,
      w: 90,
    },
  },
};
interface ImageData {
  src: string | any;
  alt: string;
}
interface Data {
  title: string;
  images: ImageData[];
}
export const testImages: Data = {
  title: "campaign",
  images: [
    {
      src: compaign01,
      alt: "compaign1",
    },
    {
      src: compaign02,
      alt: "compaign2",
    },
    {
      src: compaign03,
      alt: "compaign3",
    },
    {
      src: compaign04,
      alt: "compaign3",
    },
    {
      src: compaign05,
      alt: "compaign3",
    },
    {
      src: compaign06,
      alt: "compaign3",
    },
    {
      src: compaign07,
      alt: "compaign7",
    },
    {
      src: compaign08,
      alt: "compaign8",
    },
    {
      src: compaign09,
      alt: "compaign9",
    },
    {
      src: compaign10,
      alt: "compaign10",
    },
    {
      src: compaign11,
      alt: "compaign11",
    },
    {
      src: compaign12,
      alt: "compaign12",
    },
    {
      src: compaign13,
      alt: "compaign13",
    },
    {
      src: compaign14,
      alt: "compaign14",
    },
  ],
};
interface TrendsBanner {
  heading: string;
  animatedText: string;
  bgImg: string;
}
export const trendsData = {
  heading: "We set trends.",
  animatedText: "We don't follow.",
  bgImg: "/trendBannerbg.png",
};
