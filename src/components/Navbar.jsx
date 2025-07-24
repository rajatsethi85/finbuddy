import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContextInstance'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState('landing');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
    useEffect(() => {
    console.log('Context updated:', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 668);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const toggleDarkMode = () => {
    console.log(isAuthenticated);
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
    alert(`Language changed to ${lang}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const showSection = (section) => {
    setCurrentNavigation(section);
    alert(`Navigating to ${section}`);
  };

  const redirect = (path) => {
    navigate(path); // Adjust the path as needed
  };

  return (
    <nav className="gradient-bg shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => showSection('landing')}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center bounce">
              <span className="text-2xl">💰</span>
            </div>
            <h1 className="text-2xl font-bold text-white" style={{ margin: '10px' }}>Finbuddy</h1>
          </div>

          {/* Main Navigation */}
          <div
            id="mainNavigation"
            className={`md:flex items-center space-x-8 ${currentNavigation === 'main' ? 'flex' : 'hidden'
              }`}
          >
            {/* Customer Navigation */}
            <div id="customerNav" className="flex items-center space-x-8">
              <button
                className="nav-item text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                onClick={() => showSection('women')}
              >
                <span className="mr-2">👩</span>Women
              </button>
              <button
                className="nav-item text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                onClick={() => showSection('learn')}
              >
                <span className="mr-2">📚</span>Learn
              </button>
              <button
                className="nav-item text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                onClick={() => showSection('chatbot')}
              >
                <span className="mr-2">🤖</span>FinBot
              </button>
              {isAuthenticated && (<button
                className="nav-item active text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                onClick={() => showSection('transactions')}
              >
                <span className="mr-2">💳</span>Transactions
              </button>)}


              {isAuthenticated && (<button
                className="nav-item text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
                onClick={() => showSection('children')}
              >
                <span className="mr-2">👶</span>Children
              </button>)}
            </div>
          </div>

          {/* Landing Navigation */}
          <div
            id="landingNavigation"
            className={`md:flex items-center space-x-8 ${currentNavigation === 'landing' ? 'flex' : 'hidden'
              }`}
          >
            {/* Language Selector */}
            <div className="relative">
              <button
                id="languageButton"
                className="nav-item text-white font-medium px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 flex items-center"
                onClick={toggleLanguageDropdown}
              >
                <span className="mr-2">🌐</span>
                <span id="currentLanguage">{language}</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isLanguageDropdownOpen && (
                <div
                  id="languageDropdown"
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                >
                  <button
                    onClick={() => changeLanguage('EN')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg"
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => changeLanguage('HI')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    🇮🇳 हिंदी (Hindi)
                  </button>
                  <button
                    onClick={() => changeLanguage('TA')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    🇮🇳 தமிழ் (Tamil)
                  </button>
                  <button
                    onClick={() => changeLanguage('TE')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    🇮🇳 తెలుగు (Telugu)
                  </button>
                  <button
                    onClick={() => changeLanguage('BN')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    🇮🇳 বাংলা (Bengali)
                  </button>
                  <button
                    onClick={() => changeLanguage('MR')}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg"
                  >
                    🇮🇳 मराठी (Marathi)
                  </button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              id="darkModeToggle"
              className="nav-item text-white font-medium px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20"
              onClick={toggleDarkMode}
            >
              <span id="darkModeIcon">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>

            {/* Login and Sign Up Buttons */}
            {!isAuthenticated && (
              <div>
                <button
                  className="bg-white text-purple-800 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ margin: '10px' }}
                  onClick={() => redirect('/login')}
                >
                  Login
                </button>
                <button
                  className="bg-yellow-400 text-purple-800 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                  style={{ margin: '10px' }}
                  onClick={() =>redirect('/signup')}
                >
                  Sign Up
                </button>
              </div>)}
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <div>
              <button
                className="text-white hover:text-yellow-300"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobileMenu" className="pb-4">
            <button
              className="nav-item block w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2"
              onClick={() => showSection('transactions')}
            >
              <span className="mr-2">💳</span>Transactions
            </button>
            <button
              className="nav-item block w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2"
              onClick={() => showSection('women')}
            >
              <span className="mr-2">👩</span>Women
            </button>
            <button
              className="nav-item block w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2"
              onClick={() => showSection('learn')}
            >
              <span className="mr-2">📚</span>Learn
            </button>
            <button
              className="nav-item block w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2"
              onClick={() => showSection('children')}
            >
              <span className="mr-2">👶</span>Children
            </button>
            <button
              className="nav-item block w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2"
              onClick={() => showSection('chatbot')}
            >
              <span className="mr-2">🤖</span>FinBot
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;