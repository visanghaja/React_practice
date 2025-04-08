import { useState } from 'react';
import './App.css'

function App() {


  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState("")
  let [date, setDate] = useState({})
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

      {
        글제목.map(function(a, i){ 
          // a는 글제목 안에 있는 data 꺼내와줌 i 는 반복문 돌때마다 0부터 1씩 증가하는 정수
          // key 는 유니크한 값
          return (
            <div className='list' key={i}> 
            <h4 onClick={()=>{
              modal == true ? setModal(false) : setModal(true)
              setTitle(i)
            }}>{ a } <span onClick={(e)=>{ 
              e.stopPropagation(); // 이렇게 하면 이벤트 버블링 막을 수 있음
              let temp = [...따봉]
              temp[i] += 1
              따봉변경(temp)
             }}>👍</span> {따봉[i]} 
            <button onClick={(e)=>{
              e.stopPropagation();
              let temp = [...글제목]
              temp.splice(i, 1)
              제목변경(temp)
            }}>delete!</button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <div>
        <input type="text" onChange={(e) => {
          입력값변경(e.target.value);
        }} />
        <button onClick={()=>{
          입력값.trim() && (
            제목변경([입력값, ...글제목]),
            따봉변경([0, ...따봉])
          );
        }}>추가!</button>
      </div>

      {
        modal == true ? <Modal color = {'skyblue'} 글제목={글제목} 제목변경 = {제목변경} title = {title} /> : null
      }

    </div>

  );
}

function Modal(props) {
  return(
    <>
      <div className='modal' style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let temp = [...props.글제목]
          temp[0] = "여자 코트 추천"
          props.제목변경(temp)
        }}>글수정</button>
      </div>
    </>

  )
}

// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return(
//       <div>안녕 {this.state.name}
//         <button onClick={()=>{
//           this.setState({age : 21})
//         }}>버튼</button>
//       </div>
//     )
//   }
// }

// const Test = () => {
//   return(
//     <>
//       <div>
//         <h1>Test</h1>
//       </div>
//     </>
//   )
// }

export default App
