import { useState } from 'react';
import './App.css';

function App() {
  //let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  return (
    <div className="App">
      <div className='gray-nav'>
        <h4 style={{fontSize:'20px'}}>Blog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
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
