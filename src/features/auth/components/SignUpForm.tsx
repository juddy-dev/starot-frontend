'use client';
import { useState } from 'react';
import { createUser } from '../authService';

export default function SignUpForm() {
    
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
}
