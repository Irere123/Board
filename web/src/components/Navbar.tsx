import React from "react";

import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h2>BOARD</h2>
      </div>
      <div className="navbar__right">
        <Link to="/" className="navbar__right__link">
          <h3>Home</h3>
        </Link>
        <Link to="/trending" className="navbar__right__link">
          <h3>Trending</h3>
        </Link>
        <Link to="/tips" className="navbar__right__link">
          <h3>Tips</h3>
        </Link>
        <Link to="/messages" className="navbar__right__link">
          <h3>Messages</h3>
        </Link>
        <Link to="/about" className="navbar__right__link_about">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};
