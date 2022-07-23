import React from "react";
import '../styles/addNoteButton.css';
import { PlusCircleIcon } from "@heroicons/react/outline";
const AddNoteButton = () => {
    return (
        <div class="button-container" onClick={()=>console.log("ADD NOTE")}>
            <div class="icon-container">
                <PlusCircleIcon className="icon" />
            </div>
            <div class="text-container">
                <div>Add Note</div>
            </div>
        </div>
    );
}
export default AddNoteButton;