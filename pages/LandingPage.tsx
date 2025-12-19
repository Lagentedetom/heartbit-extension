
import React from 'react';
import BrowserMockup from '../components/BrowserMockup';
import StepCard from '../components/StepCard';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  const STEPS = [
    { id: 1, title: t('landing.howItWorks.step1.title'), description: t('landing.howItWorks.step1.desc'), icon: "extension" },
    { id: 2, title: t('landing.howItWorks.step2.title'), description: t('landing.howItWorks.step2.desc'), icon: "shopping_cart" },
    { id: 3, title: t('landing.howItWorks.step3.title'), description: t('landing.howItWorks.step3.desc'), icon: "volunteer_activism" }
  ];

  return (
    <div className="space-y-24">
      <section className="text-center relative">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary mb-4 text-shadow-pixel leading-none">
          {t('landing.hero.title')}
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-text-light dark:text-text-dark mb-6">
          {t('landing.hero.subtitle')}
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 px-4">
          {t('landing.hero.description')}
        </p>
        
        <div className="relative max-w-lg mx-auto px-4 z-10 flex flex-col items-center gap-4">
          <a 
            href={`mailto:tom@lagentedetom.com?subject=${encodeURIComponent(t('landing.hero.title'))}`}
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors whitespace-nowrap active:scale-95 transform duration-150 flex items-center justify-center min-w-[200px]"
          >
            <span className="material-icons mr-2">mail</span>
            {t('landing.hero.cta')}
          </a>
          <p className="text-sm text-gray-500">
            {t('landing.hero.comingSoon')}
          </p>
        </div>

        <BrowserMockup />
      </section>

      <section className="py-8">
        <h2 className="font-display text-5xl text-center mb-16 text-text-light dark:text-text-dark">
          {t('landing.howItWorks.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {STEPS.map(step => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center p-10 bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 opacity-50"></div>
          <h2 className="font-display text-5xl mb-6 text-text-light dark:text-text-dark">
            {t('landing.transparency.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('landing.transparency.desc')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
