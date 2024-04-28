import React, { useReducer, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Image from '../assets/office.jpg';
import InputText from '../components/elements/input/inputText';
import Button from '../components/elements/button/button';

function ResetPassword() {
      const navigate = useNavigate();
      const location = useLocation();
      const [error, setError] = useState("");
      const initialState = {
            password: "",
            repassword: ""
      };

      const reducer = (state, action) => {
            if (action.type === "input") {
                  return { ...state, [action.field]: action.value };
            }
            return state;
      };

      const [state, dispatch] = useReducer(reducer, initialState);

      const handleChange = (e) => {
            dispatch({
                  type: 'input',
                  field: e.target.name,
                  value: e.target.value,
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            if (state.password !== state.repassword) {
                  setError("Les mots de passe ne correspondent pas.");
                  return;
            }

            try {
                  const queryParams = {
                        email: location.state.email,
                        verification_code: location.state.verificationCode,
                        password: state.password,
                  };
                  const response = await axios.post(
                        'http://127.0.0.1:8000/api/v1/reset-password',
                        null,
                        { params: queryParams }
                  );

                  if (response.data.status === "success") {
                        navigate("/success");
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Une erreur s\'est produite lors de la réinitialisation du mot de passe :', error);
                  setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
            }
      };

      return (
            <div className="roboto content-center h-screen bg-cover bg-center h-500" style={{ backgroundImage: `url(${Image})` }}>
                  <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="px-6 py-4">
                              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Réinitialiser le mot de passe</h3>
                              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Soyez à l'aise</p>
                              <form className="xform ml-10" onSubmit={handleSubmit} style={{ width: '280px' }}>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                                    <div style={{ height: '10px' }}></div>

                                    <InputText
                                          secure={true}
                                          error={false}
                                          disable={false}
                                          name="password"
                                          placeHolder="Nouveau mot de passe"
                                          onChange={handleChange}
                                          value={state.password}
                                    />
                                    <div style={{ height: "10px" }}></div>
                                    <InputText
                                          secure={true}
                                          error={false}
                                          disable={false}
                                          name="repassword"
                                          placeHolder="Confirmer le mot de passe"
                                          onChange={handleChange}
                                          value={state.repassword}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <Button buttonText="Vérifier" type="submit" />
                                    <div style={{ height: '20px' }}></div>
                              </form>
                        </div>
                  </div>
            </div>
      );
}

export default ResetPassword;
