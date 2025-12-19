
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const BrowserMockup: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="relative max-w-4xl mx-auto mt-16 animate-fade-in-up">
      <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-xl shadow-2xl border border-border-light dark:border-border-dark">
        <div className="flex items-center space-x-1.5 p-2 border-b border-gray-300 dark:border-gray-700">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        
        <div className="p-8 md:p-12 bg-card-light dark:bg-card-dark flex justify-center items-center rounded-b-lg min-h-[200px]">
          <div className="flex items-start space-x-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-md w-full transform transition-transform hover:scale-105">
            <img 
              alt="Pixel art heart icon" 
              className="h-10 w-10 flex-shrink-0" 
              src={IMAGES.ICON_HEART_PIXEL} 
            />
            <div className="flex-grow text-left">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 text-base">{t('landing.mockup.thanks')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {t('landing.mockup.donated')}
              </p>
            </div>
            <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
              <span className="material-icons text-base">close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
