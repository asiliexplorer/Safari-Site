"use client"
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../_contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, themes, changeTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeChange = (themeKey) => {
    changeTheme(themeKey);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 border border-gray-300 hover:border-[#FF7D5A]"
        aria-label="Change color theme"
        aria-expanded={isOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <span className="hidden sm:inline text-sm font-medium">Color Theme</span>
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 min-w-[280px]">
          <div className="p-3 bg-gray-50 border-b border-gray-200">
            <h3 className="text-sm font-bold text-gray-700">Choose Color Theme</h3>
            <p className="text-xs text-gray-500 mt-1">Easier on your eyes</p>
          </div>
          <div className="max-h-[400px] overflow-y-auto">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key)}
                className={`w-full px-4 py-3 flex items-center justify-between gap-3 transition-all duration-200 ${theme === key
                  ? 'bg-[#FF7D5A]/10 border-l-4 border-[#FF7D5A]'
                  : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: themeData.colors.primary }}
                    ></div>
                    <div
                      className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: themeData.colors.accent }}
                    ></div>
                    <div
                      className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: themeData.colors.secondary }}
                    ></div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-800">{themeData.name}</div>
                    {theme === key && (
                      <div className="text-xs text-[#FF7D5A] font-medium mt-0.5">Active</div>
                    )}
                  </div>
                </div>
                {theme === key && (
                  <svg className="w-5 h-5 text-[#FF7D5A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

