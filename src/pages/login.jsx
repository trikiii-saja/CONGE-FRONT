import React, { useReducer, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import InputText from '../components/elements/input/inputText';
import Button from '../components/elements/button/button';
import Image from '../assets/office.jpg';

function Login() {
      const navigate = useNavigate();
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      const initialState = {
            email: "",
            password: "",
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
                  type: "input",
                  field: e.target.name,
                  value: e.target.value
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);

            try {
                  const queryParams = {
                        role: 'client'
                  };
                  const queryBody = {
                        email: state.email,
                        password: state.password
                  };
                  console.log(queryBody);
                  const response = await axios.post(
                        'http://127.0.0.1:8000/api/v1/login',
                        queryBody,
                        { params: queryParams }
                  );

                  if (response.data.status === "success") {
                        if (response.data.data.verified === 0) {
                              navigate("/verification", { state: { type: 0, email: response.data.data.email } });
                        } else {
                              navigate("/home", { state: { user: response.data.data } });
                        }
                  } else {
                        setError(response.data.message);
                  }

            } catch (error) {
                  console.error('Une erreur s\'est produite lors de la connexion :', error);
            } finally {
                  setIsLoading(false);
            }
      };

      return (
            <div className="roboto content-center h-screen bg-cover bg-center h-500" style={{ backgroundImage: `url(${Image})` }}>
                  <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div className="px-6 py-4">
                              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Bienvenue de Retour</h3>
                              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Connexion</p>
                              <form className="xform ml-10" onSubmit={handleSubmit} style={{ width: '280px' }}>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                                    <div style={{ height: '10px' }}></div>
                                    <InputText
                                          type="email"
                                          error={false}
                                          disable={false}
                                          name="email"
                                          placeHolder="Email"
                                          onChange={handleChange}
                                          value={state.email}
                                    />
                                    <div style={{ height: "10px" }}></div>
                                    <InputText
                                          secure={true}
                                          error={false}
                                          disable={false}
                                          name="password"
                                          placeHolder="Mot de Passe"
                                          onChange={handleChange}
                                          value={state.password}
                                    />
                                    <div style={{ height: '10px' }}></div>
                                    <div className="flex items-center justify-between mt-4">
                                          <Link to="/forget-password" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Mot de Passe Oublié?</Link>
                                          <Button buttonText="Se Connecter" type="submit" fullWidth={false} />
                                    </div>
                                    <div style={{ height: '20px' }}></div>
                              </form>
                        </div>
                        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                              <span className="text-sm text-gray-600 dark:text-gray-200">Vous n'avez pas de compte ? </span>
                              <Link to="/signup" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">S'inscrire</Link>
                        </div>
                  </div>
            </div>
      );
}

export default Login;
