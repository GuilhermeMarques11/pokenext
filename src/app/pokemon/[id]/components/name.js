export default function Name({ pokemon }) {
  return (
    <h1 className="text-4xl capitalize bg-[#333] text-white p-4 my-3.5 w-74">
      {pokemon.name}
    </h1>
  );
}
