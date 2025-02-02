import { useState, useRef } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([]);
  let [like, setLike] = useState([]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [userValue, setUserValue] = useState('');
  let [date, setDate] = useState([]);

  let inputElement = useRef(null);


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

  function publish (){
    if(userValue == ""){
      alert("글을 입력하세요");
      return;
    } else {
      let copy = [...title];
      copy.unshift(userValue);
      setTitle(copy);
      inputElement.current.value = '';
      setUserValue('');
      
      let copyLike = [...like];
      copyLike.unshift(0);
      setLike(copyLike);

      let copyDate = [...date];
      let today = new Date();
      today = String(today);
      copyDate.unshift(today);
      setDate(copyDate);
    }
  }

  function deleteText (event){
    let copy = [...title];
    let clickBtn = event.target.id;
    copy.splice(clickBtn, 1); 
    setTitle(copy);
  }

  function pressEnter (event){
    if(event.key === 'Enter'){
      publish();
    }
  }

  return (
    <div className="App">
      <div className='gray-nav'>
        <h4 style={{fontSize:'20px'}}>Blog</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>
      <button onClick={changeTitle}>변경</button>

      {title.map((item, index)=> {
        return (
          <div className="list" key={index}>
            <h4 onClick={() => { setModal(!modal); setModalTitle(index) }}>{item}
            <span id={index} onClick={ (event) => {event.stopPropagation(); countLike(event); }}>❤️</span> {like[index]}</h4>
            <p>{date[index]}</p>
            <button id={index} onClick={(event) => {deleteText(event)}}>삭제</button>
          </div>
        )
      })}

      <input type='text' onChange={(event) => { setUserValue(event.target.value); }} ref={inputElement} onKeyDown={(event) => {pressEnter(event)}}/>
      <button onClick={publish}>글 발행</button>

      {modal == true ? <Modal title={title} modalTitle={modalTitle} changeTitle={changeTitle} /> : null}

    </div>
  );
}

function Modal (props){
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.changeTitle}>글 수정</button>
    </div>
  );
}

export default App;