import Content from "./Content";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function App() {
    const contextTheme = useContext(ThemeContext);

    return (
        <div className="App" style={{ padding: 32 }}>
            <button onClick={contextTheme.handleChangeTheme}>
                Change Theme
            </button>
            <Content />
        </div>
    );
}

export default App;
