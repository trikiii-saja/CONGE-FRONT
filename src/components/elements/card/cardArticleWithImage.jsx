import React from 'react';

const CardArticleWithImage = ({ category, title, content, author, date, imageUrl, authorAvatar }) => {
      return (
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <img className="object-cover w-full h-64" src={imageUrl} alt="Article" />

                  <div className="p-6">
                        <div>
                              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                              <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{content}</p>
                        </div>

                        <div className="mt-4">
                              <div className="flex items-center">
                                    <div className="flex items-center">
                                          <img className="object-cover h-10 rounded-full" src={authorAvatar} alt="Avatar" />
                                          <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{author}</a>
                                    </div>
                                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{date}</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CardArticleWithImage;
