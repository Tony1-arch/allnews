import React ,{useState,useEffect} from 'react'

import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  const [items ,setItems] = useState([])
  const [active,setActive] = useState(1)
  const [category,setCategory] = useState('general');

  useEffect(()=> {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=135f2957acdc4515ad7abb2ba823504d`)
    .then((res) =>  res.json())
    .then(data => setItems(data.articles))
    
  },[category])
  console.log(items)
  return (
    <div className="container w-full bg-gray-400">
    < Menu category={category} active={active} setActive={setActive} setCategory={setCategory}/>
    <NewsGrid items={items}/>
    </div> 
  );
}

export default App;
