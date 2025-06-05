export default function Dimensions({ pokemon }) {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col justify-center items-center px-4 border-r-1 border-r-[#ccc]">
        <h4 className="font-bold">Height:</h4>
        <p>{pokemon.height * 10}m</p>
      </div>
      <div className="flex flex-col justify-center items-center px-4">
        <h4 className="font-bold">Weight:</h4>
        <p>{pokemon.weight / 10}kg</p>
      </div>
    </div>
  );
}
