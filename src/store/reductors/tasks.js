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
        default:
            return state
    }
};

export default TasksReducer