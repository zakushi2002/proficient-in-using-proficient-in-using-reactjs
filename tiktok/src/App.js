import { useState } from "react";

const products = [18, 8, 2002];

function App() {
    const [counter, setCounter] = useState(() => {
        const total = products.reduce((total, product) => total + product);
        console.log(total);
        return total;
    });

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const [myInfo, setMyInfo] = useState({
        name: "Toàn Huỳnh Thanh Nguyễn",
        age: 22,
        email: "toannguyenit239@gmail.com",
    });

    const handleUpdateInfo = () => {
        setMyInfo((preData) => {
            return {
                ...preData,
                major: "Software Engineering",
            };
        });
    };
    return (
        <div className="App" style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>

            <h2>Name: {myInfo.name}</h2>
            <h2>Age: {myInfo.age}</h2>
            <h2>Email: {myInfo.email}</h2>
            <h2>Major: {myInfo.major}</h2>
            <button onClick={handleUpdateInfo}>Update Info</button>
        </div>
    );
}

export default App;
