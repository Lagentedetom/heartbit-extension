import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrowserMockup from '../components/BrowserMockup';
import StepCard from '../components/StepCard';
import { FeatureStep } from '../types';
import { IMAGES } from '../constants';

// --- CONFIGURACIÓN ---
// URL de Google Apps Script para guardar los emails en el Sheet.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2kPm1nT_2gfcdpYykwSeoiTzn1_UsQMlg3KdR18DkycKFHk21VE9NhhWPo5X3GX9r/exec"; 

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
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Usamos URLSearchParams para asegurar compatibilidad con Google Apps Script
      // y evitar errores de CORS/Red
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('type', 'user'); // Identificador para la hoja de cálculo

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: params,
        mode: 'no-cors',
        credentials: 'omit', // Importante: evita enviar cookies que bloquean la petición en algunos navegadores
        referrerPolicy: 'no-referrer'
      });

      // Asumimos éxito si no hubo error de red
      navigate('/success');
    } catch (error) {
      console.error("Error saving email:", error);
      alert("Hubo un error al guardar tu correo. Por favor intenta de nuevo.");
      setIsLoading(false);
    }
  };

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
        
        <div className="relative max-w-lg mx-auto px-4 z-10">
          <form 
            id="waitlist" 
            className="flex flex-col sm:flex-row gap-4 mb-4"
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              placeholder="tu@email.com" 
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow disabled:opacity-60"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className={`bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors whitespace-nowrap active:scale-95 transform duration-150 flex items-center justify-center min-w-[140px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Guardando...
                </span>
              ) : (
                "Únete a la lista"
              )}
            </button>
          </form>
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