import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/app/lib/graphSchems";

const fetchWebsiteData = async () => {
  try {
    // Fetch all website data from the specified URL
    const res = await fetch("https://one24.dev/api/v1/one24digital");
    if (!res.ok) {
      throw new Error(`Failed to fetch website data. Status: ${res.status}`);
    }
    const data = await res.json();
    // console.log(
    //   "🚀 ~ fetchWebsiteData ~ data.data[0].website[0]:",
    //   data.data[0].website[0]
    // );
    // Assuming your data structure has a property named "website"
    return data.data[0].website[0];
  } catch (error: any) {
    console.error("Error fetching website data:", error.message);
    throw new Error("Failed to retrieve website data. Please try again later.");
  }
};

const resolvers = {
  Query: {
    getWebsiteData: async () => {
      const websiteData = await fetchWebsiteData();
      return websiteData;
    },
    // getHeader
    getHeader: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the header data from the fetched website data
      return websiteData.header;
    },
    // getLandingHome
    getHome: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the home data from the fetched website data
      return websiteData.home;
    },

    // getFooter
    getFooter: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the footer data from the fetched website data
      return websiteData.footer;
    },
    // getPortfolio
    getPortfolio: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the portfolio data from the fetched website data
      return websiteData.portfolio;
    },
    // getServices
    getServices: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the services data from the fetched website data
      return websiteData.services;
    },
    // getCompany
    getCompany: async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the company data from the fetched website data
      return websiteData.company;
    },
    // getContact
    getContact : async () => {
      const websiteData = await fetchWebsiteData();
      // Extract the contact data from the fetched website data
      return websiteData.contact;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
