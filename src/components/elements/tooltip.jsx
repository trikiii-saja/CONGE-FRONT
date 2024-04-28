import React from 'react';

function Tooltip({ text, position }) {
      const tooltipPosition = position === 'top' ? '-top-14' : '-bottom-12';

      return (
            <div className="relative inline-block">
                  <button className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                  </button>

                  <p className={`absolute w-48 px-5 py-3 text-center text-gray-600 truncate -translate-x-1/2 bg-white rounded-lg shadow-lg ${tooltipPosition} left-1/2 dark:shadow-none shadow-gray-200 dark:bg-gray-800 dark:text-white`}>
                        {text}
                  </p>
            </div>
      );
}

export default Tooltip;
