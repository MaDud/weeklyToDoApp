import { put, select, delay, call } from 'redux-saga/effects';
import firebase from '../../fbConfig';
import * as action from '../actions/tasksActions';
import { getTasks, currentWeek } from './selectors';

const db = firebase.firestore();

export function* getTasksSaga (data) {
    yield put(action.initGetTasksList())
    try {
        const snapshot = yield db.collection('tasks').where('week', 'array-contains', data.week).get();
        let tasks;
        if (snapshot.empty) {
            tasks = {}
        } else {
            snapshot.forEach(task => {
                tasks = {
                    ...tasks,
                    [task.id]: {
                        title: task.data().title,
                        status: task.data().status,
                        week: task.data().week
                }
            }}); 
        }

        yield put(action.getTasksListSuccess(tasks, data.week))
    } catch (error) {
        yield put(action.getTasksListError('Ups... Something went wrong'))
    }
};

export function* addTaskSaga (data) {
    yield put(action.initAddTask());
    try {
        const snapshot = yield db.collection('tasks').add(data.data);
        const task = {
            id: snapshot.id,
            data: data.data
        };
        yield put(action.addTaskSuccess(task))
    } catch (error) {
        yield put(action.addTaskError('Ups... Something went wrong'))
    }
};

export function* updateTaskStatusSaga (data) {
    const task = yield select(getTasks);
    yield put(action.initTaskStatusUpdate());
    try {
        yield db.collection('tasks').doc(data.id).update({status:task[data.id].status});
        yield put(action.updateTaskStatus())
    } catch (error) {
        yield put(action.updateTaskFail())
    }
};

export function* moveTaskToNextWeek (data) {
    const week = yield select(currentWeek);
    yield put(action.initMoveTaskToNextWeek())
    try {
        yield db.collection('tasks').doc(data.id).update({week: firebase.firestore.FieldValue.arrayUnion(week + 1)});
        yield put(action.moveTaskToNextWeekSuccess())
    } catch (error) {
        console.log(error)
        yield put(action.moveTaskToNextWeekError())
    }
};

export function* removeTaskFromNextWeek (data) {
    const week = yield select(currentWeek);
    const task = yield select(getTasks);
    const weeksToRemove = yield task[data.id].week.filter(weekNumber => weekNumber > week)
    yield put(action.initCancelMoveTaskToNextWeek())
    try {
        yield db.collection('tasks').doc(data.id).update({week: firebase.firestore.FieldValue.arrayRemove(...weeksToRemove)});
        yield put(action.cancelMoveTaskToNextWeekSuccess())
    } catch (error) {
        yield put(action.cancelMoveTaskToNextWeekError())
    }
};