import React from "react";
//import StatusModal from './components/modals/statusModal';
import AddTaskButton from "./components/buttons/addTaskButton";
//import NewTaskModal from './components/modals/newTaskModal';
//import AddNoteButton from './components/buttons/addNoteButton';
import { Filter } from "./utils/iconsComponent";
import { Table } from "./components/table";
import Searchbar from "./components/searchbar";

import "./styles/App.css";
function App() {
  return (
    <div class="App">
      <div className="main">
        <div class="main-header">
          <div class="header-block">
            <div class="header-text">SALES LOG</div>
            <AddTaskButton />
          </div>
          <Searchbar />
        </div>
        <div class="side-text">
          Use the <Filter style={{ color: "grey", fontSize: "small" }} /> icon
          next to the table titles to apply filters
        </div>
        <div class="side-text">Filtered option view</div>
        <Table />
      </div>
    </div>
  );
}

export default App;
