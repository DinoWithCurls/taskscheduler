import React, {useState} from "react";
import OtherButton from "../buttons/otherButton";
import { MUIDropdown, MUIForm, MUIItem } from "../../utils/muiComponents";
import "../../styles/newTaskModal.css";

import { Phone, Location, Webcam } from "../iconsComponent";

const SelectLabel = ({task, handleChange}) => {
  return (
    <MUIForm sx={{m:1, minWidth: '98%'}}>
      <MUIDropdown
        value={task}
        onChange = {handleChange}>
          <MUIItem value={'call'}><Phone />Call</MUIItem>
          <MUIItem value={'meeting'}><Location />Meeting</MUIItem>
          <MUIItem value={'video call'}><Webcam />Video Call</MUIItem>
        </MUIDropdown>
    </MUIForm>
  )
}

const NewTaskModal = () => {
  const onClickAction = () => {
    console.log("Button Pressed");
  };
  const [task, setTask] = useState('Call');
  const handleChange = (event) => {
    setTask(event.target.value);
  }
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
            <input placeholder="Time" class="input-box" type="time" defaultValue={"12:00"} />
          </div>
        </div>
        <div class="task">
          <SelectLabel task={task} handleChange={handleChange} />
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
