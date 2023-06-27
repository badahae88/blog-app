import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Modal from './components/Modal';
import {useState} from 'react';

function App() {

  let [articles, setArticle] = useState(['리액트공부', '할수있다', '다지나갈거야'])
  let [newArticle, setNewArticle] = useState('')
  let [modal, setModal] = useState(false)

  return (
    <div className="App">
      <Header />

      {articles.map((article, i)=>{
        return (
          <Article 
            articles = {articles}
            i = {i}
            setArticle = {setArticle}
          />
        );
      })
    }

  <input onChange={(e)=>{
    setNewArticle(e.target.value);
  }}/>
  <button onClick={()=>{
    let copy = [...articles]
    copy.unshift(newArticle)
    setArticle(copy)
    console.log(articles);
  }}>글발행</button>

  <hr />
  <button onClick={()=>{
    setModal(!modal)
  }}>보여줘</button>
  {
    modal ? <Modal /> : ''
  }
  

    </div>
  );
};

export default App;
