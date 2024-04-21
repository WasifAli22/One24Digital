import { BASE_URL } from "@/app/lib/constant";
import ContactSlider from "@/components/contact/ContactSlider";
import GotQuestion from "@/components/contact/GotQuestion";
import OurReach from "@/components/contact/OurReach";
import ReachUs from "@/components/contact/ReachUs";
import React from "react";

const getContactData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query GetContact {
            getContact {
              ContactSliderData {
                contacts {
                  alt
                  url
                }
                description
                title
              }
              GotQuestionData {
                desc
                heading
                number
                paragraph
                solution
              }
              ReachUsData {
                address
                email
                heading
                phone
              }
              cities {
                address
                name
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

    // console.log("data?.data?.getContact", data?.data?.getContact);
    return data?.data?.getContact;
  } catch (error: any) {
    console.error("Error fetching website data:", error.message);
  }
};

const page = async () => {
    const data = await getContactData();
    console.log("🚀 ContactSliderData -> ~ page ~ data:", data && data?.cities)
  return (
    <div>
      <GotQuestion gotQuestionData={data?.GotQuestionData} />
      <ReachUs reachUsData={data?.ReachUsData}/>
      <ContactSlider contactSliderData={data?.ContactSliderData}/>
      <OurReach cities={data?.cities}/>
    </div>
  );
};

export default page;
