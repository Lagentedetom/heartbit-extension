import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-10 mt-16 border-t border-border-light dark:border-border-dark relative">
      <div className="flex justify-center items-center mb-4">
        <img 
          alt="Heartbit Logo" 
          className="h-10 md:h-12 w-auto" 
          src={IMAGES.LOGO_HEART} 
        />
      </div>
      
      <div className="flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
        <Link to="/privacy" className="hover:text-primary transition-colors">Política de Privacidad</Link>
        <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
      </div>
      
      <div className="absolute bottom-0 right-4 md:right-16 transform translate-x-0 md:translate-x-1/4 -translate-y-2 hidden sm:block">
        <img 
          alt="Pixel art robot mascot peeking" 
          className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
          src={IMAGES.ROBOT_MASCOT} 
        />
      </div>
    </footer>
  );
};

export default Footer;