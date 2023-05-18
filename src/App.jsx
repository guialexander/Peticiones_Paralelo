import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const numbers = [1, 2, 3, 4, 5];
  

  const [episodios,setEpisodios]=useState({})
  const [character,setCharacter]=useState({})

  async function fetchepisodios () {
    const res= await fetch('https://rickandmortyapi.com/api/episode')
    return res.json()
  }

 
  async function fetchepersonajes () {
    const res= await fetch('https://rickandmortyapi.com/api/character')
    return res.json()
  }
  



 useEffect(()=>{
const fetchAll=async()=>{
  const characterList = new Set();
  const EpisodieData= await fetchepisodios()
  const PersonajesData= await fetchepersonajes()
  

  const [postEpisodios,postPersonajes ]= await Promise.all([EpisodieData,PersonajesData])
const epidata = postEpisodios.results
const persondata= postPersonajes.results

setEpisodios(epidata)
setCharacter(persondata)

episodios.map((item)=>

console.log(item.characters)
)


 
}

fetchAll()
 },[])



  return (
    <>
    <div>
      <h1>hola</h1>      
  
      </div>
  
    </>
  )
}

export default App
