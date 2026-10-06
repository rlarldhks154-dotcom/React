// my-app\src\chapter_13\PandaCard.jsx
// 합성(composition) + 특수화(Specialization)
import Card from "./Card";

// 프로필을 보여주는 카드 컴포넌트 - 직접 카드모양을 만들지 않고 Card를 가져다 조합
//      범용 컴포넌트(Card)에 구체적인 props(제목, 색)를 넘겨 프로필용으로 특화된 컴포넌트를 만든다.
// 합성 = 구조 조합(children)
// 특수화 = 범용 틀에 구체적 값을 채운다.
function PandaCard(props) {

    return (
        <Card
            title='Fubao'
            backgroundColor='#42032d'>
            <p style={{color:'#fff'}}>안녕하세요, 푸바오입니다!</p>
            <p>저는 대나무가 너무너무 맛있습니다!</p>

        </Card>
    );
}

export default PandaCard;