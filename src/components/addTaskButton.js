import React from "react";
import "../styles/addButton.css";
import { PlusCircleIcon } from '@heroicons/react/outline'
const AddTaskButton = () => {
  return (
    <div class="button" onClick={()=>console.log('Button Presse3d')}>
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
