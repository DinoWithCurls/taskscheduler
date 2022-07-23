import React from "react";
import "../styles/addTaskButton.css";
import { PlusCircleIcon } from '@heroicons/react/outline'
const AddTaskButton = () => {
  return (
    <div class="button-container" onClick={()=>console.log('Button Pressed')}>
      <div class="icon-container">
        <PlusCircleIcon className="icon" />
      </div>
      <div class="text-container">
        <div class="text">New Task</div>
      </div>
    </div>
  );
};

export default AddTaskButton;
