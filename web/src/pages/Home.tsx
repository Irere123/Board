import React, { useState } from "react";

import "../styles/Home.css";
import { usePostsQuery } from "../generated/graphql";
import { Posts } from "../components/home/Posts";
import { Suggestions } from "../components/home/Suggestions";
import { Trending } from "../components/home/Trending";
import { Modal } from "@mui/material";
import { CreatePostModal } from "../components/home/createPostModal";

const Home: React.FC = () => {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const { data, loading } = usePostsQuery();

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="homepage__layout">
      <div className="homepage__Leftlayout">
        <div>
          <h2>New Hits</h2>
          <Trending />
        </div>
        <div className="homepage__Leftlayout_posts">
          <div>
            <h2>Your Feed</h2>
            <h4 onClick={() => setOpenCreatePost(!openCreatePost)}>
              Create Post
            </h4>
          </div>
          <Posts posts={data?.posts} />
        </div>
      </div>
      <div className="homepage__Rightlayout">
        <Suggestions />
      </div>
      {openCreatePost && (
        <Modal
          open={openCreatePost}
          onClose={() => setOpenCreatePost(!openCreatePost)}
        >
          <CreatePostModal onClose={() => setOpenCreatePost(!openCreatePost)} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
