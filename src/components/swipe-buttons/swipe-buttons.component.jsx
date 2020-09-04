import React from "react";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./swipe-buttons.style.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon />
      </IconButton>

      <IconButton>
        <CloseIcon />
      </IconButton>

      <IconButton>
        <StarRateIcon />
      </IconButton>

      <IconButton>
        <FavoriteIcon />
      </IconButton>

      <IconButton>
        <FlashOnIcon />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
