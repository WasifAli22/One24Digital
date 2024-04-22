import { Banner, Compaign, TrendBanner } from "@/components";
import LogoCarousel from "@/components/LogosCarasuel";
import { BASE_URL } from "./lib/constant";
import { Suspense } from "react";
import dynamic from 'next/dynamic'

const DynamicBanner = dynamic(() => import('@/components/Banner'),{
  ssr: false
})
const DynamicCompaign = dynamic(() => import('@/components/Compaign'),{
  ssr: false
})
const DynamicTrendBanner = dynamic(() => import('@/components/TrendBanner'),{
  ssr: false
})
const DynamicLogoCarousel = dynamic(() => import('@/components/LogosCarasuel'),{
  ssr: false
})

// import { getHome as query } from "./lib/queries";
// import { getClient } from "./lib/client";

// export const dynamic = "force-dynamic";

const getHomeData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query GetHome {
            getHome {
              bannerData {
                animeText
                arrowImg {
                  alt
                  link
                  size {
                    h
                    w
                  }
                  url
                }
                background {
                  bgColor {
                    dark
                  }
                  bgImg
                }
                curveArrow {
                  alt
                  h
                  url
                  w
                }
              }
              compaignSlider {
                images {
                  alt
                  src
                }
                title
              }
              morqueData {
                clientsData {
                  alt
                  url
                }
                description
                title
              }
              trendsData {
                animatedText
                bgImg
                heading
              }
            }
          }
            `,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    });
    const data = await res.json();

    // console.log("data of home", data?.data?.getHome?.morqueData);
    return data;
  } catch (error: any) {
    console.error("Error fetching website data:", error.message);
  }
};

export default async function Home() {
  const data = await getHomeData();
  // console.log("🚀 ~ Home ~ data:", data && data)

  return (
    <Suspense fallback={<div>Loading...</div>} >
      <div className="relative">
        <DynamicBanner bannerData={data?.data?.getHome?.bannerData} />
        <DynamicCompaign testImages={data?.data?.getHome?.compaignSlider} />
        <DynamicTrendBanner trendsData={data?.data?.getHome?.trendsData} />
        <DynamicLogoCarousel morqueData={data?.data?.getHome?.morqueData} />
      </div>
    </Suspense>
  );
}

// export async function getStaticProps() {
//   const data = await getClient(query);
//   console.log("data of home", data.getHome.morqueData);
//   return {
//     props: {
//       data,
//     },
//     revalidate: 10,
//   };
// }
