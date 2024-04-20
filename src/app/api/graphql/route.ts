import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "@/app/lib/graphSchems";




const resolvers = {
    Query: {
      getWebsiteData: async () => {
        try {
          // Fetch data from the specified URL
          const res = await fetch('https://one24.dev/api/v1/one24digital');
  
          // Check if the response status is OK (200)
          if (!res.ok) {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
          }
  
          // Parse the response body as JSON
          const data = await res.json();
        //   console.log("🚀 ~ getWebsiteData: ~ data:", data.data[0].website[0]);
  
          // Assuming your data structure has a property named "getWebsiteData"
          return data.data[0].website[0];
        } catch (error : any) {
          // Handle any errors (e.g., network issues, invalid response, etc.)
          console.error('Error fetching data:', error.message);
          throw new Error('Failed to retrieve website data. Please try again later.');
        }
      },
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
