// my-app/src/chapter_08/ConfirmButton.jsx
// 이벤트 + 조건부 렌더링

// 컴포넌트가 사용할 인라인 스타일을 미리 객체로 모아둔 것
// JSX의 style 속성에는 문자열이 아니라 자바스크립트 객체를 넣어야 한다.
// --> 이름 붙인 객체로 만들어두면 style={stlyes.wrapper} 처럼 깔끔하게 사용할 수 있다.
const styles = {
    wrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid grey',
    },
    greeting: {
        marginRight: 8,
    },
};

// 함수 컴포넌트 - 부모(LandingPage)가 준 값을 props로 받는다.
function Toolbar(props) {
    // props.isLoggedIn 이 방식대로 안하고 구조 분해 할당으로 props 객체에서 필요한 세 값을 한 번에 꺼낸다.
    const { isLoggendIn, onClickLogin, onClickLogout } = props;
    // isLoggendIn : 로그인 여부 (true/false) -> 데이터
    // onClickLogin : 로그인 버튼을 눌렀을 때 실행할 함수 -> 동작
    // onClickLogout : 로그아웃 버튼을 눌렀을 때 실행할 함수 -> 동작

    return (
        <div style={styles.wrapper}>

            {isLoggendIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggendIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            ) }

        </div>
    );
}

export default Toolbar;