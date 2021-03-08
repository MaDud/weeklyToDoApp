import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    tasks: {
        1: {
            name: 'task1',        
        },
        2: {
            name: 'task2'        
        }
    }
}

const TasksReducer = (state = initialState, action) => {

    switch (action.type) {
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