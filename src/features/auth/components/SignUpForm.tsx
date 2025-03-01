'use client';
import { useState } from 'react';
import { createUser } from '../authService';
import ConstellationBackground from './ConstelationBackground';

export default function SignUpForm() {
    
  const [formData, setFormData] = useState({ 
    email: '', password: '', nickname: '', birthdate: '', 
    cityBirthdate: '', countryBirthdate: '', hourBirthdate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { nextStep } = await createUser(formData.email, formData.password);    
      if (nextStep.signUpStep == 'CONFIRM_SIGN_UP') {
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="mt-6 p-6 flex flex-col space-y-4" 
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="nicknamne" className="text-white mb-1">¿Cómo quieres que nos refiramos a ti?</label>
        <input
          type="text"
          id="nicknamne"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="nombre o apodo"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-row flex-wrap space-y-4 space-x-4">

        <ConstellationBackground></ConstellationBackground>

        <div className="flex flex-col w-full md:w-1/2 space-y-4">

          <div className="flex flex-col">
            <label htmlFor="localeBirthdate" className="text-white mb-1">Fecha de nacimiento</label>
            <input
              type="text"
              id="localeBirthdate"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="dd/mm/yyy"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cityBirthdate" className="text-white mb-1">Ciudad de nacimiento</label>
            <input
              type="text"
              id="cityBirthdate"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ciudad"
              required
              onChange={handleChange}
            />
          </div>


          <div className="flex flex-col">
            <label htmlFor="countryBirthdate" className="text-white mb-1">País de nacimiento</label>
            <input
              type="text"
              id="countryBirthdate"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pais"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nicknamne" className="text-white mb-1">Hora de nacimiento</label>
            <input
              type="text"
              id="hourBirthdate"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="hh:mm"
              required
              onChange={handleChange}
            />
          </div>

        </div>

      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-white mb-1">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="******"
          required
          onChange={handleChange}
        />
      </div>

      <button 
        className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
        type="submit"
        >Registrarse
      </button>
    </form>
  );
}
