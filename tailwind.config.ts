import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "one-digital": {
          dark: "#202123",
          light: "#F1F1F1",
          sky:{
            dark: "#004999",
            light:"#0072FF"
          },
        },
      },
      fontFamily: {
        'arial' : "'Arial-Regular ', Helvetica"
      },
      keyframes : {
        "slide-in-top": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-in-top": "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
    
    },
  },
  plugins: [],
};
export default config;
// @keyframes slide-in-top {
//   0% {
//     transform: translateY(-100%);
//   }
//   100% {
//     transform: translateY(0);
//   }
// }
