import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Header: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="flex items-center">
        <Link 
          to="/ong" 
          className="hidden md:inline-block mr-6 font-display text-xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          ¿Eres una ONG?
        </Link>
        <a 
          href="#waitlist"
          className="hidden md:inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors"
        >
          Únete a la lista
        </a>
      </div>
    </header>
  );
};

export default Header;