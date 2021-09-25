import React from "react";

import { useViewsQuery } from "../generated/graphql";

interface Props {
  trendId: string;
}

export const ViewCount: React.FC<Props> = ({ trendId }) => {
  const { data } = useViewsQuery({
    variables: { trendId },
  });

  return <h4>{data?.views} Views</h4>;
};
