import React from 'react';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';
import TasksList from './components/TasksList/TasksList';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <TasksNavigation />
        <TasksList />
        <AddTask />
      </main>
    </React.Fragment>
  );
}

export default App;
