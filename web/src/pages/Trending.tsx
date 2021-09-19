import React from "react";

import "../styles/Trending.css";
import { LatestTrends } from "../components/trending/LastestTrends";
import { FacebookTrends } from "../components/trending/FacebookTrends";
import { TikTokTrends } from "../components/trending/TiktokTrends";
import { CreateTrend } from "../components/trending/CreateTrendModal";

export const Trending: React.FC = () => {
  return (
    <div className="trendingPage__layout">
      <div>
        <div>
          <h2>Latest Trends</h2>
          <div className="latestTrends">
            <LatestTrends />
          </div>
        </div>
        <div className="trendingPage__layout_facebook">
          <h2>Facebook Trends</h2>
          <FacebookTrends />
        </div>
        <div className="trendingPage__layout_tiktok">
          <h2>TikTok Trends</h2>

          <TikTokTrends />
        </div>
      </div>
      <div>
        <CreateTrend />
      </div>
    </div>
  );
};
