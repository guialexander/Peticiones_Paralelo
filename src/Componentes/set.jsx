import React from 'react'

const set = () => {

    const chartersSet= new Set();

  episodes.forEach(episode=>{
    episode.characters.slice(0,10).forEach(characterUrl=>{
      chartersSet.add(characterUrl);
    });
    
  });

  const promiseCharters=[];
  for (const url of chartersSet){
    promiseCharters.push(getCharacterINfo(url));
  }
  const character= await Promise.all(promiseCharters);
  console.log(character)

//con un forEach(element => {
    
//});
  async function fetchmain(){
    const episodes=await fetchallEpisodios();
    const characters=[];
    episodes.forEach(epi => {
      characters.push(...epi.characters.slice(0,10))    
    });
    const characterPromise= characters.map((url)=>{
      return getCharacterINfo(url);
    })
  
    console.log(characterPromise.length)
    
  }



  return (
    <div>set</div>
  )
}

export default set