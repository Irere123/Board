import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Suggestion } from "../../entity/Suggestions";
import { CreateSuggInput } from "./createSuggInput";
import { CreateSuggResponse } from "./createSuggResponse";

@Resolver()
export class Suggestionsolver {
  @Query(() => [Suggestion])
  async suggestions(): Promise<Suggestion[]> {
    const suggestions = await Suggestion.find({ order: { createdAt: "DESC" } });
    return suggestions;
  }

  @Query(() => [Suggestion])
  async newSuggestions(): Promise<Suggestion[]> {
    const suggestions = await Suggestion.find({
      order: { createdAt: "DESC" },
      take: 3,
    });
    return suggestions;
  }

  @Mutation(() => CreateSuggResponse)
  async createSuggugestion(
    @Arg("input") { body, tag }: CreateSuggInput
  ): Promise<CreateSuggResponse> {
    const suggestion = await Suggestion.create({
      body,
      tag,
    }).save();

    return {
      ok: true,
      suggestion,
    };
  }
}
