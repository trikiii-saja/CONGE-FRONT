import React from 'react';

const CardUser = ({ imageUrl, name, profession }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover w-full h-56" src={imageUrl} alt="avatar" />

      <div className="py-5 text-center">
        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{name}</a>
        <span className="text-sm text-gray-700 dark:text-gray-200">{profession}</span>
      </div>
    </div>
  );
};

export default CardUser;
