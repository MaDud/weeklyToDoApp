import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes';

import {getTasksSaga,
        addTaskSaga,
        updateTaskStatusSaga,
        moveTaskToNextWeek,
        removeTaskFromNextWeek,
        checkStatusOptions}
from './tasksSagas';

export function* tasksWatcher () {
    yield takeEvery(actionTypes.GET_TASKS_LIST_PROCESS, getTasksSaga);
    yield takeEvery(actionTypes.ADD_TASK_PROCESS, addTaskSaga);
    yield takeEvery(actionTypes.UPDATE_TASK_PROCESS, updateTaskStatusSaga);
    yield takeEvery(actionTypes.MOVE_TASK_TO_NEXT_WEEK, moveTaskToNextWeek);
    yield takeEvery(actionTypes.CANCEL_MOVE_TASK_TO_NEXT_WEEK, removeTaskFromNextWeek)
}