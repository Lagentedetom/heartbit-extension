
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const NGOPage: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Estado para la calculadora
  const [shoppers, setShoppers] = useState<number>(100);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    message: ''
  });

  // Constantes de la calculadora
  const AVG_SPEND = 75; 
  const AVG_COMMISSION_RATE = 0.04;
  
  const calculatedIncome = useMemo(() => {
    const totalSpend = shoppers * AVG_SPEND;
    const grossCommission = totalSpend * AVG_COMMISSION_RATE;
    const afterSkimlinks = grossCommission * 0.75; 
    const ngoShare = afterSkimlinks * 0.70; 
    
    return {
      monthly: ngoShare,
      annual: ngoShare * 12
    };
  }, [shoppers]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.org) return;

    const recipient = "tom@lagentedetom.com";
    const subject = encodeURIComponent(`${t('ngo.form.subject')}: ${formData.org}`);
    const bodyText = language === 'es' 
      ? `Hola Tom,\n\nSoy ${formData.name} de la organización "${formData.org}".\n\n${formData.message}\n\nMe gustaría recibir más información sobre cómo unirnos a Heartbit.`
      : `Hello Tom,\n\nI am ${formData.name} from the organization "${formData.org}".\n\n${formData.message}\n\nI would like to receive more information about how to join Heartbit.`;

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const formatCurrency = (val: number) => {
    return Math.floor(val).toLocaleString(language === 'es' ? 'es-ES' : 'en-US');
  };

  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-block p-3 rounded-full bg-green-100 text-green-700 mb-6 animate-fade-in">
          <span className="font-display text-xl">{t('ngo.hero.badge')}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-6 text-shadow-pixel leading-none">
          {t('ngo.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400">
          {t('ngo.hero.desc')}
        </p>

        <div className="relative max-w-xl mx-auto mb-16 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark text-left">
          <h3 className="font-display text-3xl mb-6 text-center text-gray-800 dark:text-gray-200">
            {t('ngo.form.title')}
          </h3>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                {t('ngo.form.name')}
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none transition-shadow"
                placeholder={t('ngo.form.placeholderName')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                {t('ngo.form.org')}
              </label>
              <input 
                type="text" 
                name="org"
                required
                value={formData.org}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none transition-shadow"
                placeholder={t('ngo.form.placeholderOrg')}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                {t('ngo.form.message')}
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"
                placeholder={t('ngo.form.placeholderMsg')}
              />
            </div>

            <button 
              type="submit" 
              className="mt-2 bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors active:scale-95 transform duration-150 flex items-center justify-center w-full"
            >
              <span className="material-icons mr-2">send</span>
              {t('common.sendEmail')}
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              {t('common.mailtoInstruction')}
            </p>
          </form>
        </div>
      </section>

      <section className="py-10 bg-white/50 dark:bg-black/20 rounded-3xl p-8">
        <h2 className="font-display text-4xl text-center mb-12 text-text-light dark:text-text-dark">
          {t('ngo.benefits.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">money_off</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">{t('ngo.benefits.item1.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.benefits.item1.desc')}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">all_inclusive</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">{t('ngo.benefits.item2.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.benefits.item2.desc')}</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">sentiment_satisfied_alt</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">{t('ngo.benefits.item3.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.benefits.item3.desc')}</p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto">
        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-xl">
          <div className="bg-primary p-6 text-center text-white">
            <h2 className="font-display text-4xl mb-2">{t('ngo.source.title')}</h2>
            <p className="text-white/90 text-lg">{t('ngo.source.subtitle')}</p>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              {t('ngo.source.mainDesc')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-1 bg-gray-200 dark:bg-gray-700 -z-10"></div>
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark z-10">
                <span className="material-icons text-5xl text-gray-400 mb-4">shopping_bag</span>
                <h3 className="font-bold text-xl mb-2">{t('ngo.source.step1.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('ngo.source.step1.desc')}</p>
              </div>
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark z-10">
                <span className="material-icons text-5xl text-blue-500 mb-4">payments</span>
                <h3 className="font-bold text-xl mb-2">{t('ngo.source.step2.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('ngo.source.step2.desc')}</p>
              </div>
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border-2 border-primary z-10 shadow-lg transform md:-translate-y-2">
                <span className="material-icons text-5xl text-primary mb-4">favorite</span>
                <h3 className="font-bold text-xl mb-2 text-primary">{t('ngo.source.step3.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('ngo.source.step3.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-border-light dark:border-border-dark p-8 md:p-10">
          <h2 className="font-display text-4xl text-center mb-8 text-text-light dark:text-text-dark">{t('ngo.calculator.title')}</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">{t('ngo.calculator.desc')}</p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('ngo.calculator.peopleLabel')} <span className="text-primary text-2xl ml-2">{shoppers}</span>
                </label>
                <input
                  type="range" min="10" max="5000" step="10" value={shoppers}
                  onChange={(e) => setShoppers(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div className="bg-white dark:bg-black/30 p-4 rounded-lg text-sm text-gray-500 space-y-2">
                <div className="flex justify-between"><span>{t('ngo.calculator.avgSpend')}</span><span className="font-mono font-bold">€75 / person</span></div>
                <div className="flex justify-between"><span>{t('ngo.calculator.avgComm')}</span><span className="font-mono font-bold">~4%</span></div>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-primary/20 shadow-lg text-center flex flex-col justify-center h-full">
              <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">{t('ngo.calculator.incomeLabel')}</h3>
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-display text-primary block mb-1">€{formatCurrency(calculatedIncome.annual)}</span>
                <span className="text-gray-500 text-sm">{t('ngo.calculator.perYear')}</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 block">€{formatCurrency(calculatedIncome.monthly)}</span>
                <span className="text-gray-500 text-xs">{t('ngo.calculator.perMonth')}</span>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8 italic">{t('ngo.calculator.disclaimer')}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="font-display text-4xl text-center mb-10 text-text-light dark:text-text-dark">{t('ngo.faq.title')}</h2>
        <div className="space-y-6">
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">{t('ngo.faq.q1')}</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.faq.a1')}</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">{t('ngo.faq.q2')}</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.faq.a2')}</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">{t('ngo.faq.q3')}</h4>
            <p className="text-gray-600 dark:text-gray-400">{t('ngo.faq.a3')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOPage;
