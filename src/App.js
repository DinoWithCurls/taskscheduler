import React from "react";
//import StatusModal from './components/modals/statusModal';
import AddTaskButton from "./components/buttons/addTaskButton";
//import NewTaskModal from './components/modals/newTaskModal';
//import AddNoteButton from './components/buttons/addNoteButton';
import { Table } from "./components/table";
import Searchbar from "./components/searchbar";

import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <div class="main-header">
        <AddTaskButton />
        <Searchbar />
      </div>
      <Table />
    </div>
  );
}

export default App;
