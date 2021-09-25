import { Avatar } from "@mui/material";
import React from "react";

import { useNewTrendsQuery } from "../../generated/graphql";

export const LatestTrends: React.FC = () => {
  const { data } = useNewTrendsQuery();
  return (
    <>
      {data?.newTrends.map((trend) => (
        <div className="latestTrendCard" key={trend.id}>
          <div>
            <a href={`${trend.sourceUrl}`} target="_blank" rel="noreferrer">
              <Avatar>
                {trend.source?.charAt(0).toUpperCase()}
                {trend.source?.charAt(1).toUpperCase()}
              </Avatar>
            </a>
          </div>
          <div>
            <p>{trend.body.slice(0, 100)}</p>
          </div>
        </div>
      ))}
    </>
  );
};
