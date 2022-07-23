import React from "react";
import "../styles/otherButton.css";

const OtherButton = ({ buttonType, buttonPressAction }) => {
  return (
    <button
      onClick={buttonPressAction}
      className="btn"
      style={{
        color: buttonType === "Open" ? "white" : "#787878",
        backgroundColor: buttonType === "Open" ? "#FF5F1F" : "E8E8E8",
      }}
    >
      {buttonType}
    </button>
  );
};

export default OtherButton;
