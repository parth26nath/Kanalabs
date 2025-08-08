import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import logo from '../../assets/logo.png';
import swapIcon from '../../assets/swap-icon.png';  
import tradeIcon from '../../assets/trade-icon.png';  
import perpsIcon from '../../assets/perps-icon.png';  
import operpsIcon from '../../assets/operps-icon.png';      
import referIcon from '../../assets/refer-icon.png';    
import learnIcon from '../../assets/learn-icon.png';  
import bellIcon from '../../assets/bell-icon.png';  
import settingsIcon from '../../assets/settings-icon.png'; 
import userIcon from '../../assets/user.png'; 

const navItems = [
  { label: 'Swap', path: '/', icon: swapIcon },
  { label: 'Trade', path: '/trade', icon: tradeIcon },
  { label: 'Perps', path: '/perps', icon: perpsIcon },
  { label: 'OPerps', path: '/operps', icon: operpsIcon },
  { label: 'Refer', path: '/refer', icon: referIcon },
  { label: 'Learn', path: '/learn', icon: learnIcon },
  { label: 'More', icon: null, dropdown: true },
];

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = React.useState(false);

  return (
    <header
      className={`px-6 py-4 flex items-center justify-between  ${
        isDark ? 'bg-black text-white border-dark-border' : 'bg-white text-black border-gray-200'
      }`}
    >
      {/* Left: Logo and Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Kana Labs Logo" className="h-6" />
        </div>
        {/* Navigation */}
        <nav className="flex gap-2 items-center text-sm">
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <div
                  key={index}
                  className="relative flex items-center gap-1 cursor-pointer hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMoreOpen((open) => !open)}
                  tabIndex={0}
                  onBlur={() => setIsMoreOpen(false)}
                >
                  <span>More</span>
                  <span>▼</span>
                  {isMoreOpen && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-40 rounded-lg shadow-lg z-30 ${
                        isDark ? 'bg-[#18181b] border border-dark-border' : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex flex-col py-2">
                        <a
                          href="#"
                          className={`px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-gray-800 transition-colors ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}
                        >
                          Documentation
                        </a>
                        <a
                          href="#"
                          className={`px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-gray-800 transition-colors ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}
                        >
                          Support
                        </a>
                        <a
                          href="#"
                          className={`px-4 py-2 text-sm hover:bg-cyan-50 dark:hover:bg-gray-800 transition-colors ${
                            isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}
                        >
                          Community
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            } else if (item.path) {
              return (
                <Link
                  key={item.path}
                  to={item.path as string}
                  className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-400 font-semibold'
                      : isDark
                      ? 'text-gray-300 hover:text-cyan-400'
                      : 'text-gray-700 hover:text-cyan-400'
                  }`}
                >
                  {item.icon && (
                    <img src={item.icon} alt={item.label} className="h-4 w-4" />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            } else {
              return null;
            }
          })}
        </nav>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2">
        <button
          style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
          className="bg-[#1a1a1a] text-cyan-400 border px-4 py-1.5 rounded-xl text-sm hover:bg-cyan-900 transition flex items-center gap-1"
        >
          <img src={userIcon} alt="Wallet Icon" className="h-4" />
          <span className="font-manrope font-bold">Connect wallet</span>
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
        <img src={bellIcon} alt="Notifications" className="h-6 w-6 cursor-pointer" />
        <img src={settingsIcon} alt="Settings" className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
};

export { Header };
export default Header;