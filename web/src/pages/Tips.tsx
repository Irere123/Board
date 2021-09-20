import React, { useState } from "react";
import dayjs from "dayjs";
import { Modal } from "@mui/material";
import { EmojiObjects } from "@mui/icons-material";

import "../styles/Tips.css";
import { useSuggestionsQuery } from "../generated/graphql";
import { CreateTipModal } from "../components/tips/CreateTipModal";

export const Tips: React.FC = () => {
  const [openCreateTipModal, setOpenCreateTipModal] = useState(false);
  const { data, loading } = useSuggestionsQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (data?.suggestions.length! < 0) {
    return (
      <div className="noTips">
        <div className="noTipcard">
          <h2>There are no tips yet. create one</h2>
        </div>
      </div>
    );
  }

  const handleClose = () => {
    setOpenCreateTipModal(!openCreateTipModal);
  };

  return (
    <div className="tipsPage__layout">
      <div>
        <h1 className="tipsPage__title">
          <span>
            <EmojiObjects />
          </span>
          Tips
        </h1>
        <h4
          className="newTipButton"
          onClick={() => setOpenCreateTipModal(!openCreateTipModal)}
        >
          New Tip
        </h4>
      </div>

      <div className="tipsPage__layoutHeader">
        <div className="tipsPage__layoutHeader__newTips">
          {data?.suggestions.map((sugg) => (
            <div className="newTip" key={sugg.id}>
              <div>
                <p>On {dayjs(sugg.createdAt).format("MMMM DD YYYY")}</p>
                <p>{sugg.body.slice(0, 180)}</p>
              </div>
              <div>
                <p>#{sugg.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openCreateTipModal && (
        <Modal open={openCreateTipModal} onClose={handleClose}>
          <CreateTipModal onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};
