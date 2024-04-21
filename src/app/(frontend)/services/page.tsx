import React from "react";
import ServicesBanner from "@/components/services/ServicesBanner";
import OurServicesCard from "@/components/services/OurServices";
import { BASE_URL } from "@/app/lib/constant";

const getServiceData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `
              query GetServices {
                getServices {
                  ServicesData {
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

const Services = async () => {
    const data = await getServiceData();
    // console.log("🚀 ~ Services ~ data:", data)
  return (
    <div>
      <ServicesBanner
        background={{ color: "red" }}
        text={"Explore Our Services \n & \n Transform Your Business."}
      />
      <OurServicesCard servicesData={data?.getServices?.ServicesData}/>
    </div>
  );
};

export default Services;
