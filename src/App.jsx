import { useEffect, useState } from 'react'
import './App.css'
import PropTypes from 'prop-types';
import Cards from './Componentes/Cards/Cards';

function App () {
  
  const [data,setData]=useState([])
  //const [character,setCharacter]=useState({})

  async function fetchallEpisodios () {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const data = await response.json();
    return data.results;
  }

 
  async function getCharacterINfo (url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
async function fetchmain(){
  const episodes=await fetchallEpisodios();
  const characters= episodes.reduce((acc, item)=>{

    return [...acc, ...item.characters.slice(0,10)]
  },[])

 const mySet= new Set(characters)
 console.log(mySet)
  const characterPromise= characters.map((url)=>{
    return getCharacterINfo(url);

  })

  const result = await Promise.all(characterPromise)

  const data = episodes.map((episode) => {
    return {
      id: episode.episode,
      title: `${episode.name} - ${episode.episode}`,
      dateToAir: episode.air_date,
      characters: episode.characters.slice(0, 10).map((url) => {
        return result.find((item) => item.url === url)
      })
    }
  });
 

  return data
   
}
 useEffect(()=>{
fetchmain().then((data) => {
  setData(data)
  
})

 },[])



  return (
    <>
   <div>
      <h1>Rick and Morty</h1>
      <br />
      <ul>

        { 
          data.map((item,index) => (
            
             <Cards
             data={item}
             key={index}
             />
            
          ))
        }
      </ul>
    </div>
  
    </>
  )
}

export default App
