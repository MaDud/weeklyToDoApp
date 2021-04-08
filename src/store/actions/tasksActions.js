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

export const getTasksListSuccess = (tasks, week) => {
    return {
        type: actionsTypes.GET_TASKS_LIST_SUCCESS,
        tasks: tasks,
        week: week
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

export const changeTaskStatus = (dayId, taskId, currentStatus) => {

    let newStatus = currentStatus + 1;
    if (currentStatus === 6) {
        newStatus = 0
    } else if (!currentStatus) {
        newStatus = 1
    }

    return {
        type: actionsTypes.CHANGE_TASK_STATUS,
        task: taskId,
        id: dayId,
        status: newStatus
    }
}

export const initTaskStatusUpdate = () => {
    return {
        type:actionsTypes.INIT_UPDATE_TASK_STATUS
    }
};

export const updateTaskStatus = () => {
    return {
        type:actionsTypes.UPDATE_TASK_SUCCESS
    }
};

export const updateTaskFail = () => {
    return {
        type:actionsTypes.UPDATE_TASK_FAIL
    }
};

export const updateStatusProcess = (id) => {
    return {
        type: actionsTypes.UPDATE_TASK_PROCESS,
        id: id,
    }
}

export const initMoveTaskToNextWeek = () => {
    return {
        type: actionsTypes.INIT_MOVE_TASK_TO_NEXT_WEEK
    }
}

export const moveTaskToNextWeekError = () => {
    return {
        type: actionsTypes.MOVE_TASK_TO_NEXT_WEEK_ERROR
    }
}

export const moveTaskToNextWeekSuccess = () => {
    return {
        type: actionsTypes.MOVE_TASK_TO_NEXT_WEEK_SUCCESS
    }
}

export const moveTaskToNextWeek = (id) => {
    return {
        type: actionsTypes.MOVE_TASK_TO_NEXT_WEEK,
        id: id
    }
}