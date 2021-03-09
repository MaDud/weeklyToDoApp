import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    tasks: {
        1: {
            name: 'task1',        
        },
        2: {
            name: 'task2'        
        }
    },
    loading: false,
    error: null
}

const TasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionsTypes.INIT_GET_TASKS_LIST: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionsTypes.GET_TASKS_LIST_SUCCESS:
            return {
                ...state,
                tasks: action.tasks,
                loading: false
            };
        case actionsTypes.GET_TASKS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionsTypes.ADD_TASK: 
            return {
                ...state,
                tasks: {...state.tasks,
                        [action.id]: action.data}
            }
        default:
            return state
    }
};

export default TasksReducer