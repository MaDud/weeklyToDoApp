import {DateProvider} from './context/dateContex';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <DateProvider>
      <TasksNavigation />
      <TasksList />
    </DateProvider>
  );
}

export default App;
