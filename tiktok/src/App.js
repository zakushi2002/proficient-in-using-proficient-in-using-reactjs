import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSignUp = () => {
        // Sign up logic goes here
        console.log("Form sign up: ", { name, email });
    };
    return (
        <div className="App" style={{ padding: 32 }}>
            <input onChange={(e) => setName(e.target.value)} value={name} />
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
            <button onClick={handleSignUp}>Sign up</button>
        </div>
    );
}

export default App;
