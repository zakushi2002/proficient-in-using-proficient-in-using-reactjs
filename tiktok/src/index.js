import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Fake message
function emitMessage(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`room-${id}`, {
                detail: { message: `Hello room ${id}` },
            })
        );
    }, 2500);
}

emitMessage(1);
emitMessage(2);
emitMessage(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
