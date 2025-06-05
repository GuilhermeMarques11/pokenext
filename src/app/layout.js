import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';

export const metadata = {
  title: 'PokeNext',
  description: 'Aplicação Next.js para visualizar Pokémons',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="max-w-[1300px] min-h-[70vh] m-auto py-4 px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
