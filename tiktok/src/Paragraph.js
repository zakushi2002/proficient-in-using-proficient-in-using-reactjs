import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const contextTheme = useContext(ThemeContext);

    return (
        <p className={contextTheme.theme}>
            I'm a developer with 1 year 6 months experience in Java backend with
            good knowledge of Object-Oriented Analysis and Design Patterns. I
            thrive in dynamic environments and enjoy tackling challenging
            projects that enhance my skills in software engineering and
            development.
        </p>
    );
}

export default Paragraph;
