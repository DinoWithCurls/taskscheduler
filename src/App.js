import React from 'react';
import StatusModal from './components/statusModal';
import AddTaskButton from './components/addTaskButton'
import './styles/App.css';
function App() {
  
  return (
    <div className="App">
      <StatusModal />
      <AddTaskButton />
    </div>
  );
}

export default App;
