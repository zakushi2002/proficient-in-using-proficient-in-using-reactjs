import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
    return (
        <GlobalStyles>
            <div style={{ padding: "10px 32px" }}>
                <Button />
                <Button primary />
            </div>
        </GlobalStyles>
    );
}

export default App;
