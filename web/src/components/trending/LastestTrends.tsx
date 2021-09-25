import { Avatar } from "@mui/material";
import React from "react";

import {
  useCreateViewMutation,
  useNewTrendsQuery,
} from "../../generated/graphql";
import { ViewCount } from "../ViewCount";

export const LatestTrends: React.FC = () => {
  const { data } = useNewTrendsQuery();
  const [addView] = useCreateViewMutation();
  return (
    <>
      {data?.newTrends.map((trend) => (
        <div className="latestTrendCard" key={trend.id}>
          <div>
            <a
              href={`${trend.sourceUrl}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                addView({
                  variables: { trendId: trend.id },
                  update: (store) => {
                    store.evict({ fieldName: "views" });
                  },
                });
              }}
            >
              <Avatar>
                {trend.source?.charAt(0).toUpperCase()}
                {trend.source?.charAt(1).toUpperCase()}
              </Avatar>
            </a>
          </div>
          <div>
            <p>{trend.body.slice(0, 100)}</p>
            <ViewCount trendId={trend.id} />
          </div>
        </div>
      ))}
    </>
  );
};
