import React from 'react';

export default function Avatar({ imageUrl, name, email, showRing = false, showDot = false }) {
      const imageSource = imageUrl ? imageUrl : 'https://via.placeholder.com/150';

      return (
            <div className="flex items-center gap-x-2">
                  <div className="flex items-center gap-x-6">
                        <div className="relative">
                              <img
                                    className={`object-cover size-64 rounded-full  ${showRing ? 'ring ring-gray-300 dark:ring-gray-600' : ''}`}
                                    src={imageSource}
                                    alt=""
                              />

                              {showDot && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>}
                        </div>
                  </div>

                  <div>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>
                        <p className="text-base text-gray-500 dark:text-gray-400">{email}</p>
                  </div>
            </div>
      );
}
