import React from 'react';

function TabButton({ text, active, onClick, icon }) {
      const activeClasses = active ? 'text-blue-600 border-blue-500' : 'text-gray-700 border-transparent';
      const defaultClasses = 'inline-flex items-center h-10 px-4 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none';

      return (
            <button className={`${defaultClasses} ${activeClasses}`} onClick={onClick}>
                  {icon && <span className="mx-1 text-sm sm:text-base">{icon}</span>}
                  <span className="mx-1 text-sm sm:text-base">{text}</span>
            </button>
      );
}

function TabLine({ tabs, activeTab, onTabChange }) {
      return (
            <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                  {tabs.map((tab, index) => (
                        <TabButton
                              key={index}
                              text={tab.text}
                              icon={tab.icon}
                              active={activeTab === index}
                              onClick={() => onTabChange(index)}
                        />
                  ))}
            </div>
      );
}

export default TabLine;
