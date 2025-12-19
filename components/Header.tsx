
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="flex justify-between items-center mb-8 md:mb-16">
      <div 
        className="flex items-center cursor-pointer hover:opacity-90 transition-opacity" 
        onClick={() => navigate('/')}
      >
        <img 
          alt="Heartbit Logo" 
          className="h-14 md:h-16 w-auto" 
          src={IMAGES.LOGO_HEART} 
        />
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Language Switcher */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md p-1 font-display text-lg">
          <button 
            onClick={() => setLanguage('es')}
            className={`px-3 py-1 rounded transition-colors ${language === 'es' ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary'}`}
          >
            ES
          </button>
          <span className="text-gray-300 dark:text-gray-600 px-1">|</span>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded transition-colors ${language === 'en' ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary'}`}
          >
            EN
          </button>
        </div>

        <Link 
          to="/ong" 
          className="hidden md:inline-block font-display text-xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          {t('header.areYouNgo')}
        </Link>
        <a 
          href="mailto:tom@lagentedetom.com"
          className="hidden md:inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors"
        >
          {t('common.contact')}
        </a>
      </div>
    </header>
  );
};

export default Header;
