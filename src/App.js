import './App.scss';
import WeekNavigation from './containers/WeekNavigation/WeekNavigation';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight)
  return (
    <div className="App">
      <WeekNavigation />
    </div>
  );
}

export default App;
