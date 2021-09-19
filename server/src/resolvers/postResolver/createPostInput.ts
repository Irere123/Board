import { Field, InputType } from "type-graphql";

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  author: string;

  @Field()
  title: string;

  @Field()
  body: string;
}
