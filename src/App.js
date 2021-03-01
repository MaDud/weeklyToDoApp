import {DateProvider} from './context/dateContex';
import TasksNavigation from './components/TasksNavigation/TasksNavigation';

function App() {
  return (
    <DateProvider>
      <TasksNavigation />
    </DateProvider>
  );
}

export default App;
