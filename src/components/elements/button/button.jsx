import React from 'react';

export default function Button({ icon, buttonText, fullWidth = true, type = "button", color = "bg-blue-600 hover:bg-blue-500 focus:ring-blue-300 text-white", onClick }) {
      return (
            <button onClick={onClick} className={` ${fullWidth ? "w-full" : ""} flex justify-center items-center px-4 py-2 font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring  focus:ring-opacity-80 ${color}`} type={type}>
                  {icon && (
                        <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              {icon}
                        </svg>
                  )}
                  {buttonText && <span className="mx-1">{buttonText}</span>}

            </button>
      );
}


