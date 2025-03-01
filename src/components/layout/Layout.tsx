import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <header>
        Starot
        <button className="bg-black border border-white hover:bg-indigo-600 hover:border-black text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300">
          Iniciar sesión
        </button>
      </header>
      <main className="p-0 m-0">{children}</main>
      <footer className="p-4 bg-transparent text-white text-center">© 2025 Starot</footer>
    </div>
  );
}
