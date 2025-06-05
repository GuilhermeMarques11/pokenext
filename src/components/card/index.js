import Image from 'next/image';
import Link from 'next/link';

export default function Card({ pokemon, index }) {
  return (
    <div className="flex justify-center items-center flex-col gap-2 md:w-[23%] w-full rounded-[1rem] border-2 border-[#e33d33] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#333] text-white p-4">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className="mt-4 bg-[#e33d33] rounded-[5px] p-1 tex-white flex justify-center items-center">
        #{index}
      </p>
      <h3 className="capitalize mb-4 text-2xl">{pokemon.name}</h3>
      <Link
        href={`/pokemon/${index}`}
        className="bg-white text-[#222] py-3 px-5 rounded-[5px] font-bold transition duration-200 hover:bg-[#e33d33] hover:text-white"
      >
        Details
      </Link>
    </div>
  );
}
