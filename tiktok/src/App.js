import { useState } from "react";

const positions = [
    {
        id: 1,
        name: "Backend Developer",
    },
    {
        id: 2,
        name: "Frontend Developer",
    },
    {
        id: 3,
        name: "Fullstack Developer",
    },
    {
        id: 4,
        name: "DevOps",
    },
    {
        id: 5,
        name: "QA",
    },
];

function App() {
    const [selectedPosition, setSelectedPosition] = useState(positions[0].id);
    console.log("selectedPosition", selectedPosition);
    const handleSubmit = () => {};
    return (
        <div className="App" style={{ padding: 32 }}>
            <h1>Apply for a job</h1>
            {positions.map((position) => (
                <div key={position.id}>
                    <input
                        type="radio"
                        checked={selectedPosition === position.id}
                        value={position.id}
                        onChange={() => setSelectedPosition(position.id)}
                    />
                    <label>{position.name}</label>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;
