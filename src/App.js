import React from 'react';
//import StatusModal from './components/modals/statusModal';
import AddTaskButton from './components/buttons/addTaskButton'
import NewTaskModal from './components/modals/newTaskModal';
import AddNoteButton from './components/buttons/addNoteButton';
//import { Table } from './components/table';

import './styles/App.css';
function App() {
  
  return (
    <div className="App">
      <div><AddTaskButton /></div>
      <div><AddNoteButton /></div>
    </div>
  );
}

export default App;
