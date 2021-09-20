import { EmojiObjects } from "@mui/icons-material";
import React from "react";

import { useNewSuggestionsQuery } from "../../generated/graphql";

export const Suggestions: React.FC = () => {
  const { data, loading, error } = useNewSuggestionsQuery();

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (error) {
    return (
      <div>
        <div>There is something wrong. Server Error 500</div>
        <div>{error.message}</div>
      </div>
    );
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
        {data?.newSuggestions.map((suggestion) => (
          <div key={suggestion.id} className="homepage__TipCard">
            <div className="homepage__TipTag">{suggestion.tag}</div>
            <p>{suggestion.body.slice(0, 180)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
