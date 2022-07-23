import React from "react";
import OtherButton from "../buttons/otherButton";
import "../../styles/statusModal.css";
const StatusModal = () => {
  const buttonAction = () => {
    console.log("Button Pressed");
  };
  return (
    <div className="modal-body">
      <div className="inner-block">
        <div className="modal-header">STATUS</div>
        <div className="button-block">
          <OtherButton
            buttonPressAction={() => buttonAction()}
            buttonType={"Open"}
          />
          <OtherButton
            buttonPressAction={() => buttonAction()}
            buttonType={"Closed"}
          />
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
