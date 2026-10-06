import Comment from './Comment';

const comments = [
  {
    id: 1,
    name: '이인제',
    comment: '안녕하세요, 소플입니다.',
  },
  {
    id: 2,
    name: '유재석',
    comment: '리액트 재미있어요~!',
  },
  {
    id: 3,
    name: '강민경',
    comment: '저도 리액트 배워보고 싶어요!!',
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((item) => (
        <Comment
          key={item.id}
          name={item.name}
          comment={item.comment}
        />
      ))}
    </div>
  );
}

export default CommentList;