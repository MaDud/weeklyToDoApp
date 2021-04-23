import React from 'react';
import './styles/app.scss';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';
import TasksList from './components/TasksList/TasksList';
import AddTask from './components/AddTask/AddTask';
import StatusBar from './components/StatusBar/StatusBar';
import Logo from './components/Logo/Logo';
import Legend from './components/Legend/Legend';

function App() {
  return (
    <React.Fragment>
      <header className='header' data-test='app_header'>
        <Logo />
        <StatusBar />
      </header>
      <main className='main' data-test='app_main'>
        <TasksNavigation />
        <TasksList />
        <AddTask />
        <Legend />
      </main>
    </React.Fragment>
  );
}

export default App;
