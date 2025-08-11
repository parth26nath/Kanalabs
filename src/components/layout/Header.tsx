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

  // Determine if we are on the /perps route
  const isPerps = location.pathname === '/perps';

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

      {/* Perps-specific buttons */}
      {isPerps && (
        <div className="flex items-center gap-2 ml-auto">
          {/* VIP Button */}
          <button
            style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
            className="bg-[#1a1a1a] border px-3 py-1.5 rounded-xl text-sm transition flex items-center gap-2 min-w-[80px] hover:bg-[#23232b]"
          >
            {/* Star Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M10 2.5l2.09 4.24 4.68.68-3.39 3.3.8 4.66L10 13.27l-4.18 2.21.8-4.66-3.39-3.3 4.68-.68L10 2.5z" stroke="#8be3e2" strokeWidth="1.2" fill="none"/>
            </svg>
            <span className="font-manrope font-semibold text-[#8be3e2]">VIP</span>
            {/* Info Icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="ml-1">
              <circle cx="8" cy="8" r="7" stroke="#f5c97b" strokeWidth="1.2" fill="none"/>
              <rect x="7.25" y="7" width="1.5" height="4" rx="0.75" fill="#f5c97b"/>
              <rect x="7.25" y="4" width="1.5" height="1.5" rx="0.75" fill="#f5c97b"/>
            </svg>
          </button>
          {/* Win $20 Button */}
          <button
            style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
            className="bg-[#1a1a1a] border px-3 py-1.5 rounded-xl text-sm transition flex items-center gap-2 min-w-[100px] hover:bg-[#23232b]"
          >
            {/* Win Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" stroke="#8be3e2" strokeWidth="1.2" fill="none"/>
              <path d="M10 5v5l3 2" stroke="#8be3e2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-manrope font-semibold text-[#8be3e2]">Win $20</span>
          </button>
          {/* Deposit Button */}
          <button
            style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
            className="bg-[#1a1a1a] border px-3 py-1.5 rounded-xl text-sm transition flex items-center gap-2 min-w-[90px] hover:bg-[#23232b]"
          >
            {/* Deposit Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect x="3" y="5" width="14" height="10" rx="2" stroke="#8be3e2" strokeWidth="1.2" fill="none"/>
              <path d="M10 7v4m0 0l-2-2m2 2l2-2" stroke="#8be3e2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-manrope font-semibold text-[#8be3e2]">Deposit</span>
          </button>
          {/* Sign in Button */}
          <button
            style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
            className="bg-[#1a1a1a] border px-3 py-1.5 rounded-xl text-sm transition flex items-center gap-2 min-w-[90px] hover:bg-[#23232b]"
          >
            {/* Sign in Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="7" r="3" stroke="#8be3e2" strokeWidth="1.2" fill="none"/>
              <path d="M3 17c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#8be3e2" strokeWidth="1.2" fill="none"/>
            </svg>
            <span className="font-manrope font-semibold text-[#8be3e2]">Sign in</span>
          </button>
        </div>
      )}

      {/* Right: Buttons */}
      <div className="flex items-center gap-2">
        {!isPerps && (
          <button
            style={{ borderColor: '#2c2c2c', borderWidth: '2px' }}
            className="bg-[#1a1a1a] text-cyan-400 border px-4 py-1.5 rounded-xl text-sm hover:bg-cyan-900 transition flex items-center gap-1"
          >
            <img src={userIcon} alt="Wallet Icon" className="h-4" />
            <span className="font-manrope font-bold">Connect wallet</span>
          </button>
        )}
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
        {/* Notification Button */}
        <button
          style={{
            borderColor: '#2c2c2c',
            borderWidth: '2px',
          }}
          className="bg-[#1a1a1a] border px-2 py-1.5 rounded-xl text-sm transition flex items-center justify-center"
          aria-label="Notifications"
        >
          <img src={bellIcon} alt="Notifications" className="h-5 w-5 cursor-pointer" />
        </button>
        {/* Settings Button */}
        <button
          style={{
            borderColor: '#2c2c2c',
            borderWidth: '2px',
          }}
          className="bg-[#1a1a1a] border px-2 py-1.5 rounded-xl text-sm transition flex items-center justify-center"
          aria-label="Settings"
        >
          <img src={settingsIcon} alt="Settings" className="h-5 w-5 cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export { Header };
export default Header;