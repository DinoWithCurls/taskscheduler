import React from "react";
import "../../styles/addTaskButton.css";
import { Add } from "../iconsComponent";
const AddTaskButton = () => {
  return (
    <div class="btn-container" onClick={() => console.log("Button Pressed")}>
      <div class="icn-container">
        <Add className="icn" />
      </div>
      <div class="txt-container">
        <div>New Task</div>
      </div>
    </div>
  );
};

export default AddTaskButton;
