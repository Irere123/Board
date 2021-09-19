import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";

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

  @Query(() => [Trend])
  async facebookTrends(): Promise<Trend[]> {
    const fbName = ["facebook", "fb", "FACEBOOK", "FB"];
    const trends = await getConnection().query(
      `
      select * from trends as t where "t"."source"=$1 or "t"."source"=$2 or "t"."source"=$3 or
      "t"."source"=$4
    `,
      [fbName[0], fbName[1], fbName[2], fbName[3]]
    );
    return trends;
  }

  @Query(() => [Trend])
  async tiktokTrends(): Promise<Trend[]> {
    const TTName = ["tiktok", "TIKTOK"];
    const trends = await getConnection().query(
      `
      SELECT * FROM trends AS t WHERE "t"."source"=$1 OR "t"."source"=$2
    `,
      [TTName[0], TTName[1]]
    );
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
