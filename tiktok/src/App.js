import { useState } from "react";
const gifts = [
    {
        name: "Màn hình Monitor Xiaomi 27 inch A27i ELA5345EU",
    },
    {
        name: "Xiaomi POCO X6 Pro 5G 8GB 256GB",
    },
    {
        name: "Tai nghe Bluetooth Apple AirPods Pro 2 2023 USB-C",
    },
];
function App() {
    const contentNoGift = "Click to get a gift";
    const [gift, setGift] = useState(contentNoGift);
    const randomGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex].name);
    };
    return (
        <div className="App" style={{ padding: 32 }}>
            <h1>{gift}</h1>
            <button onClick={randomGift}>Get</button>
        </div>
    );
}

export default App;
