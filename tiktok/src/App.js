import { useState, useMemo, useRef } from "react";

// useMemo is used to avoid re-executing any logic unnecessarily.

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const inputNameRef = useRef();

    const handleSubmit = () => {
        setProducts((prevProducts) => [
            ...prevProducts,
            {
                name: name,
                price: +price,
            },
        ]);
        setName("");
        setPrice("");
        inputNameRef.current.focus();
    };

    const totalPrice = useMemo(() => {
        const result = products.reduce((acc, product) => {
            return acc + product.price;
        }, 0);
        console.log("Calculating...");
        return result;
    }, [products]);

    return (
        <div className="App" style={{ padding: `10px 32px` }}>
            <input
                ref={inputNameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name..."
            />
            <br />
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price..."
            />
            <br />
            <button onClick={handleSubmit}>Add Product</button>
            <br />
            Total Price: {totalPrice}
            <br />
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
