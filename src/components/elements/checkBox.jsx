import React from 'react';

export default function CheckBox({ label, checked, onChange }) {
      return (
            <div className="flex items-center gap-2">
                  <input
                        type="checkbox"
                        className="border border-gray-300 rounded-xl w-4 h-4 text-indigo-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        checked={checked}
                        onChange={onChange}
                  />
                  <span>{label}</span>
            </div>
      );
}
