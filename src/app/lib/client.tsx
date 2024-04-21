// apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "./constant";

const client = new ApolloClient({
  uri: `${BASE_URL}/api/graphql`, // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
