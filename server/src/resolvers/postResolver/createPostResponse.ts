import { Field, ObjectType } from "type-graphql";

import { Post } from "../../entity/Post";

@ObjectType()
export class CreatePostResponse {
  @Field()
  ok: Boolean;

  @Field(() => Post)
  post: Post;
}
