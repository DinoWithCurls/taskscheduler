import React from "react";
import { Down } from "../../utils/iconsComponent";
import "../../styles/optionButton.css";
const OptionButton = ({ onOptionsClick }) => {
  return (
    <div class="option">
      <button onClick={() => onOptionsClick}>
        <div class="option-text">
          <div>Options</div>
        </div>
        <div>
          <Down />
        </div>
      </button>
    </div>
  );
};

export default OptionButton;
