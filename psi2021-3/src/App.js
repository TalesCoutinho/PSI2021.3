import React, {useState, useEffect} from 'react';
import styles from './App.css';
import Header from './Components/Header/Header'
import CitiesGrid from './Components/Cities/Cities'
import axios from 'axios'

const App = () => {
  const [offset, setOffset] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchOffset = async () => {
      const result = await axios('http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off');

      const randomOffset = Math.floor(Math.random() * result.data.metadata.totalCount);
      setOffset(randomOffset);
  };
    fetchOffset();

    const fetchItems = async () => {
      const result = await axios('http://geodb-free-service.wirefreethought.com/v1/geo/cities?', {
        params: {
          limit:10,
          offset: offset,
          hateoasMode: 'off'
        }

      });
      console.log(offset);
      console.log(result.data.data)
      setItems(result.data.data);
    };
    fetchItems();

  }, []);

   
  return (
    <div className='App'>
      <Header />
      <CitiesGrid param={items}/>
    </div>
  )
}

export default App;
