import React from "react";

import "../styles/Messages.css";

export const Messages: React.FC = () => {
  return (
    <div className="messagesPage__layout">
      <div className="big_announcement">
        <h1>Big</h1>
      </div>
      <div className="small_announcement">
        <div>
          <h1>Small</h1>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="other_announcements">
        <h1>Other</h1>
      </div>
    </div>
  );
};
