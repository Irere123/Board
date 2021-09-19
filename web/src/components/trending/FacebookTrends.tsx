import React from "react";

import { useFacebookTrendsQuery } from "../../generated/graphql";

export const FacebookTrends: React.FC = () => {
  const { data } = useFacebookTrendsQuery();

  return (
    <div className="facebookTrends">
      {data?.facebookTrends.map((trend) => (
        <div key={trend.id} className="facebookTrendCard">
          {trend.body}
        </div>
      ))}
    </div>
  );
};
