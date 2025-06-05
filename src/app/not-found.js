import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 min-h-[70vh] text-center">
      <h1 className="text-8xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700 capitalize">page not found</p>
      <Link
        href="/"
        className="bg-[#333] text-white px-4 py-2 rounded hover:bg-[#e33d33] transition duration-200"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
