import React from "react";
import "../../styles/addTaskButton.css";
import { Add } from "../iconsComponent";
const AddTaskButton = () => {
  return (
    <div class="button-container" onClick={()=>console.log('Button Pressed')}>
      <div class="icon-container">
        <Add className="icon" />
      </div>
      <div class="text-container">
        <div class="text">New Task</div>
      </div>
    </div>
  );
};

export default AddTaskButton;
