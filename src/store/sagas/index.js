import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';

import {getTasks} from './tasksSagas';

export function* tasksWatcher () {
    yield takeEvery(actionTypes.GET_TASKS, getTasks)
}