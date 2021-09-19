import { Avatar } from "@mui/material";
import React from "react";

import { ViewCount } from "./ViewCount";
import { useNewTrendsQuery } from "../../generated/graphql";

export const Trending: React.FC = () => {
  const { data, loading } = useNewTrendsQuery();

  if (loading) {
    return null;
  }

  return (
    <div className="homepage__trendCards">
      {data?.newTrends.map((trend) => (
        <div key={trend.id}>
          <div className="homepage__trendCard">
            <Avatar>
              {trend.source?.charAt(0).toUpperCase()}
              {trend.source?.charAt(1).toUpperCase()}
            </Avatar>
            <div className="homepage__trendCard_tendDetail">
              <p>{trend.body}</p>
            </div>
            <div className="homepage__trendCard_tendAnalytics">
              <ViewCount trendId={trend.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
