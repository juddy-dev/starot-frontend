'use client';
import { useEffect, useState } from 'react';
import { confirmEmail, createUser, loginBySignUp } from '../authService';
import { User } from '@/types/User';
import GenericModal from '@/components/modal/GenericModal';
import { useRouter } from 'next/router';
import { useLoader } from '@/context/LoaderContext';

export default function SignUpForm() {
  const loader = useLoader();
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);

  

  const [formData, setFormData] = useState({ 
    email: '', password: '', confirmPassword: '', nickname: '', birthdate: '', 
    birthcity: '', birthcountry: '', birthhour: '', confirmCode: '', emailHide: ''
  });


  useEffect( ()=> { 
    if (formData.confirmCode.length == 6) {
      closeModal();
      confirmUser(formData.confirmCode);
    }
  }, [formData.confirmCode]);


  const openModal = () => {
    setIsOpenModal(true);
  } 

  const closeModal = () => {
    setIsOpenModal(false);
  } 
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      return;
    }

    loader.setIsLoading(true);
    try {
      formData.emailHide = formData.email.replace(/(?<=^[A-Za-z0-9]{2}).*?(?=@)/, "***");
      const user = {
        email: formData.email,
        nickname: formData.nickname,
        birthdate: formData.birthdate,
        birthcity: formData.birthcity,
        birthcountry: formData.birthcountry,
        birthhour: formData.birthhour.replace(':',''),
      } as User;
      const { nextStep } = await createUser(user, formData.password);
      if (nextStep.signUpStep == 'CONFIRM_SIGN_UP') {
        openModal();
      }
    } catch (err) {
      console.log(err);
    } finally {
      loader.setIsLoading(false);
    }
  };

  const confirmUser = async (code: string) => {
    loader.setIsLoading(true);
    try {
      const { nextStep } = await confirmEmail(formData.email, code);
      console.log(nextStep);
      if (nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN') {
        const { nextStep } = await loginBySignUp();
        console.log(nextStep);
        if (nextStep.signInStep === 'DONE') {
          router.push('/myspace');
        }
      }
    }catch(err) {
      console.log(err);
      loader.setIsLoading(false);
    }
  }

  return (
    <form
      className="mt-6 p-6 flex flex-col space-y-4 z-10" 
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="nickname" className="text-white mb-1">¿Cómo quieres que nos refiramos a ti?</label>
        <input
          type="text"
          id="nickname"
          placeholder="nombre o apodo"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="birthdate" className="text-white mb-1">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthdate"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="birthhour" className="text-white mb-1">Hora de nacimiento</label>
        <input
          type="time"
          id="birthhour"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="birthcity" className="text-white mb-1">Ciudad de nacimiento</label>
        <input
          type="text"
          id="birthcity"
          placeholder="Ciudad"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="birthcountry" className="text-white mb-1">País de nacimiento</label>
        <input
          type="text"
          id="birthcountry"
          placeholder="Pais"
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

      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="text-white mb-1">Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
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



      <GenericModal
        title="Confirma tu cuenta"
        isOpenControl={isOpenModal}
        onClose={closeModal}>
            <div className="flex flex-col">
              <label htmlFor="confirmCode" className="text-white mb-1">Ingresa el código enviado al correo {formData.emailHide}</label>
              <input
                type="number"
                id="confirmCode"
                placeholder="xxxxxx"
                onChange={handleChange}
              />
            </div>
      </GenericModal>
    </form>

  );
}
