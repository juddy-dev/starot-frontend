import { useRouter } from 'next/router';
import StarryBackground from './StarryBackground';

export default function HeroSection() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  }


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <StarryBackground />
      <div className="relative min-h-screen z-2 content-center justify-items-center p-12">
        <h1 className="text-5xl font-bold">Tu esencia está escrita en los astros</h1>
        <p className="mt-4 text-lg">Descifra tu carta astral y despierta tu poder interior</p>
        <button 
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
          onClick={goToLogin}
          >
          Quiero conocer mi carta astral
        </button>
      </div>
    </section>
  );
}

