// my-app\src\chapter_12\Calculator.jsx
// state 끌어올리기 - 부모
import { useState } from "react";

// 온도 입력 창 자식 컴포넌트 (섭씨/화씨)
// 받은 props: 
//      scale(단위), temperature(보여줄 값),
//      onTemperatureChange(값이 바뀔때 부르는 함수)
import TemperatureInput from "./TemperatureInput";

// 섭씨 온도를 받아 100도 이상이면 "끓습니다!"
//  아니면 "끓지 않습니다!"를 보여주는 컴포넌트
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다!</p>;
    }
    return <p>물이 끓지 않습니다!</p>;
}

// 화씨 -> 섭씨 변환 함수
// 공식 --> (F - 32) x 5 / 9
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 섭씨 -> 화씨 변환 함수
// 공식 --> C x 9 / 5 + 32
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 문자열 온도와 변환 함수를 받아 안전하게 변환해주는 도우미함수
function tryConvert(temperature, convert) {
    // parseFloat() : 실수형으로 변환해주는 함수
    const input = parseFloat(temperature);

    // 숫자로 변경이 되지 않으면(예: 빈 칸 등) 계산하지 않고 빈 문자열 반환
    if (Number.isNaN(input)) {
        return '';
    }

    // 넘겨 받은 값을 함수를 실행해 결과 계산
    const output = convert(input);

    // 소수3째자리까지만 남기는 반올림 --> 1000을 곱해 반올림 한 뒤 다시 1000으로 나눈다
    const rounded = Math.round(output * 1000) / 1000;

    // 입력창의 value는 문자열이어야 하므로 다시 문자열로 변환
    return rounded.toString();
}

// 두 입력창이 공유한 state를 소유하는 부모 컴포넌트
function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    // scale: 방금 입력한 창이 어느쪽인지 기억 --> c=섭씨, f=화씨
    const [scale, setScale] = useState('c');

    // 섭씨 창에서 값이 바뀌면 자식이 이 함수를 호출
    // 새 값을 저장, 기준 단위를 c로 기록
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    // 화씨 창에서 값이 바뀌면 자식이 이 함수를 호출
    // 새 값을 저장, 기준 단위를 f로 기록
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    // 섭씨 창에 보여줄 값을 계산
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

    // 화씨 창에 보여줄 값을 계산
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale='c'
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
                scale='f'
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />

            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;