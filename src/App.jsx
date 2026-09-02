import { useState, useEffect } from "react";
import DisplayCards from "./displaycards";
import ScoreBoard from "./scoreboard";

function App() {
  const [pokemons, addPokemons] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    console.log("pokemons updated:", pokemons);
    console.log(score);
  }, [pokemons, score]);

  const handleClick = (pokemon) => {
    if (!pokemons.includes(pokemon.id)) {
      addPokemons((pokemons) => [...pokemons, pokemon.id]);
      setScore(score + 1);
    } else {
      setScore(0);
      addPokemons([]);
    }
  };

  return (
    <>
      <ScoreBoard count={score} />
      <DisplayCards onCardClick={handleClick} />
    </>
  );
}

export default App;
