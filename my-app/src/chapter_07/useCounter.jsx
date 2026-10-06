import { useState } from "react";
// React의 useState 훅을 가져옵니다. 컴포넌트가 아닌 일반 함수(커스텀 훅) 안에서도
// useState를 사용할 수 있으며, 이렇게 상태 로직을 재사용 가능한 함수로 뽑아낸 것이
// "커스텀 훅(custom hook)"입니다.

function useCounter(initialValue) {
    // useCounter라는 이름의 커스텀 훅을 정의합니다.
    // 이름이 반드시 "use"로 시작해야 React가 이를 훅으로 인식하고
    // 훅의 규칙(Rules of Hooks)을 적용할 수 있습니다.
    // initialValue는 카운터의 초기값을 외부에서 전달받는 매개변수입니다.

    const [count, setCount] = useState(initialValue);
    // count: 현재 카운트 값을 담는 상태 변수
    // setCount: count 값을 변경(업데이트)하는 함수
    // useState(initialValue)를 호출하면서 초기값을 initialValue로 설정합니다.
    // 즉, useCounter(0)으로 호출하면 count는 0부터 시작합니다.

    const increaseCount = () => setCount((count) => count + 1);
    // 카운트를 1 증가시키는 함수입니다.
    // setCount에 "새로운 값"을 직접 넣는 대신 "함수형 업데이트" 형태로 넣었습니다.
    // setCount(count => count + 1)처럼 콜백 함수를 전달하면,
    // React가 "가장 최신의 count 값"을 인자로 넘겨주기 때문에
    // 이전 상태값 기준으로 안전하게 계산할 수 있습니다.
    // (연속으로 여러 번 호출되거나 비동기 상황에서도 최신 값 기준으로 정확히 동작함)

    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    // 카운트를 1 감소시키는 함수입니다.
    // 여기서도 함수형 업데이트를 사용해 이전 count 값을 기준으로 계산합니다.
    // Math.max(count - 1, 0)을 사용한 이유는
    // count가 0인 상태에서 계속 감소를 눌러도 음수(-1, -2...)로 내려가지 않도록
    // 최솟값을 0으로 제한하기 위함입니다.

    return [count, increaseCount, decreaseCount];
    // 훅의 결과값을 배열로 반환합니다.
    // 배열로 반환하면 이 훅을 사용하는 쪽에서
    // const [count, increaseCount, decreaseCount] = useCounter(0);
    // 처럼 원하는 이름으로 자유롭게 구조 분해 할당(destructuring)할 수 있습니다.
    // (useState가 [값, setter] 배열을 반환하는 것과 동일한 패턴을 따른 것입니다.)
}

export default useCounter;
// 다른 파일에서 이 커스텀 훅을 import해서 사용할 수 있도록 기본 내보내기(default export) 합니다.
// 예: import useCounter from "./useCounter";