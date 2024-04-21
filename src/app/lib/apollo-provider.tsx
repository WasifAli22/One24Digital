"use client";
import { BASE_URL } from "./constant";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: `${BASE_URL}/api/graphql`,
  cache: new InMemoryCache(),
});
interface IGraphQlProviderProps {
  children: React.ReactNode;
}
const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default GraphQlProvider;