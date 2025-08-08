import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`w-full text-xs flex items-center justify-between px-4 py-1 font-mono border-t ${isDark ? 'bg-black text-white border-[#2c2c2c]' : 'bg-gray-100 text-gray-900 border-[#2c2c2c]'}`}
    >
      <div className={`flex items-center gap-1 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
        <span
          className={`w-2 h-2 rounded-full inline-block ${
            isDark ? 'bg-green-400' : 'bg-green-600'
          }`}
        ></span>
        <span>Online</span>
      </div>
      <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>v1</span>
    </footer>
  );
};