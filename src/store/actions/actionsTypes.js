export const NEXT_WEEK = 'NEXT_WEEK';
export const PREV_WEEK = 'PREV_WEEK';
export const NEXT_DAY = 'NEXT_DAY';
export const PREV_DAY = 'PREV_DAY';
export const CURRENT_DATE = 'CURRENT_DATE';

//get tasks list from database
export const GET_TASKS_LIST_PROCESS = 'GET_TASKS_LIST_PROCESS';
export const INIT_GET_TASKS_LIST = 'INIT_GET_TASKS_LIST';
export const GET_TASKS_LIST_SUCCESS = 'GET_TASKS_LIST_SUCCESS';
export const GET_TASKS_LIST_ERROR = 'GET_TASKS_LIST_ERROR';


//add task
export const INIT_ADD_TASK = 'INIT_ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';
export const ADD_TASK_PROCESS = 'ADD_TASK_PROCESS';
export const CLEAR_ADD_TASK = 'CLEAR_ADD_TASK';

//change status of task
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const INIT_UPDATE_TASK_STATUS = 'INIT_UPDATE_TASK_STATUS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAIL = 'UPDATE_TASK_FAIL';
export const UPDATE_TASK_PROCESS = 'UPDATE_TASK_PROCESS';

//move task to next week 
export const MOVE_TASK_TO_NEXT_WEEK = 'MOVE_TASK_TO_NEXT_WEEK';
export const INIT_MOVE_TASK_TO_NEXT_WEEK = 'INIT_MOVE_TASK_TO_NEXT_WEEK';
export const MOVE_TASK_TO_NEXT_WEEK_ERROR = 'MOVE_TASK_TO_NEXT_WEEK_ERROR';
export const MOVE_TASK_TO_NEXT_WEEK_SUCCESS = 'MOVE_TASK_TO_NEXT_WEEK_SUCCESS';

//delete task from next week after updating status
export const CANCEL_MOVE_TASK_TO_NEXT_WEEK = 'CANCEL_MOVE_TASK_TO_NEXT_WEEK';
export const INIT_CANCEL_MOVE_TASK_TO_NEXT_WEEK = 'INIT_CANCEL_MOVE_TASK_TO_NEXT_WEEK';
export const CANCEL_MOVE_TASK_TO_NEXT_WEEK_ERROR = 'CANCEL_MOVE_TASK_TO_NEXT_WEEK_ERROR';
export const CANCEL_MOVE_TASK_TO_NEXT_WEEK_SUCCESS = 'CANCEL_MOVE_TASK_TO_NEXT_WEEK_SUCCESS';
