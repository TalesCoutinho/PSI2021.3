import React, {useState, useEffect} from 'react';
import styles from './App.css';
import Header from './Components/Header/Header'
import CitiesGrid from './Components/Cities/Cities'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const offset = await axios('http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off');

      const randomOffset = Math.floor(Math.random() * offset.data.metadata.totalCount);
      const result = await axios('http://geodb-free-service.wirefreethought.com/v1/geo/cities?', {
        params: {
          limit:9,
          offset: randomOffset,
          hateoasMode: 'off'
        }});
        setItems(result.data.data);
  };
  fetchItems();

  }, [count]);

  const btnStyle = {	
    backgroundColor:'#599bb3',
    borderRadius:'9px',
    border:'1px solid #29668f',
    display:'inline-block',
    cursor:'pointer',
    color:'#ffffff',
    fontFamily:'Arial',
    fontSize:'28px',
    padding:'6px 47px',
    textDecoration:'none',
    flex:'1'
  }

   
  return (
    <div className='App'>
      <Header />
      <button style={btnStyle} onClick={() => setCount(count + 1)}>Get new cities</button>
      <CitiesGrid param={items}/>
    </div>
  )
}

export default App;
