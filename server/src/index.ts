import "reflect-metadata";
import "dotenv-safe/config";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
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
    database: !__prod__ ? "board" : process.env.DB_NAME,
    host: !__prod__ ? "localhost" : process.env.DB_HOST,
    username: !__prod__ ? "postgres" : process.env.DB_USERNAME,
    password: !__prod__ ? "postgres" : process.env.DB_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [join(__dirname, "./entity/**/*.*")],
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
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
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }: any) => ({ req, res }),
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(!__prod__ ? 5050 : process.env.PORT!, () => {
    console.log(
      `Server started on ${
        !__prod__
          ? `http://localhost:5050`
          : `https://api-board-graphql.herokuapp.com`
      }${apolloServer.graphqlPath}`
    );
  });
};

main();
