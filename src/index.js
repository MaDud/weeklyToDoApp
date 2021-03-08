import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//dayjs
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

//redux
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import DateReducer from './store/reductors/date';
import TasksReducer from './store/reductors/tasks';

//redux-saga
import createSagaMiddleware from 'redux-saga';
import {tasksWatcher} from './store/sagas/index';

//fontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

const sagaMiddleware = createSagaMiddleware();

const reductor = combineReducers({
  date: DateReducer,
  tasks: TasksReducer
})

const store = createStore(reductor, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(tasksWatcher)

library.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
