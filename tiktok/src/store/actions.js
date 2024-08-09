import { SET_TASK_INPUT, ADD_TASK } from "./constants";

export const setTaskInput = (payload) => ({
    type: SET_TASK_INPUT,
    payload,
});

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload,
});
