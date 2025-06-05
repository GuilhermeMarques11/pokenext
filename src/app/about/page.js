import Image from 'next/image';

export const metadata = {
  title: 'Sobre o projeto',
  description: 'Página sobre o projeto PokeNext',
};

export default function Sobre() {
  return (
    <div className=" md:max-w-[500px] m-auto flex flex-col justify-center items-center gap-8 text-center p-4">
      <h1 className="text-5xl font-bold">About the project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repellat dolorem voluptates eius consequuntur perspiciatis unde porro
        incidunt veniam? Alias a esse provident praesentium aliquam animi earum
        enim, quis illo voluptas. Numquam magnam dignissimos omnis impedit totam
        suscipit recusandae mollitia!
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
