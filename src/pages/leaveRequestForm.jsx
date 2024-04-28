import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Importer axios
import Image from '../assets/plan.jpg';
import Button from '../components/elements/button/button';
import { useNavigate, useLocation } from 'react-router-dom';

function LeaveRequestForm() {
      const [startDate, setStartDate] = useState(null);
      const [endDate, setEndDate] = useState(null);
      const [reason, setReason] = useState('');
      const [error, setError] = useState('');
      const location = useLocation();
      const navigate = useNavigate();
      const userData = location.state.user;

      const handleStartDateChange = (date) => {
            setStartDate(date);
      };

      const handleEndDateChange = (date) => {
            setEndDate(date);
      };

      const handleReasonChange = (event) => {
            setReason(event.target.value);
      };

      const handleSubmit = async (event) => {
            event.preventDefault();

            try {
                  // Formater les dates en chaîne ISO
                  const formattedStartDate = startDate.toISOString().split('T')[0];
                  const formattedEndDate = endDate.toISOString().split('T')[0];
                  console.log({
                        user_id: userData.id,
                        start: formattedStartDate,
                        end: formattedEndDate,
                        reason: reason,
                        status: "pending" // Corriger la faute de frappe
                  })
                  // Envoyer les données du formulaire à l'API backend
                  const response = await axios.post('http://127.0.0.1:8000/api/v1/conges', {
                        user_id: userData.id,
                        start: formattedStartDate,
                        end: formattedEndDate,
                        reason: reason,
                        status: "pending" // Corriger la faute de frappe
                  });
                  console.log(response)
                  navigate("/home", { state: { user: userData } });
            } catch (error) {
                  // Gérer la réponse d'erreur
                  setError("Une erreur s'est produite lors de la soumission de la demande de congé. Veuillez réessayer plus tard.");
                  console.error('Une erreur s\'est produite lors de la soumission de la demande de congé :', error);
            }
      };

      return (
            <>
                  <div className="roboto">
                        <section className="h-screen">
                              <div className="container mx-auto h-full">
                                    <div className="flex h-full">
                                          <div className="w-6/12 sm:w-6/12 text-black">
                                                <div className="flex items-center min-h-screen px-5 md:pl-4 pt-5 md:pt-0 md:-mt-5">
                                                      <form onSubmit={handleSubmit} className="p-6">
                                                            <h3 className="mt-3 mb-1 text-xl font-medium text-gray-600 dark:text-gray-200">Demander un congé</h3>
                                                            {error && (
                                                                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                                        {error}
                                                                  </div>
                                                            )}
                                                            <div className="mb-4 mt-4">
                                                                  <div className="flex items-center justify-between mb-2">
                                                                        <label htmlFor="startDate" className="block text-sm text-gray-500 dark:text-gray-300">
                                                                              Date de début
                                                                        </label>
                                                                  </div>
                                                                  <DatePicker
                                                                        id="startDate"
                                                                        selected={startDate}
                                                                        onChange={handleStartDateChange}
                                                                        selectsStart
                                                                        startDate={startDate}
                                                                        endDate={endDate}
                                                                        dateFormat="yyyy/MM/dd"
                                                                        className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 py-2.5 rounded-lg text-gray-700  focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300 bg-white border border-gray-200 dark:border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 px-5"
                                                                  />
                                                            </div>
                                                            <div className="mb-4">
                                                                  <div className="flex items-center justify-between mb-2">
                                                                        <label htmlFor="endDate" className="block text-sm text-gray-500 dark:text-gray-300">
                                                                              Date de fin
                                                                        </label>
                                                                  </div>
                                                                  <DatePicker
                                                                        id="endDate"
                                                                        selected={endDate}
                                                                        onChange={handleEndDateChange}
                                                                        selectsEnd
                                                                        startDate={startDate}
                                                                        endDate={endDate}
                                                                        minDate={startDate}
                                                                        dateFormat="yyyy/MM/dd"
                                                                        className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 py-2.5 rounded-lg text-gray-700  focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300 bg-white border border-gray-200 dark:border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 px-5"
                                                                  />
                                                            </div>
                                                            <div className="mb-4">
                                                                  <div className="flex items-center justify-between mb-2">
                                                                        <label htmlFor="reason" className="block text-sm text-gray-500 dark:text-gray-300">
                                                                              Raison
                                                                        </label>
                                                                  </div>
                                                                  <textarea
                                                                        id="reason"
                                                                        value={reason}
                                                                        onChange={handleReasonChange}
                                                                        className="max-h-32 block w-full placeholder-gray-400/70 dark:placeholder-gray-500 py-2.5 rounded-lg text-gray-700  focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300 bg-white border border-gray-200 dark:border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 px-5"
                                                                        rows="4"
                                                                        placeholder="Entrez la raison du congé"
                                                                  ></textarea>
                                                            </div>

                                                            <Button buttonText="Soumettre" type="submit" fullWidth={false} color="bg-yellow-400 hover:bg-yellow-300 focus:ring-yellow-300 text-black" />
                                                      </form>
                                                </div>
                                          </div>
                                          <div className="w-6/12 sm:w-6/12">
                                                <div className="col-span-4 sm:col-span-4 px-0 hidden sm:block">
                                                      <img
                                                            src={Image}
                                                            alt="Image de connexion"
                                                            className="w-full h-screen object-cover xsideimage"
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>
            </>
      );
}

export default LeaveRequestForm;
