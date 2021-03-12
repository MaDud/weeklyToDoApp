import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';

import {getTasksSaga,
        addTaskSaga}
from './tasksSagas';

export function* tasksWatcher () {
    yield takeEvery(actionTypes.GET_TASKS_LIST_PROCESS, getTasksSaga);
    yield takeEvery(actionTypes.ADD_TASK_PROCESS, addTaskSaga)
}