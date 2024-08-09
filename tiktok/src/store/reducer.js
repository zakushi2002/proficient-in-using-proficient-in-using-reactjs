import { SET_TASK_INPUT, ADD_TASK } from "./constants";

const initialState = {
    tasks: [],
    taskInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TASK_INPUT:
            return {
                ...state,
                taskInput: action.payload,
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        default:
            throw new Error("Invalid action type!!!");
    }
}

export { initialState };
export default reducer;
