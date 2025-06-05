import styles from '../styles/Type.module.css';

export default function Type({ pokemon }) {
  return (
    <>
      <h3 className="m-2.5 text-[1.2rem] font-bold">Tipo:</h3>
      <div className="flex justify-center items-center gap-2">
        {pokemon.types.map((item, index) => (
          <span
            className={`py-2.5 px-4 text-white bg-black border-1 border-[#ccc] rounded-[6px] uppercase text-[0.8rem] ${
              styles['type_' + item.type.name]
            }`}
            key={index}
          >
            {item.type.name}
          </span>
        ))}
      </div>
    </>
  );
}
