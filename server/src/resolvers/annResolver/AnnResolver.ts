import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Announcement } from "../../entity/Announcement";
import { CreateAnnInput } from "./createAnnInput";
import { CreateAnnResponse } from "./createAnnResponse";

@Resolver()
export class AnnResolver {
  @Query(() => [Announcement])
  async announcements(): Promise<Announcement[]> {
    const anns = await Announcement.find();
    return anns;
  }

  @Query(() => Announcement)
  async announcement(
    @Arg("annId") id: string
  ): Promise<Announcement | undefined> {
    const ann = await Announcement.findOne(id);
    return ann;
  }

  @Mutation(() => CreateAnnResponse)
  async createAnnouncement(
    @Arg("input") { author, body, summary }: CreateAnnInput
  ): Promise<CreateAnnResponse> {
    const announcement = await Announcement.create({
      author,
      body,
      summary,
    }).save();

    return {
      ok: true,
      announcement,
    };
  }
}
