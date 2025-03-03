'use client';
import { useState } from 'react';
import { createUser } from '../authService';

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
      className="mt-6 p-6 flex flex-col space-y-4 z-10" 
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="nicknamne" className="text-white mb-1">¿Cómo quieres que nos refiramos a ti?</label>
        <input
          type="text"
          id="nicknamne"
          placeholder="nombre o apodo"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="localeBirthdate" className="text-white mb-1">Fecha de nacimiento</label>
        <input
          type="text"
          id="localeBirthdate"
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
          placeholder="hh:mm"
          required
          onChange={handleChange}
        />
      </div>

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
        >Registrarse
      </button>
    </form>
  );
}
