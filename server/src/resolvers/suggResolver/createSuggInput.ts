import { Field, InputType } from "type-graphql";

@InputType()
export class CreateSuggInput {
  @Field()
  body: string;

  @Field()
  tag: string;
}
