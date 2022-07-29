import React, { useState } from "react";
import { Down } from "../../utils/iconsComponent";
import "../../styles/optionButton.css";
import OptionDropdown from "../dropdowns/OptionDropdown";
const OptionButton = ({ getValue }) => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSelectedOption = (val) => {
    getValue(val);
  }

  return (
    <div class="option">
      <button onClick={() => handleClickOpen()}>
        <div class="option-text">
          <div>Options</div>
        </div>
        <div>
          <Down />
        </div>
      </button>
      {open === true ? <OptionDropdown setResult={handleSelectedOption} /> : null}
    </div>
  );
};

export default OptionButton;
