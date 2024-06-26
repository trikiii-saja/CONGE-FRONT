import React from 'react';

const AlertLine = ({ message, status }) => {
      let bgColor, titleColor, iconPath;

      switch (status) {
            case 'success':
                  bgColor = 'bg-emerald-500';

                  iconPath = (
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  );
                  break;
            case 'info':
                  bgColor = 'bg-blue-500';

                  iconPath = (
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                  );
                  break;
            case 'warning':
                  bgColor = 'bg-yellow-400';

                  iconPath = (
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                  );
                  break;
            case 'error':
                  bgColor = 'bg-red-500';

                  iconPath = (
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                  );
                  break;
            default:
                  bgColor = 'bg-gray-800';
                  iconPath = '';
      }

      return (
            <div className={`w-full text-white ${bgColor}`}>
                  <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                        <div className="flex">
                              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                                    {iconPath}
                              </svg>
                              <p className={`mx-3`}>{message.charAt(0).toUpperCase() + message.slice(1)}</p>
                        </div>
                        <button className="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                        </button>
                  </div>
            </div>
      );
};

export default AlertLine;
