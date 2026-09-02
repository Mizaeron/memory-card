function ScoreBoard({ pokemons }) {
  return (
    <div className="heading">
      <div>
        <h1>Pokemon Memory Game</h1>
        <h2>Score: {pokemons}</h2>
        <h2>Best Score:</h2>
      </div>
    </div>
  );
}

export default ScoreBoard;
