import { useEffect, useState } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback sau khi component mounted
// 3. useEffect(callback, [desps])
// - Gọi lại callback nếu có 1 trong các deps thay đổi

// ==============================
// General characteristics
// a. Callback luôn được gọi sau khi component mounted
// b. Cleanup function luôn được gọi trước khi component unmounted

function Content() {
    const [countDown, setCountDown] = useState(120);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h1>Count down</h1>
            <h2>{countDown}</h2>
        </div>
    );
}

export default Content;
