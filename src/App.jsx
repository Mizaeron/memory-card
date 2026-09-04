import { useState } from "react";
import DisplayCards from "./displaycards";
import ScoreBoard from "./scoreboard";

function App() {
  const [pokemons, addPokemons] = useState([]);
  const [score, setScore] = useState(null);
  const [bestScore, setBestScore] = useState(null);

  const handleClick = (pokemon) => {
    if (!pokemons.includes(pokemon.id)) {
      addPokemons((pokemons) => [...pokemons, pokemon.id]);
      setScore(score + 1);
    } else {
      setScore(0);
      addPokemons([]);
    }
  };

  const checkScore = () => {
    if (score > bestScore) setBestScore(score);
  };
  return (
    <>
      <ScoreBoard count={score} best={bestScore} />
      <DisplayCards
        onCardClick={(card) => {
          handleClick(card);
          checkScore();
        }}
      />
    </>
  );
}

export default App;
