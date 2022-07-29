import React, { useState } from "react";
import AddTaskButton from "./components/buttons/addTaskButton";
import NewTaskModal from "./components/modals/newTaskModal";
import { Filter } from "./utils/iconsComponent";
import { Table } from "./components/table";
import jsonFile from "./data/info.json";
import { Searchbar } from "./utils/muiComponents";

import "./styles/App.css";

function App() {
  const [modalState, setModalState] = useState(false);
  const [rows, setRows] = useState(jsonFile);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchedVal) => {
    const filteredRows = jsonFile.filter((row) => {
      return row.entityName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const handleOpen = () => {
    setModalState(true);
  };
  return (
    <div class="App">
      <div className="main">
        <div class="main-header">
          <div class="header-block">
            <div class="header-text">SALES LOG</div>
            <AddTaskButton onPressButton={() => handleOpen()} />
            <NewTaskModal
              modalState={modalState}
              setModalState={setModalState}
            />
          </div>
          
          <div class="search-body">
          <Searchbar value={searched} className='search-input' onChange={(searchVal) => requestSearch(searchVal)} onCancelSearch={()=> cancelSearch()} />
          </div>
        </div>
        <div class="side-text">
          Use the <Filter style={{ color: "grey", fontSize: "small" }} /> icon
          next to the table titles to apply filters
        </div>
        <div class="side-text">Filtered option view</div>
        <Table data={rows} />
      </div>
    </div>
  );
}

export default App;
