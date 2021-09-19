import React from "react";

import { useNewTrendsQuery } from "../../generated/graphql";

export const LatestTrends: React.FC = () => {
  const { data } = useNewTrendsQuery();
  return (
    <>
      {data?.newTrends.map((trend) => (
        <div className="latestTrendCard" key={trend.id}>
          <h4>{trend.source}</h4>
        </div>
      ))}
    </>
  );
};
