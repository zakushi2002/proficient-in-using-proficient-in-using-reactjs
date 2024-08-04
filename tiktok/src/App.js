import { useState, useReducer } from "react";

// useState
// 1. Initial state: 0
// 2. Action: Increase (state +1) or Decrease (state -1)

// useReducer
// 1. Initial state: 0
// 2. Action: Increase (state +1) or Decrease (state -1)
// 3. Reducer: (state, action) => state
// 4. Dispatch: dispatch(action)

// Initial state
const initialState = 0;

// Actions
const INCREASE_ACTION = "INCREASE";
const DECREASE_ACTION = "DECREASE";

// Reducer
const reducer = (state, action) => {
    console.log("Reducer", state, action);
    switch (action) {
        case INCREASE_ACTION:
            return state + 1;
        case DECREASE_ACTION:
            return state - 1;
        default:
            throw new Error(`Unsupported action type: ${action}`);
    }
};

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App" style={{ padding: `10px 32px` }}>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(INCREASE_ACTION)}>Increase</button>
            <button onClick={() => dispatch(DECREASE_ACTION)}>Decrease</button>
        </div>
    );
}

export default App;
