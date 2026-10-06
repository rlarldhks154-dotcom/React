import Book from "./Book";

//Alt + Shift + 아래 방향키 : 코드 안에서 누르면 아래로 그 줄이 복사 돼서 나온다.
function Library(props) {
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리엑트" numOfPage={500} />
        </div>
    );
}

export default Library;