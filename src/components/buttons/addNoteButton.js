import React from "react";
import "../../styles/addNoteButton.css";
import { Add } from "../../utils/iconsComponent";
const AddNoteButton = () => {
  return (
    <div class="button-container" onClick={() => console.log("ADD NOTE")}>
      <div class="icon-container">
        <Add className="icon" />
      </div>
      <div class="text-container">
        <div>Add Note</div>
      </div>
    </div>
  );
};
export default AddNoteButton;
