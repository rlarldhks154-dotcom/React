// my-app\src\chapter_11\SignUp.jsx
// 폼 다루기
import { useState } from "react";

// 회원가입 폼 컴포넌트
function SignUp(props) {
    // name: 입력창에 적힌 이름을 기억하는 state, 처음에는 빈 문자열
    // setName: name을 바꾸는 함수
    const [name, setName] = useState('');

    // gender: 선택된 성별 state, 처음에는 남자가 선택된 상태로 시작.
    // setGender: gender를 바꾸는 함수
    const [gender, setGender] = useState('남자');

    // 입력창에 글자를 입력할 때마다 실행되는 이벤트 핸들러
    // event : 브라우저가 만들어서 넘겨주는 이벤트 객체
    // event.target : 이벤트가 일어난 실제 요소 (여기서는 input)
    // event.target.value : 그 입력창에 현재 담겨있는 문자열
    const handleChangeName = (event) => {
        setName(event.target.value);
    }; 

    // select에서 다른 옵션을 고를 때 실행되는 이벤트 핸들러
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    // 폼을 제출(제출 버튼 클릭 또는 입력창에서 엔터)할 때 실행
    // alert: 백틱 템플릿 리터럴. 현재 name, gender를 끼워넣어 팝업으로 보여준다.
    // event.preventDefault() : 폼의 기본 동작을 서버로 전송하는 것을 막는다.
    //      호출하지 않으면 alert 후 페이지가 새로고침되어서 state가 모두 초기화된다.
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" 
                       value={name}
                       onChange={handleChangeName}
                />
            </label>
            <br />
            <label>
                성별:
                <select value={gender}
                        onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>

            <button type='submit'>제출</button>
        </form>
    );
}

export default SignUp;