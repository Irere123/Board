import React from "react";
import dayjs from "dayjs";
import { Avatar } from "@mui/material";

import { useTrendsQuery } from "../../generated/graphql";

const AllTrends: React.FC = () => {
  const { data } = useTrendsQuery();

  return (
    <>
      {data?.trends.map((trend) => (
        <div className="allTrends__trendcard">
          <div>
            <a href={`${trend.sourceUrl}`} target="_blank" rel="noreferrer">
              <Avatar>
                {trend.source?.charAt(0).toUpperCase()}
                {trend.source?.charAt(1).toUpperCase()}
              </Avatar>
            </a>
            <h4>On {dayjs(trend.createdAt).format("MMMM YYYY")}</h4>
          </div>
          <p>{trend.body.slice(1, 100)}</p>
        </div>
      ))}
    </>
  );
};

export default AllTrends;
