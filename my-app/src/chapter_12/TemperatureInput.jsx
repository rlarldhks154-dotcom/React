// my-app\src\chapter_12\TemperatureInput.jsx
// state 끌어올리기 - 자식은 state 없이 부모와 소통

// 찾아보기 표 객체 --> 단위 코드 (c:섭씨, f:화씨)
const scaleNames = {
    c: '섭씨',
    f: '화씨',
};

// 온도 입력창 함수 컴포넌트
function TemperatureInput(props) {
    // 입력창에 글잡를 입력할 때마다 실행
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]})
            </legend>
            <input 
                value={props.temperature}
                onChange={handleChange}
             />
        </fieldset>
    );
}

export default TemperatureInput;