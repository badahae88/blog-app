import { useState } from 'react';
import './Article.css'

function Article(props){
  let [likes, setLikes] = useState(0);

  return (
    <div className='Article'>
      <span className='Number'>최신글 No.{props.i+1}</span>
      <h1>{props.articles[props.i]} 
        <span onClick={()=>{
          setLikes(likes+1)
        }}>👍</span> {likes} </h1>
      
        <p>발행일 : <input type="date" /></p>

        <button onClick={()=>{
          let copy = [...props.articles]
          copy.splice(props.i,1);
          props.setArticle(copy);
        }}>삭제</button>
    </div>
  )
}

export default Article;