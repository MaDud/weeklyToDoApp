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
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import DateReducer from './store/reductors/date';
import TasksReducer from './store/reductors/tasks';

//firestore
import firebase from './fbConfig';
import {ReactReduxFirebaseProvider, firebaseReducer} from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

//fontAwesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

dayjs.extend(isoWeek);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

const reductor = combineReducers({
  date: DateReducer,
  tasks: TasksReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const store = createStore(reductor);

const rrfProps = {
  firebase,
  dispatch: store.dispatch,
  createFirestoreInstance
}

library.add(faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft, faAngleRight)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
