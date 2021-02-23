import {DateProvider} from './context/dateContex';
import TasksNavigation from './containers/TasksNavigation/TasksNavigation';

//fontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight)

function App() {
  return (
    <DateProvider>
      <TasksNavigation />
    </DateProvider>
  );
}

export default App;
