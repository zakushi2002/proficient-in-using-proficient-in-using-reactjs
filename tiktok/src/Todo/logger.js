function logger(reducer) {
    return (preState, action) => {
        console.group(action.type);
        console.log("Previous State: ", preState);
        console.log("Action: ", action);
        const nextState = reducer(preState, action);
        console.log("Next State: ", nextState);
        console.groupEnd();
        return nextState;
    };
}

export default logger;
