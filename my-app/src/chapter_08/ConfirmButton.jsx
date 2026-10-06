// my-app/src/chapter_08/ConfirmButton.jsx
import { useState } from "react";

// 함수 컴포넌트
function ConfirmButton(props) {
    // [현재 값, 값을 바꾸는 함수]
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;