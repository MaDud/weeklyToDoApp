import {takeEvery, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';

import {getTasksSaga,
        addTaskSaga,
    updateTaskStatusSaga}
from './tasksSagas';

export function* tasksWatcher () {
    yield takeEvery(actionTypes.GET_TASKS_LIST_PROCESS, getTasksSaga);
    yield takeEvery(actionTypes.ADD_TASK_PROCESS, addTaskSaga);
    yield takeLatest(actionTypes.UPDATE_TASK_PROCESS, updateTaskStatusSaga)
}