import React from 'react'
import PropTypes from 'prop-types';



const Cards = (props) => {
    const {data}=props
    console.log(data)
   

  return (
    <>   
    <p><strong>Title:</strong> {data.title}</p>
    <p><strong>Date to Air:</strong> {data.dateToAir}</p>
    <strong>Characters:</strong>
      <ol>
        {
          data.characters.map((character) => (
            <li key={character.id}>
              <p><strong>Name:</strong> {character.name}</p>
              <p><strong>Specie:</strong> {character.species}</p>
            </li>
          ))
        }
      </ol>
      </>
  )
}

export default Cards