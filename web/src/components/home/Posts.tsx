import React from "react";
import dayjs from "dayjs";
import { Avatar } from "@mui/material";

import { Post } from "../../generated/graphql";

interface Props {
  posts: Post[] | undefined;
}

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="homepage__posts">
      {posts!.map((post) => (
        <div key={post.id} className="homepage__postCard">
          <div className="homepage__postCard__header">
            <Avatar>
              {post.author?.charAt(0).toUpperCase()}
              {post.author?.charAt(1).toUpperCase()}
            </Avatar>

            <div className="homepage__postCard__header_info">
              <h3>{post.author}</h3>
              <p>On {dayjs(post.createdAt).format("MMMM DD YYYY")}</p>
            </div>
          </div>
          <div className="homepage__postCard__content">
            <header>{post.title.slice(0, 100)}</header>
            <div>{post.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
