import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);

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

  return (
    <div className="App">
      <div className='gray-nav'>
        <h4 style={{fontSize:'20px'}}>Blog</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>
      <button onClick={changeTitle}>변경</button>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>❤️</span> {like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
