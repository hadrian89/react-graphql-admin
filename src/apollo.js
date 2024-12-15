import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: "http://localhost:4000/transactionApi",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});