import { ReactNode, useState } from 'react';
import GenericModal from '../modal/GenericModal';
import SignUpForm from '@/features/auth/components/SignInForm';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { user, signOut } = useAuth();

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
        <span 
          className="cursor-pointer"
          onClick={goToHome}
        >Starot</span>

        {!user ? (
          <button className="bg-black border border-white hover:bg-indigo-600 hover:border-black text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
            onClick={openModalLogIn}>
            Iniciar sesión
          </button>
        ) : (
          <div className="flex flex-row gap-5 items-center">          
            <span>Hola {user.nickname}</span>
            <button className="bg-black border border-white hover:bg-indigo-600 hover:border-black text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
              onClick={signOut}>
              Cerrar sesión
            </button>
          </div>
        )}

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
