import { put, call } from 'redux-saga/effects';
import firebase from '../../fbConfig';
import * as action from '../actions/tasksActions';

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
                    [task.id]: task.data()
                }
            }); 
        }
        console.log(tasks)

        yield put(action.getTasksListSuccess(tasks))
    } catch (error) {
        yield put(action.getTasksListError('Ups... Something went wrong'))
    }
}