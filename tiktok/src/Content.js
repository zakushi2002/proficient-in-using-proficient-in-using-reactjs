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
// c. Cleanup function luôn được gọi trước khi callback được gọi lần tiếp theo (trừ lần component mounted)

function Content() {
    const [count, setCount] = useState(1);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        console.log(
            `Mounted or re-rendered ${count} ${count === 1 ? "time" : "times"}`
        );

        return () => {
            console.log(
                `Cleaned up ${count} ${count === 1 ? "time" : "times"}`
            );
        };
    }, [count]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <input type="file" onChange={handlePreviewAvatar} />
            <br />
            {avatar && <img src={avatar.preview} alt="avatar" width="60%" />}
        </div>
    );
}

export default Content;
