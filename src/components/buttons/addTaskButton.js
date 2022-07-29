import React from "react";
import "../../styles/addTaskButton.css";
import { Add } from "../../utils/iconsComponent";
const AddTaskButton = ({ onPressButton }) => (
  <div>
    <button class="btn-container" onClick={()=> onPressButton()}>
      <div class="icn-container">
        <Add className="icn" />
      </div>
      <div class="txt-container">
        <div>New Task</div>
      </div>
    </button>
  </div>
);

export default AddTaskButton;
