import { put, select, delay, call } from 'redux-saga/effects';
import firebase from '../../fbConfig';
import * as action from '../actions/tasksActions';
import { getTasks } from './selectors';

const db = firebase.firestore();

export function* getTasksSaga (data) {
    yield put(action.initGetTasksList())
    try {
        const snapshot = yield db.collection('tasks').where('week', '==', data.week).get();
        let tasks;
        if (snapshot.empty) {
            tasks = {}
        } else {
            snapshot.forEach(task => {
                tasks = {
                    ...tasks,
                    [task.id]: {
                        title: task.data().title,
                        status: task.data().status
                }
            }}); 
        }

        yield put(action.getTasksListSuccess(tasks))
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