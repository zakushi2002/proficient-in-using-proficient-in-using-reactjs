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
const rooms = [
    { id: 1, name: "ELMS" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Family Circle" },
];
function Content() {
    const [roomId, setRoomId] = useState(1);

    useEffect(() => {
        const handlerMessage = ({ detail }) => {
            console.log(detail.message);
        };
        window.addEventListener(`room-${roomId}`, handlerMessage);
        return () => {
            window.removeEventListener(`room-${roomId}`, handlerMessage);
        };
    }, [roomId]);

    return (
        <div>
            <ul>
                {rooms.map((room) => (
                    <li
                        key={room.id}
                        style={{
                            color: room.id === roomId ? "red" : "black",
                        }}
                        onClick={() => setRoomId(room.id)}
                    >
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Content;
