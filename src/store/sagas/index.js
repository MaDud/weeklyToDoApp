import {takeEvery, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';

import {getTasksSaga,
        addTaskSaga,
        updateTaskStatusSaga,
        moveTaskToNextWeek}
from './tasksSagas';

export function* tasksWatcher () {
    yield takeEvery(actionTypes.GET_TASKS_LIST_PROCESS, getTasksSaga);
    yield takeEvery(actionTypes.ADD_TASK_PROCESS, addTaskSaga);
    yield takeEvery(actionTypes.UPDATE_TASK_PROCESS, updateTaskStatusSaga);
    yield takeEvery(actionTypes.MOVE_TASK_TO_NEXT_WEEK, moveTaskToNextWeek)
}