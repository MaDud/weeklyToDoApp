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

export const initAddTask = () => {
    return {
        type: actionsTypes.INIT_ADD_TASK
    }
}

export const addTaskError = (error) => {
    return {
        type: actionsTypes.ADD_TASK_ERROR,
        error: error
    }
}

export const addTaskSuccess = (task) => {
    return {
        type: actionsTypes.ADD_TASK_SUCCESS,
        id: task.id,
        data: task.data
    }
}

export const addTask = data => {
    return {
        type: actionsTypes.ADD_TASK_PROCESS,
        data: data
    }
} 

export const clearAddTask= () => {
    return {
        type: actionsTypes.CLEAR_ADD_TASK
    }
}