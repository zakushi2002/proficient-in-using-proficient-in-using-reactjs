import {
    ADD_TASK_ACTION,
    REMOVE_TASK_ACTION,
    SET_JOB_ACTION,
} from "./constant";
// Initial state
export const initialState = {
    task: "",
    tasks: [],
};

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB_ACTION:
            return { ...state, task: action.payload };
        case ADD_TASK_ACTION:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case REMOVE_TASK_ACTION:
            const newTasks = [...state.tasks];
            newTasks.splice(action.payload, 1);
            return {
                ...state,
                tasks: newTasks,
            };
        default:
            throw new Error(`Unsupported action type: ${action}`);
    }
};

export default reducer;
