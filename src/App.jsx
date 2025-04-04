import { useState } from 'react';
import './App.css'

function App() {


  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목]; // 이렇게 배열로 복사! (이렇게 해야지 화살표가 달라짐)
        copy[0] = '여자 코트 추천';
        제목변경(copy);
        // state 변경함수는 기존 state와 변경하려는 state가 같은 경우 변경 안해줌
      }}>글수정</button>

      <button onClick={()=>{
        let temp = [...글제목];
        temp = temp.sort();
        제목변경(temp)
      }}>가나다정렬</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경( 따봉+1 )}}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

    </div>

  );
}

export default App
