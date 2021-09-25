import React from "react";
import dayjs from "dayjs";
import { Avatar } from "@mui/material";

import { useCreateViewMutation, useTrendsQuery } from "../../generated/graphql";
import { ViewCount } from "../ViewCount";

const AllTrends: React.FC = () => {
  const { data } = useTrendsQuery();
  const [addView] = useCreateViewMutation();

  return (
    <>
      {data?.trends.map((trend) => (
        <div className="allTrends__trendcard">
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
            <h4>On {dayjs(trend.createdAt).format("MMMM YYYY")}</h4>
          </div>
          <p>
            <a href={`${trend.sourceUrl}`} target="_blank" rel="noreferrer">
              {trend.body.slice(1, 100)}
            </a>
          </p>
          <ViewCount trendId={trend.id} />
        </div>
      ))}
    </>
  );
};

export default AllTrends;
