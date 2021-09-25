import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Trend } from "../entity/Trend";
import { View } from "../entity/View";

@Resolver()
export class TrendResolver {
  @Query(() => [Trend])
  async trends(): Promise<Trend[]> {
    const trends = await Trend.find();
    return trends;
  }

  @Query(() => [Trend])
  async newTrends(): Promise<Trend[]> {
    const trends = await Trend.find({ take: 3, order: { createdAt: "DESC" } });
    return trends;
  }

  @Mutation(() => Trend)
  async createTrend(
    @Arg("source") source: string,
    @Arg("sourceUrl", { nullable: true }) sourceUrl: string,
    @Arg("imageUrl", { nullable: true }) imageUrl: string,
    @Arg("body") body: string
  ): Promise<Trend> {
    const trend = await Trend.create({
      body,
      source,
      sourceUrl,
      imageUrl,
    }).save();

    return trend;
  }

  @Query(() => String)
  async views(@Arg("trendId") id: string) {
    return await View.count({ where: { trendId: id } });
  }

  @Mutation(() => Boolean)
  async createView(@Arg("trendId") id: string) {
    await View.insert({
      trendId: id,
    });

    return true;
  }
}
