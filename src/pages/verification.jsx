import React, { useState } from 'react';
import Image from '../assets/office.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/elements/button/button';
import ButtonAddons from '../components/elements/buttonAddons';

function Verification() {
      const navigate = useNavigate();
      const location = useLocation();
      const [code, setCode] = useState("");
      const [error, setError] = useState("");
      const [resendDisabled, setResendDisabled] = useState(false);
      const [resendCounter, setResendCounter] = useState(30);

      const handleChange = (e) => {
            setCode(e.target.value);
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const queryParams = {
                        email: location.state.email,
                        verification_code: code
                  };
                  const response = await axios.post(
                        'http://127.0.0.1:8000/api/v1/verify-code',
                        null,
                        { params: queryParams }
                  );
                  console.log(response)
                  if (response.data.status === "success") {
                        if (location.state.type === 0) {
                              navigate("/login");
                        } else if (location.state.type === 1) {
                              navigate("/reset-password", { state: { email: location.state.email, verificationCode: code } });
                        }
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  setError('Code de vérification invalide');
                  console.error('Une erreur s\'est produite lors de la vérification :', error);
            }
      };

      const handleResend = async () => {
            let link = 'http://127.0.0.1:8000/api/v1/send-verification-email';
            if (location.state.type === 1) {
                  link = 'http://127.0.0.1:8000/api/v1/send-reset-password-email';
            }
            setResendDisabled(true);
            try {
                  const queryParams = {
                        email: location.state.email,
                        type: location.state.type
                  };
                  const response = await axios.post(
                        link,
                        null,
                        { params: queryParams }
                  );
                  if (response.data.status === "success") {
                        setResendCounter(30); // Réinitialiser le compte à rebours
                        const intervalId = setInterval(() => {
                              setResendCounter(prevCounter => {
                                    if (prevCounter === 1) {
                                          clearInterval(intervalId);
                                          setResendDisabled(false);
                                    }
                                    return prevCounter - 1;
                              });
                        }, 1000); // Démarrer le compte à rebours
                  } else {
                        console.error(response.data.message);
                  }
            } catch (error) {
                  console.error('Une erreur s\'est produite lors de la réémission du code :', error);
            }
      };

      return (
            <div className="roboto content-center h-screen bg-cover bg-center h-500" style={{ backgroundImage: `url(${Image})` }}>
                  <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="px-6 py-4">
                              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Vérification</h3>
                              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Nous avons envoyé un code de vérification à votre adresse e-mail</p>
                              <form className="xform ml-10" onSubmit={handleSubmit} style={{ width: '280px' }}>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                                    <div style={{ height: '10px' }}></div>
                                    <ButtonAddons label="Code" nptname="code" npttype="text" onChange={handleChange} value={code} btnname={resendDisabled ? `Renvoyer (${resendCounter})` : "Renvoyer"} btntype="button" onClick={handleResend} disabled={resendDisabled} />
                                    <div style={{ height: '10px' }}></div>
                                    <Button buttonText="Vérifier" type="submit" />
                                    <div style={{ height: '20px' }}></div>
                              </form>
                        </div>
                  </div>
            </div>
      );
}

export default Verification;
