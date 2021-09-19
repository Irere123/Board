import React from "react";
import { useTikTokTrendQuery } from "../../generated/graphql";

export const TikTokTrends: React.FC = () => {
  const { data } = useTikTokTrendQuery();
  return (
    <div className="tiktokTrends">
      {data?.tiktokTrends.map((trend) => (
        <div key={trend.id} className="tiktokTrendCard">
          {trend.createdAt}
        </div>
      ))}
    </div>
  );
};
