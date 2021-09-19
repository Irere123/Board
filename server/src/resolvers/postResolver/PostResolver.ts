import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Post } from "../../entity/Post";
import { CreatePostInput } from "./createPostInput";
import { CreatePostResponse } from "./createPostResponse";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    const posts = await Post.find({ order: { createdAt: "DESC" } });
    return posts;
  }

  @Query(() => Post)
  async post(@Arg("postId") id: string): Promise<Post | undefined> {
    const post = await Post.findOne(id);
    return post;
  }

  @Mutation(() => CreatePostResponse)
  async createPost(
    @Arg("input") { author, body, title }: CreatePostInput
  ): Promise<CreatePostResponse> {
    const post = await Post.create({
      author,
      title,
      body,
    }).save();

    return {
      ok: true,
      post,
    };
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("postId") id: string): Promise<Boolean> {
    try {
      await Post.delete({ id });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
