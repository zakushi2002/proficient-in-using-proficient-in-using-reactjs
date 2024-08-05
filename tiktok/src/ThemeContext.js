import { createContext, useState } from "react";

// Context
// CompA -> CompB -> CompC

// Theme: light, dark

// 1. Create a context
// 2. Provider
// 3. Consumer

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    const value = { theme, handleChangeTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
