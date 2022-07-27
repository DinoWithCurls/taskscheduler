import React from 'react';
//import StatusModal from './components/modals/statusModal';
import AddTaskButton from './components/buttons/addTaskButton'
//import NewTaskModal from './components/modals/newTaskModal';

import { Table } from './components/table';

import './styles/App.css';
function App() {
  
  return (
    <div className="App">
      <div><AddTaskButton /></div>
      <div></div>
      <Table />
    </div>
  );
}

export default App;
