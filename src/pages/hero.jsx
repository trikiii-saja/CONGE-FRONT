import React, { useState } from 'react';
import NavbarSocial from '../components/elements/navbar/navbarSocial';
import Image from '../assets/boss.jpg';

function Hero() {
      const leaveIcon = (
            <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
            >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
      );

      return (
            <div className="roboto bg-white dark:bg-gray-900">
                  <div
                        className="h-screen bg-cover bg-center h-500"
                        style={{ backgroundImage: `url(${Image})` }}
                  >
                        <NavbarSocial />
                        <div className="h-full container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                              <div className="w-full lg:w-1/2 bg-white bg-opacity-80 rounded-lg p-8">
                                    <div className="lg:max-w-lg">
                                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Demandez un congé facilement.</h1>
                                          <p className="mt-4 text-gray-600 dark:text-gray-300">Nous proposons un processus transparent pour demander et gérer vos congés, garantissant une expérience sans stress tant pour les employés que pour les employeurs.</p>
                                          <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                                      {leaveIcon}
                                                      <span className="mx-3">Demander un congé en ligne</span>
                                                </div>
                                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                                      {leaveIcon}
                                                      <span className="mx-3">Suivre le statut du congé</span>
                                                </div>
                                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                                      {leaveIcon}
                                                      <span className="mx-3">Gérer l'historique des congés</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Hero;
