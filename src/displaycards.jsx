import { useEffect, useState } from "react";

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function DisplayCards({ onCardClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const ids = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
      const results = await Promise.all(
        ids.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          return res.json();
        }),
      );
      setData(results);
    }

    getData();
  }, []);

  const handleClick = (pokemon) => {
    onCardClick(pokemon);
    setData((prev) => shuffle(prev));
  };

  if (!data) return <p>Loading...</p>;
  return (
    <div className="cards">
      {data.map((pokemon) => (
        <div
          className="poke"
          key={pokemon.id}
          onClick={() => handleClick(pokemon)}
        >
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </div>
      ))}
    </div>
  );
}
export default DisplayCards;
