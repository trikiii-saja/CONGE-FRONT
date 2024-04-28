import React from 'react';

function CookieLine() {
      return (
            <section className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-5xl px-4 py-8 mx-auto md:flex md:items-center md:gap-x-6">
                        <div className="flex items-start md:items-center gap-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 shrink-0 dark:text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>

                              <p className="text-gray-700 dark:text-gray-200">
                                    We use cookies to enhance your user experience. By continuing to visit this site you agree to <a href="#" className="underline transition-colors duration-200 hover:text-blue-500 ">our use of cookies</a>.
                              </p>
                        </div>

                        <button className="items-center justify-center hidden text-gray-700 transition-colors duration-300 rounded-full md:flex dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                              </svg>
                        </button>
                  </div>
            </section>
      );
}

export default CookieLine;
