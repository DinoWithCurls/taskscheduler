import React from "react";
import  {Open} from "../iconsComponent";
import "../../styles/statusButton.css";
const StatusButton = ({ status, onPressButton }) => {
  return (
    <button class="status-main" onClick={onPressButton}>
      <div class={status === 'Open' ? 'open-style' : 'close-style'}>{status}</div>
      <Open />
    </button>
  );
};

export default StatusButton;
