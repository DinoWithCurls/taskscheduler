import React from "react";
import OtherButton from "../buttons/otherButton";
import "../../styles/newTaskModal.css";

const NewTaskModal = () => {
  const onClickAction = () => {
    console.log("Button Pressed");
  };
  return (
    <div class="container">
      <div class="container-inset">
        <div class="header">
          <div class="header-text">NEW TASK</div>
          <div class="header-button">
            <OtherButton
              buttonType={"Open"}
              buttonPressAction={onClickAction}
            />
            <OtherButton
              buttonType={"Closed"}
              buttonPressAction={onClickAction}
            />
          </div>
        </div>
        <div class="input-box-container">
          <input placeholder="Entity Name" class="input-box" type="text" />
        </div>
        <div class="date-time-input">
          <div class="date-input">
            <input placeholder="Date" class="input-box" type="date" />
          </div>
          <div class="time-input">
            <input placeholder="Time" class="input-box" type="time" />
          </div>
        </div>
        <div class="input-box-container">
          <input placeholder="Task" />
        </div>
        <div class="input-box-container">
          <input placeholder="Phone number" class="input-box" type="tel" />
        </div>
        <div class="input-box-container">
          <input placeholder="Contact person" class="input-box" type="text" />
        </div>
        <div class="input-box-container">
          <textarea placeholder="Note (optional)" class="input-box" type="text" />
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
