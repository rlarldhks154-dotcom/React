// my-app\src\chapter_10\AttendanceBook.jsx
// 리스트와 키(key)

// 출석부로 표현할 학생 데이터 --> { id, name } 모양의 객체 4개를 배열로 묶는다.
// 함수 컴포넌트 바깥에 있으므로 리렌더링이 일어나도 매번 새로 만들지 않는다. 
const students = [
    { id: 1, name: 'Seokssaem', },
    { id: 2, name: 'Fubao', },
    { id: 3, name: 'Aibao', },
    { id: 4, name: 'Lebao', },
    { id: 5, name: 'Ruibao', },
    { id: 6, name: 'Huibao', },
    { id: 7, name: 'Suibao', },
    { id: 8, name: 'kangbao', },    
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;