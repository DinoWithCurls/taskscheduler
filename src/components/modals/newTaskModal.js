import React, {useState} from "react";
import OtherButton from "../buttons/otherButton";
import { MUIDropdown, MUIForm, MUIItem } from "../../utils/muiComponents";
import "../../styles/newTaskModal.css";

import { Phone, Location, Webcam } from "../../utils/iconsComponent";

const SelectLabel = ({task, handleChange}) => {
  return (
    <MUIForm sx={{m:1, minWidth: '98%'}}>
      <MUIDropdown
        value={task}
        onChange = {handleChange}>
          <MUIItem value={'Call'}><Phone />Call</MUIItem>
          <MUIItem value={'Meeting'}><Location />Meeting</MUIItem>
          <MUIItem value={'Video Call'}><Webcam />Video Call</MUIItem>
        </MUIDropdown>
    </MUIForm>
  )
}

const NewTaskModal = () => {
  const [entityName, setEntityName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00 PM');
  const [task, setTask] = useState('Call');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [status, setStatus] = useState('Open');
  const [note, setNote] = useState('');
  const onClickOpen = () => {
    console.log("Open Button Pressed");
    setStatus('Open');
  };
  const onClickClose = () => {
    console.log('Closed Button Pressed');
    setStatus('Closed');
  }
  const handleChange = (event) => {
    setTask(event.target.value);
  }
  const onPressSubmit = () => {
    console.log('entityName', entityName);
    console.log('date', date);
    console.log('time', time);
    console.log('phoneNumber', phoneNumber);
    console.log('contactPerson', contactPerson);
    console.log('task', task);
    console.log('status', status);
    console.log('note', note);
  }
  const onPressClear = () => {
    setContactPerson('');
    setDate('');
    setEntityName('');
    setNote('');
    setPhoneNumber('');
    setStatus('');
    setTask('Call');
    setTime('');
  }
  return (
    <div class="container">
      <div class="container-inset">
        <div class="header">
          <div class="header-text">NEW TASK</div>
          <div class="header-button">
            <OtherButton
              buttonType={"Open"}
              buttonPressAction={onClickOpen}
            />
            <OtherButton
              buttonType={"Closed"}
              buttonPressAction={onClickClose}
            />
          </div>
        </div>
        <div class="input-box-container">
          <input placeholder="Entity Name" class="input-box" type="text" onInput={(event) => setEntityName(event.target.value)} />
        </div>
        <div class="date-time-input">
          <div class="date-input">
            <input placeholder="Date" class="input-box" type="date" onInput={(event) => setDate(event.target.value)} />
          </div>
          <div class="time-input">
            <input placeholder="Time" class="input-box" type="time" defaultValue={"12:00"} onInput={(event) => setTime(event.target.value)} />
          </div>
        </div>
        <div class="task">
          <SelectLabel task={task} handleChange={handleChange} />
        </div>
        <div class="input-box-container">
          <input placeholder="Phone number" class="input-box" type="tel" onInput={(event) => setPhoneNumber(event.target.value)} />
        </div>
        <div class="input-box-container">
          <input placeholder="Contact person" class="input-box" type="text" onInput={(event) => setContactPerson(event.target.value)} />
        </div>
        <div class="input-box-container">
          <textarea placeholder="Note (optional)" class="input-box" type="text" onInput={(event) => setNote(event.target.value)} />
        </div>
        <div>
          <button type="clear" onClick={onPressClear}>CLEAR</button>
          <button type="submit" onClick={onPressSubmit}>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
