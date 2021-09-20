import React from "react";

import { Close } from "@mui/icons-material";

interface Props {
  onClose: () => void;
}

export const CreateTrendModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="createTrendModal">
      <div className="createTrendModal__closeIcon" onClick={onClose}>
        <span>
          <Close />
        </span>
      </div>
    </div>
  );
};
