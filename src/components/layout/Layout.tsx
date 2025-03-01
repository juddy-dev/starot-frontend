import { ReactNode, useState } from 'react';
import GenericModal from '../modal/GenericModal';
import SignUpForm from '@/features/auth/components/SignInForm';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  }

  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);

  const openModalLogIn = () => {
    setIsOpenModalLogin(true);
  } 

  const closeModalLogIn = () => {
    setIsOpenModalLogin(false);
  } 

  return (
    <div className="min-h-screen bg-black">
      <header>
        <span onClick={goToHome}>Starot</span>
        <button className="bg-black border border-white hover:bg-indigo-600 hover:border-black text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          onClick={openModalLogIn}>
          Iniciar sesión
        </button>
      </header>
      <main className="p-0 m-0">{children}</main>
      <footer className="p-4 bg-transparent text-white text-center">© 2025 Starot</footer>

      <GenericModal 
        title=""
        isOpenControl={isOpenModalLogin}
        onClose={closeModalLogIn}>
        <SignUpForm></SignUpForm>
      </GenericModal>
    </div>

  );
}
