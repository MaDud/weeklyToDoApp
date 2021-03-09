import * as actionsTypes from './actionsTypes';

export const initGetTasksList = () => {
    return {
        type: actionsTypes.INIT_GET_TASKS_LIST
    }
}

export const getTasksListError = (error) => {
    return {
        type: actionsTypes.GET_TASKS_LIST_ERROR,
        error: error
    }
}

export const getTasksListSuccess = (tasks) => {
    return {
        type: actionsTypes.GET_TASKS_LIST_SUCCESS,
        tasks: tasks
    }
}

export const getTasks = (week) => {
    return {
        type: actionsTypes.GET_TASKS_LIST_PROCESS,
        week: week
    }
}