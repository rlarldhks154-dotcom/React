// my-app\src\chapter_13\Card.jsx
// 합성(composition) 
// Card => 재사용 틀 , ProfileCard => 그 틀에 내용을 채운 사용처

// 범용 틀 컴포넌트 - 어떤 내용이든 카드모양 상자 안에 담는다
// 리액트에서는 컴포넌트끼리 코드를 재사용할 때 상속(extends)보다 합성(조합, composition)을 권장
function Card(props) {
    // 구조 분해 할당으로 props에서 세 개의 값을 꺼낸다.
    // title : 카드 제목
    // backgroundColor : 카드 배경색
    // children : 여는 태그와 닫는 태그 사이에 넣는 모든 내용
    const { title, backgroundColor, children } = props;

    return (
        <div 
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: '0px 0px 4px grey',
                backgroundColor: backgroundColor || 'white',
            }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;
