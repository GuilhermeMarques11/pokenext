'use client';
import Image from 'next/image';
import Link from 'next/link';

import '../../app/globals.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center py-4 px-6 mb-8 bg-[#333] text-white">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src="/images/pokeball.png"
            width={50}
            height={50}
            alt="Logo Pokenext"
          />
        </Link>
        <h1 className="ml-2">PokeNext</h1>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link
            className={`p-1.5 transition duration-200 border-b-3 border-b-transparent hover:border-b-white ${
              pathname === '/' ? 'active' : ''
            } `}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`p-1.5 transition duration-200 border-b-3 border-b-transparent hover:border-b-white ${
              pathname === '/about' ? 'active' : ''
            } `}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
