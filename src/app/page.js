import Loading from '@/components/loading/loading';
import PokemonsList from '@/components/PokemonsList';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <div className="flex justify-center items-center mb-10 gap-2">
        <h1 className="text-5xl text-[#e33d33] font-bold text-center">
          Poke<span className="text-[#333]">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="PokeNext Logo"
        />
      </div>
      <Suspense fallback={<Loading />}>
        <PokemonsList />
      </Suspense>
    </>
  );
}
