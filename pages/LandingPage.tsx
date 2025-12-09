import React from 'react';
import BrowserMockup from '../components/BrowserMockup';
import StepCard from '../components/StepCard';
import { FeatureStep } from '../types';

const STEPS: FeatureStep[] = [
  {
    id: 1,
    title: "Instala",
    description: "Añade la extensión gratuita de Heartbit a tu navegador. Es 100% segura.",
    icon: "extension"
  },
  {
    id: 2,
    title: "Navega",
    description: "Compra en tus tiendas favoritas como siempre lo haces.",
    icon: "shopping_cart"
  },
  {
    id: 3,
    title: "Ayuda",
    description: "La marca dona una parte. Tú recibes karma (y un aviso de Heartbit).",
    icon: "volunteer_activism"
  }
];

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center relative">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary mb-4 text-shadow-pixel leading-none">
          Convierte tus compras en ayuda.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-text-light dark:text-text-dark mb-6">
          Sin gastar un euro extra.
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 px-4">
          La extensión gratuita que dona un % de tus compras por internet a la ONG que tú elijas.
        </p>
        
        <div className="relative max-w-lg mx-auto px-4 z-10 flex flex-col items-center gap-4">
          <a 
            href="mailto:tom@lagentedetom.com?subject=Interés en Heartbit"
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors whitespace-nowrap active:scale-95 transform duration-150 flex items-center justify-center min-w-[200px]"
          >
            <span className="material-icons mr-2">mail</span>
            Contactar
          </a>
          <p className="text-sm text-gray-500">
            Próximamente disponible. Escríbenos para más info.
          </p>
        </div>

        <BrowserMockup />
      </section>

      {/* How it Works Section */}
      <section className="py-8">
        <h2 className="font-display text-5xl text-center mb-16 text-text-light dark:text-text-dark">
          ¿Cómo funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {STEPS.map(step => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center p-10 bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 opacity-50"></div>
          <h2 className="font-display text-5xl mb-6 text-text-light dark:text-text-dark">
            Transparencia
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Heartbit funciona gracias al marketing de afiliación. Las marcas nos pagan una comisión por referir la venta y nosotros donamos los beneficios. Así de simple.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;