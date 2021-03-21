import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    tasks: {},
    loading: true,
    error: false,
    message: ''
}

const TasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionsTypes.INIT_GET_TASKS_LIST: 
        case actionsTypes.INIT_ADD_TASK:
            return {
                ...state,
                loading: true,
                error: false,
                message: ''
            };
        case actionsTypes.GET_TASKS_LIST_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            };
        case actionsTypes.GET_TASKS_LIST_ERROR:
        case actionsTypes.ADD_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.error
            }
        case actionsTypes.ADD_TASK_SUCCESS: 
            return {
                ...state,
                tasks: {...state.tasks,
                        [action.id]: action.data},
                loading: false,
                message: 'Task was added to list'
            }
        case actionsTypes.CLEAR_ADD_TASK:
            return {
                ...state,
                loading: false,
                error: false,
                message: ''
            }
        default:
            return state
    }
};

export default TasksReducer