import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/lib/constant";
import { ServiceItem } from "@/app/lib/types";
import SkeletonService from "@/components/skeletons/PagSkeleton";
const getPortfolioData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query GetPortfolio {
            getPortfolio {
              PortfolioData {
                description
                details
                id
                includedAgency
                src
                title
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
    return data?.data;
  } catch (error: any) {
    console.error("Error fetching website data:", error.message);
  }
};

const PortfolioDetail = async ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug);
  const formattedSlug = decodedSlug.replace(/-/g, " ");
  const data = await getPortfolioData();
//   console.log(
//     "🚀 ~ PortfolioDetail ~ data:",
//     data?.getPortfolio?.PortfolioData
//   );

  const service = data?.getPortfolio?.PortfolioData.find(
    (product: ServiceItem) =>
      product.title.toLowerCase() === formattedSlug.toLowerCase()
  );

  if (!service) {
    return (
      <div>
        Portfolio data not found
        <SkeletonService />
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <Image
          src={service.src}
          alt={service.title}
          height={500}
          width={500}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="bg-gray-100">
        <div className="md:px-28 px-5 py-10">
          <h1 className="font-bold text-4xl mb-4">{service.title}</h1>
          {/* <p>{service.description}</p> */}
          <p className="text-base text-gray-700">{service.details}</p>
          <div className=" mt-8">
            <h2 className="font-semibold text-xl">INTEGRATED AGENCIES</h2>
            <h5>{service.IcludedAgency}</h5>
          </div>
          <div className=" mt-8">
            <h2 className="font-semibold text-xl">Type</h2>
            <h5>{service.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
