// my-app\src\chapter_13\ProfileCard.jsx
// 합성(composition) + 특수화(Specialization)
import Card from "./Card";

// 프로필을 보여주는 카드 컴포넌트 - 직접 카드모양을 만들지 않고 Card를 가져다 조합
//      범용 컴포넌트(Card)에 구체적인 props(제목, 색)를 넘겨 프로필용으로 특화된 컴포넌트를 만든다.
// 합성 = 구조 조합(children)
// 특수화 = 범용 틀에 구체적 값을 채운다.
function ProfileCard(props) {

    return (
        <Card
            title='Seokssaem'
            backgroundColor='#4ea04e'>
            <p>안녕하세요, 석쌤입니다!</p>
            <p>저는 리액트를 처음 공부합니다! 너무 재밌습니다!</p>

        </Card>
    );
}

export default ProfileCard;