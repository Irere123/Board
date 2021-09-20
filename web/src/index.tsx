import ReactDOM from "react-dom";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import Routes from "./Routes";

dayjs.extend(RelativeTime);

const __prod__ = process.env.NODE_ENV === "production";

const httpLink = new HttpLink({
  uri: !__prod__
    ? "http://localhost:5050/graphql"
    : "https://api-board-graphql.herokuapp.com/graphql",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
