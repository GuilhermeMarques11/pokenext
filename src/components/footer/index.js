export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-center items-center bg-[#333] h-36 mt-8 border-t-3 boder-t-[#111] text-white">
      <p className="md:border-r-1 border-r-[#ccc] pr-1">
        <span className="font-bold">PokeNext</span> &copy;
        {new Date().getFullYear()}
      </p>
      <p className="pl-1">
        Powered by{' '}
        <a
          className="border-b-3 border-b-transparent transition duration-200 hover:border-b-white"
          href="https://github.com/GuilhermeMarques11"
          target="_blank"
        >
          Guilherme Marques
        </a>
      </p>
    </footer>
  );
}
