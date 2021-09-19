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

const httpLink = new HttpLink({
  uri: "http://localhost:5050/graphql",
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
