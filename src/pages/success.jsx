import React from 'react';
import Image from '../assets/boss.jpg';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../components/elements/buttonLink';
import axios from 'axios';

function Success() {
      const navigate = useNavigate();

      const goToLogin = () => {
            navigate("/login");
      };

      return (
            <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
                  <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                              <h2 className="text-3xl font-bold text-gray-800 mb-4">Réinitialisation du mot de passe réussie</h2>
                              <ButtonLink name="Se connecter" onClick={goToLogin} type="button" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400" />
                        </div>
                  </div>
            </div>
      );
}

export default Success;
