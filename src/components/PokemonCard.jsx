import React from 'react'
import TinderCard from 'react-tinder-card';

const PokemonCard = ({ item }) => {
  return (
      <TinderCard
        className="swipe"
        key={item.char_id}
        preventSwipe={["up","down"]}
        >
        <div 
          className="swipeCard" 
          style={{ 
            backgroundImage: `url(${item.img})`,
            backgroundSize: "500px 430px",
            backgroundRepeat: 'no-repeat'
            }}>
          <div className='card-info'>
            <h1>{item.name}</h1>
            <h3>{item.occupation}</h3>
          </div>
        </div>
      </TinderCard>

  )
}

export default PokemonCard;
