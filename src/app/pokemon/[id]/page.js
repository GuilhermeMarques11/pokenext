import Image from 'next/image';

import Number from './components/number';
import Type from './components/type';
import Dimensions from './components/dimensions';
import Name from './components/name';

export default async function PokemonPage({ params }) {
  const { id } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Name pokemon={pokemon} />
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        width={250}
        height={250}
        alt={pokemon.name}
      />
      <Number id={id} />
      <div>
        <Type pokemon={pokemon} />
        <Dimensions pokemon={pokemon} />
      </div>
    </div>
  );
}
