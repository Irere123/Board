import "reflect-metadata";
import "dotenv-safe/config";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import express from "express";
import { createConnection } from "typeorm";
import { join } from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import { __prod__ } from "./constants";
import { PostResolver } from "./resolvers/postResolver/PostResolver";
import { AnnResolver } from "./resolvers/annResolver/AnnResolver";
import { Suggestionsolver } from "./resolvers/suggResolver/SuggResolver";
import { HelloResolver } from "./resolvers/hello";
import { TrendResolver } from "./resolvers/trend";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: !__prod__,
    synchronize: !__prod__,
    entities: [join(__dirname, "./entity/**/*.*")],
    // dropSchema: true,
  });

  const app = express();

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PostResolver,
        AnnResolver,
        Suggestionsolver,
        HelloResolver,
        TrendResolver,
      ],
      validate: false,
    }),
    plugins: [
      __prod__
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context: ({ req, res }: any) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(5050, () => {
    console.log(
      `Server started on http://localhost:5050${apolloServer.graphqlPath}`
    );
  });
};

main();
