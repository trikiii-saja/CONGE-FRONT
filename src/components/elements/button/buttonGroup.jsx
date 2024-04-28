import React from 'react';

export default function ButtonGroup({ buttons }) {
      return (
            <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
                  {buttons.map((button, index) => (
                        <button key={index} className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
                              {button.icon && (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                          {button.icon}
                                    </svg>
                              )}
                              {button.text && <span>{button.text}</span>}
                        </button>
                  ))}
            </div>
      );
}
