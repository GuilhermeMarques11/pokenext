import Card from '../card';

export default async function PokemonsList() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const response = await fetch(`${api}?limit=${maxPokemons}`);
  const pokemonData = await response.json();

  return (
    <>
      <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-y-8 w-full">
        {pokemonData.results.map((pokemon, index) => (
          <Card key={pokemon.url} pokemon={pokemon} index={index + 1} />
        ))}
      </div>
    </>
  );
}
