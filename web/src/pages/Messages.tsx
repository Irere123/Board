import React from "react";

import "../styles/Messages.css";

export const Messages: React.FC = () => {
  return (
    <div className="messagesPage__layout">
      <h1 className="messagesPageTitle">Community Messages</h1>
      <button>
        <h3>Send Message</h3>
      </button>
      <div></div>
    </div>
  );
};
