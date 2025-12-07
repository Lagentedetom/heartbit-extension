import React from 'react';
import { IMAGES } from '../constants';
import { useNavigate } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="max-w-2xl mx-auto bg-card-light dark:bg-card-dark p-8 sm:p-12 rounded-xl shadow-lg border border-border-light dark:border-border-dark relative">
          
          <button 
            onClick={() => navigate('/')}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <span className="material-icons">close</span>
          </button>

          <img 
            alt="Pixel art heart icon" 
            className="h-20 w-20 mx-auto mb-6 animate-bounce" 
            src={IMAGES.ICON_HEART_PIXEL} 
          />
          
          <h1 className="font-display text-5xl md:text-7xl text-primary mb-6 text-shadow-pixel">
            ¡Gracias!
          </h1>
          
          <p className="text-2xl md:text-3xl font-display text-gray-700 dark:text-gray-300 mb-4">
            Ya estás en la lista de espera.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Te avisaremos por email tan pronto como puedas instalar Heartbit y empezar a convertir tus compras en ayuda, sin gastar un euro extra.
          </p>

          <div className="mt-8">
             <button 
               onClick={() => navigate('/')}
               className="text-primary hover:text-red-700 font-bold underline decoration-2 underline-offset-4"
             >
               Volver al inicio
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;