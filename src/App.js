import React from 'react';
import StatusModal from './components/modals/statusModal';
import AddTaskButton from './components/buttons/addTaskButton'
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
