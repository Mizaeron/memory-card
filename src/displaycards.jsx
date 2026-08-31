import { useEffect, useState } from "react";

function DisplayCards() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const ids = [38, 39, 40];
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

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="{pokemon.name}" />
        </div>
      ))}
    </div>
  );
}
export default DisplayCards;
