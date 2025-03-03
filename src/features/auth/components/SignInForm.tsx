'use client';
import { useState } from 'react';
import { logIn } from '../authService';
import { useRouter } from 'next/router';

export default function SignUpForm() {

  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { isSignedIn } = await logIn(formData.email, formData.password);
      if (isSignedIn) {
        router.push("/myspace");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="mt-6 flex flex-col space-y-4 min-w-full md:min-w-2xs" 
      onSubmit={handleSubmit}
    >

      <div className="flex flex-col">
        <label htmlFor="email" className="text-white mb-1">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="tu@email.com"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-white mb-1">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          required
          onChange={handleChange}
        />
      </div>

      <button 
        className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
        type="submit"
        >Iniciar sesión
      </button>
    </form>
  );
}
