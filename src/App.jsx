import { useState, useEffect } from "react";
import DisplayCards from "./displaycards";
import ScoreBoard from "./scoreboard";

function App() {
  const [pokemons, addPokemons] = useState([]);

  useEffect(() => {
    console.log("pokemons updated:", pokemons);
  }, [pokemons]);

  const handleClick = (pokemon) => {
    if (!pokemons.includes(pokemon.id))
      addPokemons((pokemons) => [...pokemons, pokemon.id]);
  };

  return (
    <>
      <ScoreBoard pokemons={pokemons} />
      <DisplayCards onCardClick={handleClick} />
    </>
  );
}

export default App;
