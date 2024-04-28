import React, { useReducer, useState } from 'react';
import Image from '../assets/office.jpg';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import InputText from '../components/elements/input/inputText';
import Button from '../components/elements/button/button';

function Signup() {
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const initialState = {
            fullname: '',
            email: '',
            password: '',
            phonenumber: '',
            confirmPassword: '',
      };

      const reducer = (state, action) => {
            if (action.type === 'input') {
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

            setIsLoading(true);
            setError('');

            try {
                  const response = await axios.post('http://127.0.0.1:8000/api/v1/users', {
                        name: state.fullname,
                        email: state.email,
                        password: state.password,
                        phone_number: state.phonenumber,
                        job_code: state.jobcode,
                  });

                  if (response.data.status === 'success') {
                        // Assuming you have access to 'navigate' to redirect the user
                        navigate('/verification', { state: { type: 0, email: response.data.data.email } });
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during signup:', error);
                  setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer plus tard.');
            } finally {
                  setIsLoading(false);
            }
      };

      return (
            <div className="roboto content-center h-screen bg-cover bg-center h-500" style={{ backgroundImage: `url(${Image})` }}>
                  <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="px-6 py-4">
                              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenue</h3>
                              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Créer un compte</p>
                              <form className="xform ml-10" onSubmit={handleSubmit} style={{ width: '280px' }}>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          name="fullname"
                                          placeHolder="Nom complet"
                                          onChange={handleChange}
                                          value={state.username}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          name="jobcode"
                                          placeHolder="Code du travail"
                                          onChange={handleChange}
                                          value={state.username}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          type="email"
                                          name="email"
                                          placeHolder="Email"
                                          onChange={handleChange}
                                          value={state.email}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          name="phonenumber"
                                          placeHolder="Numéro de téléphone"
                                          onChange={handleChange}
                                          value={state.phonenumber}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          secure={true}
                                          name="password"
                                          placeHolder="Mot de passe"
                                          onChange={handleChange}
                                          value={state.password}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <div className="flex items-center justify-between mt-4">
                                          <Button buttonText="S'inscrire" type="submit" />
                                    </div>
                                    <div style={{ height: '20px' }}></div>
                              </form>
                        </div>
                        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                              <span className="text-sm text-gray-600 dark:text-gray-200">Vous n'avez pas de compte ? </span>
                              <Link to="/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">S'inscrire</Link>
                        </div>
                  </div>
            </div>
      );
}

export default Signup;
