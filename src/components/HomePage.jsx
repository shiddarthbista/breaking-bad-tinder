import React from "react";
import axios from "axios";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import "./Header.css";

function HomePage() {
    const [characters, setCharacters] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);   

    React.useEffect(() =>{
        const fetchCharacters = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/character/random/?limit=30`)
          console.log(result.data)
           setCharacters(result.data)
           setIsLoading(false)
        }
      fetchCharacters()
      }, [] )
      

    return (
      <div className="container" >
          <TinderCards isLoading={isLoading} characters={characters}  />
          <SwipeButtons />
      </div>
    );
  }

export default HomePage;