import {
    ADD_TASK_ACTION,
    REMOVE_TASK_ACTION,
    SET_JOB_ACTION,
} from "./constant";

export const setTask = (payload) => {
    return { type: SET_JOB_ACTION, payload };
};
export const addTask = (payload) => {
    return { type: ADD_TASK_ACTION, payload };
};
export const removeTask = (payload) => {
    return { type: REMOVE_TASK_ACTION, payload };
};
