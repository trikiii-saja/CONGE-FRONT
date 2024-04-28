import React from 'react';

export default function AvatarGroup({ imageUrls }) {
      return (
            <div className="flex items-center">
                  {imageUrls.map((imageUrl, index) => (
                        <img
                              key={index}
                              className="object-cover w-12 h-12 -mx-2 rounded-full ring ring-white dark:ring-gray-900"
                              src={imageUrl}
                              alt=""
                        />
                  ))}
            </div>
      );
}