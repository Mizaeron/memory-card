function ScoreBoard({ count }) {
  return (
    <div className="heading">
      <div>
        <h1>Pokemon Memory Game</h1>
        <h2>Score: {count}</h2>
        <h2>Best Score:</h2>
      </div>
    </div>
  );
}

export default ScoreBoard;
