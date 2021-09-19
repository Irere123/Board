import { Field, ObjectType } from "type-graphql";

import { Announcement } from "../../entity/Announcement";

@ObjectType()
export class CreateAnnResponse {
  @Field()
  ok: Boolean;

  @Field(() => Announcement)
  announcement: Announcement;
}
