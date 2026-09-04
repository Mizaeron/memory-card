function ScoreBoard({ count, best }) {
  return (
    <div className="heading">
      <div>
        <h1>Pokemon Memory Game</h1>
        <h2>Score: {count}</h2>
        <h2>Best Score: {best}</h2>
      </div>
    </div>
  );
}

export default ScoreBoard;
