import { useState } from "react";
import DisplayCards from "./displaycards";
import ScoreBoard from "./scoreboard";

function App() {
  const [clickInfo, setClickInfo] = useState(null);

  const handleClick = (p) => {
    setClickInfo(p);
  };
  return (
    <>
      <ScoreBoard clickInfo={clickInfo} />
      <DisplayCards onCardClick={handleClick} />
    </>
  );
}

export default App;
