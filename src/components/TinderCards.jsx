
import React from "react";
import PokemonCard from "./PokemonCard";
import "./TinderCards.css";


const TinderCards = ({ characters, isLoading }) => {


  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <div className='cardContainer'>
        {characters.map((item) => (
        <PokemonCard 
            key={item.char_id} 
            item={item}
 
            ></PokemonCard>
      ))}
      </div>   
  </div>
  )
}

export default TinderCards;