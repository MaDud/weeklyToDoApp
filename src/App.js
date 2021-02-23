import './App.scss';
import {DateProvider} from './context/dateContex';
import WeekNavigation from './containers/WeekNavigation/WeekNavigation';

//fontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight)
  return (
    <DateProvider>
      <WeekNavigation />
    </DateProvider>
  );
}

export default App;
