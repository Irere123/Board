import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAnnInput {
  @Field()
  author: string;

  @Field()
  body: string;

  @Field()
  summary: string;
}
