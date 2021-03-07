import React from 'react';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <React.Fragment>
      <TasksNavigation />
      <TasksList />
    </React.Fragment>

  );
}

export default App;
