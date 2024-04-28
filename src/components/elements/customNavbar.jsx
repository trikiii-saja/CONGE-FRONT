import React, { useState } from 'react';
import Button from './button/button';
import { useNavigate, Link } from 'react-router-dom';

function CustomNavbar() {
      const [isOpen, setIsOpen] = React.useState(false);

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };
      const navigate = useNavigate();
      const logOut = () => {
            navigate("/");
      };

      return (
            <>
                  <nav className="bg-gray-950 shadow dark:bg-gray-800 roboto">
                        <div className="container px-6 py-4 mx-auto lg:flex lg:items-center lg:justify-between">
                              <div className="flex items-center justify-between">
                                    <a href="#">
                                          <h1 className="text-lg text-white font-bold">Congito</h1>
                                    </a>
                                    <div className="flex lg:hidden">
                                          <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                                {!isOpen ? (
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                                      </svg>
                                                ) : (
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                      </svg>
                                                )}
                                          </button>
                                    </div>
                              </div>

                              <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'block' : 'hidden'}`}>
                                    <div className="flex flex-col text-slate-300 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                          {/* Add your navigation links here */}
                                    </div>

                                    <Button buttonText="logout" color="bg-red-500 hover:bg-red-400 focus:ring-red-300 text-white" onClick={logOut} />
                              </div>
                        </div>
                  </nav>
            </>
      );
}

export default CustomNavbar;
