import React from 'react';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <TasksNavigation />
        <TasksList />
      </main>
    </React.Fragment>
  );
}

export default App;
