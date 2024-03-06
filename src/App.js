import './App.css';
import { HomePage } from './views/HomePage';
import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [search, setSearch] = useState('');

const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    
   
  }, [search]);

  const searchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+ "pikachu")
    .then((response) => {
      console.log(response.data);
      setSearch(response.data.results);
      console.log(search);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  }


  const fetchDatas=  ()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      console.log(response.data)
      setPokemon(response.data.results);
      console.log(pokemon);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  }

  return (
    <div>
      {search}
      <HomePage />
    </div>
  );
}

export default App;
