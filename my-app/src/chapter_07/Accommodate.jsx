import { useState, useEffect } from "react";
// React에서 두 가지 훅을 가져옵니다.
// useState: 컴포넌트 안에서 상태(state)를 관리하기 위한 훅
// useEffect: 렌더링 이후에 "부수 효과(side effect)"를 실행하기 위한 훅
//            (예: 콘솔 로그 출력, 데이터 요청, 구독 설정 등)

import useCounter from "./useCounter";
// 앞서 만든 커스텀 훅 useCounter를 가져옵니다.
// count 값과 증가/감소 함수를 재사용 가능한 형태로 제공해주는 훅입니다.

const MAX_CAPACITY = 10;
// 컴포넌트 최대 수용 인원을 나타내는 상수입니다.
// 컴포넌트 바깥에 선언했기 때문에 리렌더링될 때마다 새로 생성되지 않고,
// 값이 절대 바뀌지 않는 고정 상수로 사용됩니다.

function Accommodate(props) {
    // Accommodate라는 이름의 함수형 컴포넌트를 정의합니다.
    // props는 부모 컴포넌트로부터 전달받는 속성 객체지만,
    // 현재 코드에서는 실제로 사용되지 않고 있습니다.

    const [isFull, setIsFull] = useState(false);
    // isFull: 정원이 가득 찼는지 여부를 나타내는 상태값 (boolean)
    // setIsFull: isFull 값을 변경하는 함수
    // 초기값은 false (가득 차지 않은 상태)로 시작합니다.

    const [count, increaseCount, decreaseCount] = useCounter(0);
    // useCounter 커스텀 훅을 호출해서 count(현재 인원), increaseCount(입장 함수),
    // decreaseCount(퇴장 함수)를 각각 구조 분해 할당으로 받아옵니다.
    // 초기값 0을 인자로 넘겼으므로 count는 0부터 시작합니다.

    useEffect(() => {
        console.log('=================');
        console.log('useEffect() is called.');
        console.log(`isFull: ${isFull}`);
    });
    // 두 번째 인자(의존성 배열)를 생략한 useEffect입니다.
    // 의존성 배열이 없으면 "컴포넌트가 렌더링될 때마다" (최초 렌더링 포함) 매번 실행됩니다.
    // 즉 count가 바뀌든 isFull이 바뀌든, 혹은 부모로부터 리렌더링을 유발하는 어떤 변화든
    // 렌더링이 일어날 때마다 이 콜백이 실행되어 현재 isFull 값을 콘솔에 출력합니다.
    // (주로 디버깅/로그 확인 용도로 사용됨)

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);
    // 의존성 배열에 [count]를 지정한 useEffect입니다.
    // 이 콜백은 "최초 렌더링 시 1회" + "count 값이 변경될 때마다" 실행됩니다.
    // count가 MAX_CAPACITY(10) 이상이면 setIsFull(true)로 상태를 변경하고,
    // 그렇지 않으면 setIsFull(false)로 상태를 변경합니다.
    // (count >= MAX_CAPACITY는 boolean 값을 반환하므로 그 결과를 그대로 setIsFull에 전달)
    // 그리고 현재 count 값을 콘솔에 출력합니다.
    // 이 useEffect는 isFull을 count 상태에 "동기화"시키는 역할을 합니다.

    return (
        <div style={{ padding: 16}}>
            {/* 컴포넌트의 최상위 컨테이너 div. 인라인 스타일로 padding 16px을 지정 */}

            <p>{`총 ${count}명 수용했습니다.`}</p>
            {/* 템플릿 리터럴을 사용해 현재 count 값을 문자열에 삽입하여 화면에 표시 */}

            <button
                onClick={increaseCount}
                disabled={isFull}>
                    입장
            </button>
            {/* "입장" 버튼
                onClick={increaseCount}: 클릭 시 useCounter의 increaseCount 함수 실행 → count + 1
                disabled={isFull}: isFull이 true이면(정원이 가득 차면) 버튼이 비활성화되어
                                    더 이상 입장 처리를 할 수 없게 막음 */}

            <button onClick={decreaseCount}>퇴장</button>
            {/* "퇴장" 버튼
                onClick={decreaseCount}: 클릭 시 useCounter의 decreaseCount 함수 실행 → count - 1
                (단, useCounter 내부에서 Math.max(count - 1, 0) 처리를 했기 때문에
                 0 미만으로는 내려가지 않음)
                이 버튼에는 disabled가 없으므로 정원이 가득 찬 상태에서도 퇴장은 항상 가능함 */}

            {isFull && <p style={{ color: 'red'}}>정원이 가득찼습니다.</p>}
            {/* 조건부 렌더링(&& 연산자 활용)
                isFull이 true일 때만 오른쪽의 <p> 태그가 렌더링됨
                isFull이 false이면 false && (...)는 false로 평가되어 아무것도 렌더링되지 않음
                빨간색 텍스트로 "정원이 가득찼습니다." 경고 메시지를 표시 */}
        </div>
    );
}

export default Accommodate;
// 이 컴포넌트를 다른 파일(main.jsx 등)에서 import해서 사용할 수 있도록 기본 내보내기 합니다.