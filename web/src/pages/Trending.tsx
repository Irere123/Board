import React, { useState } from "react";
import { Modal } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";

import "../styles/Trending.css";
import { LatestTrends } from "../components/trending/LastestTrends";
import { CreateTrendModal } from "../components/trending/CreateTrendModal";

export const Trending: React.FC = () => {
  const [openCreateTrendModal, setOpenCreateTrendModal] = useState(false);

  const handleClose = () => {
    setOpenCreateTrendModal(!openCreateTrendModal);
  };

  return (
    <div className="trendingPage__layout">
      <div>
        <h2 className="trendingPage__title">
          <span>
            <TrendingUp />
          </span>
          Trending
        </h2>
        <h4
          className="newTrendButton"
          onClick={() => setOpenCreateTrendModal(!openCreateTrendModal)}
        >
          New Trend
        </h4>
        <div>
          <h2>Latest Trends</h2>
          <div className="latestTrends">
            <LatestTrends />
          </div>
        </div>
      </div>

      {openCreateTrendModal && (
        <Modal open={openCreateTrendModal} onClose={handleClose}>
          <CreateTrendModal onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};
