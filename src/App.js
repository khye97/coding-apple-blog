import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  // function 함수 (){
  //   setLike(like + 1);
  //   console.log(like);
  // }

  function changeTitle(){
    let copy = [...title];
    copy[0] = "여자 코트 추천"
    setTitle(copy);
  }

  function sort(){
    let sortArray = [...title];
    sortArray.sort();
    setTitle(sortArray)
  }

  function showModal(){
    modal == true ? setModal(false) : setModal(true);
  }

  function countLike (event){
    let copy = [...like];
    let id = event.target.id;
    copy[id] = copy[id] + 1;
    setLike(copy);
  }

  return (
    <div className="App">
      <div className='gray-nav'>
        <h4 style={{fontSize:'20px'}}>Blog</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>
      <button onClick={changeTitle}>변경</button>
      {/*
      <div className="list">
        <h4>{title[0]} <span onClick={countLike}>❤️</span> {like[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>*/}
  {/*}
      {title.map((item, index)=> {
        return (
          <div className="list" key={index}>
            <h4 onClick={() => { setModal(!modal) }}>{item}</h4>
            <span onClick={()=> {
              let copy = [...like];
              copy[index] = copy[index] + 1;
              setLike(copy);
            }}>❤️</span> {like[index]}
            <p>2월 17일 발행</p>
          </div>
        )
      })} */}

      {title.map((item, index)=> {
        return (
          <div className="list" key={index}>
            <h4 onClick={() => { setModal(!modal) }}>{item}</h4>
            <span id={index} onClick={countLike}>❤️</span> {like[index]}
            <p>2월 17일 발행</p>
          </div>
        )
      })}

      {modal == true ? <Modal title={title} changeTitle={changeTitle} /> : null}
      
    </div>
  );
}

function Modal (props){
  return (
    <div className="modal">
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.changeTitle}>글 수정</button>
    </div>
  );
}

export default App;