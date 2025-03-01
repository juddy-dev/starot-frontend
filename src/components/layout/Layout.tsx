import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <header className="p-4 bg-transparent">Starot</header>
      <main className="p-0 m-0">{children}</main>
      <footer className="p-4 bg-transparent text-white text-center">© 2025 Starot</footer>
    </div>
  );
}
