import { EmojiObjects } from "@mui/icons-material";
import React from "react";

import { useSuggestionsQuery } from "../../generated/graphql";

export const Suggestions: React.FC = () => {
  const { data, loading } = useSuggestionsQuery();

  if (loading) {
    return <h1>loading....</h1>;
  }

  return (
    <div className="homepage__Tips">
      <h2 className="homepage__TipsTitle">
        <span>
          <EmojiObjects />
        </span>{" "}
        Tips
      </h2>
      <div className="homepage__Tips_tipsList">
        {data?.suggestions.map((suggestion) => (
          <div key={suggestion.id} className="homepage__TipCard">
            <div className="homepage__TipTag">{suggestion.tag}</div>
            <p>{suggestion.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
