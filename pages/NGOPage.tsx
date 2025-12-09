import React, { useState, useMemo } from 'react';

const NGOPage: React.FC = () => {
  // Estado para la calculadora
  const [shoppers, setShoppers] = useState<number>(100);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    message: ''
  });

  // Constantes de la calculadora
  const AVG_SPEND = 75; // Gasto medio mensual
  const AVG_COMMISSION_RATE = 0.04; // 4% Comisión media estimada
  
  const calculatedIncome = useMemo(() => {
    const totalSpend = shoppers * AVG_SPEND;
    const grossCommission = totalSpend * AVG_COMMISSION_RATE;
    const afterSkimlinks = grossCommission * 0.75; // Restamos 25% de Skimlinks (queda 75%)
    const ngoShare = afterSkimlinks * 0.70; // La ONG se lleva el 70% del resto
    
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

    // Construir el enlace mailto
    const recipient = "tom@lagentedetom.com";
    const subject = encodeURIComponent(`Interés ONG Heartbit: ${formData.org}`);
    const body = encodeURIComponent(
      `Hola Tom,\n\nSoy ${formData.name} de la organización "${formData.org}".\n\n${formData.message}\n\nMe gustaría recibir más información sobre cómo unirnos a Heartbit.`
    );

    // Abrir cliente de correo
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-20">
      {/* Hero Section ONG */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-block p-3 rounded-full bg-green-100 text-green-700 mb-6 animate-fade-in">
          <span className="font-display text-xl">Para Organizaciones sin Ánimo de Lucro</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-primary mb-6 text-shadow-pixel leading-none">
          Recauda fondos sin pedir donaciones.
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400">
          Heartbit permite a tus seguidores apoyarte económicamente a través de sus compras habituales. Sin coste extra para ellos. Sin gestión para ti.
        </p>

        <div className="relative max-w-xl mx-auto mb-16 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark text-left">
          <h3 className="font-display text-3xl mb-6 text-center text-gray-800 dark:text-gray-200">
            Contáctanos para participar
          </h3>
          <form 
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Tu Nombre
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                placeholder="Ej. María García"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Nombre de la Organización
              </label>
              <input 
                type="text" 
                name="org"
                required
                value={formData.org}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                placeholder="Ej. Fundación Esperanza"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Mensaje (Opcional)
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                placeholder="¿Tenéis alguna duda específica?"
              />
            </div>

            <button 
              type="submit" 
              className="mt-2 bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors active:scale-95 transform duration-150 flex items-center justify-center w-full"
            >
              <span className="material-icons mr-2">send</span>
              Enviar correo a Tom
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Esto abrirá tu cliente de correo predeterminado para enviar el mensaje a tom@lagentedetom.com
            </p>
          </form>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-10 bg-white/50 dark:bg-black/20 rounded-3xl p-8">
        <h2 className="font-display text-4xl text-center mb-12 text-text-light dark:text-text-dark">
          ¿Por qué usar Heartbit en tu ONG?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">money_off</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">Coste Cero</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ni tu organización ni tus donantes pagan nada. Las donaciones provienen de los presupuestos de marketing de las grandes tiendas.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">all_inclusive</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">Recurrencia</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No es una donación puntual. Cada vez que tus seguidores compren online, recibirás una ayuda. Un flujo constante de ingresos.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons text-3xl">sentiment_satisfied_alt</span>
            </div>
            <h3 className="font-display text-2xl mb-3 text-gray-800 dark:text-gray-200">Sin Fricción</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No tienes que pedir dinero constantemente. Solo pide a tu base social que instale la extensión una vez.
            </p>
          </div>
        </div>
      </section>

      {/* Explanation Section: Affiliate Marketing */}
      <section className="py-12 max-w-5xl mx-auto">
        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-xl">
          <div className="bg-primary p-6 text-center">
             <h2 className="font-display text-4xl text-white mb-2">
              ¿De dónde sale el dinero?
            </h2>
            <p className="text-white/90 text-lg">
              El secreto es el Marketing de Afiliación.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Las tiendas online (Amazon, Nike, Booking...) pagan comisiones a las webs que les envían clientes. 
              Normalmente ese dinero se lo quedan influencers o blogs. <br/>
              <strong>Heartbit captura esa comisión y te la entrega a ti.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Lines (Desktop only) */}
              <div className="hidden md:block absolute top-12 left-[30%] w-[40%] h-1 bg-gray-200 dark:bg-gray-700 -z-10"></div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark z-10">
                <span className="material-icons text-5xl text-gray-400 mb-4">shopping_bag</span>
                <h3 className="font-bold text-xl mb-2">1. La Compra</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tu seguidor compra unos zapatos por 50€. El precio es <strong>exactamente el mismo</strong> para él.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border border-border-light dark:border-border-dark z-10">
                <span className="material-icons text-5xl text-blue-500 mb-4">payments</span>
                <h3 className="font-bold text-xl mb-2">2. La Comisión</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  La tienda paga una comisión de marketing (ej. 5%) por referir la venta. Son 2.50€.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark p-6 rounded-lg border-2 border-primary z-10 shadow-lg transform md:-translate-y-2">
                <span className="material-icons text-5xl text-primary mb-4">favorite</span>
                <h3 className="font-bold text-xl mb-2 text-primary">3. La Donación</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Heartbit recoge esos 2.50€ y después de los gastos de gestión te transfiere el resto a tu cuenta de la ONG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora de Impacto */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-border-light dark:border-border-dark">
          <div className="p-8 md:p-10">
            <h2 className="font-display text-4xl text-center mb-8 text-text-light dark:text-text-dark">
              Calculadora de Impacto
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Estima cuánto podría recaudar tu ONG si tus seguidores utilizaran Heartbit en sus compras habituales.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Input */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="shoppers-range" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Personas comprando con Heartbit: <span className="text-primary text-2xl ml-2">{shoppers}</span>
                  </label>
                  <input
                    id="shoppers-range"
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={shoppers}
                    onChange={(e) => setShoppers(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>10</span>
                    <span>1,000</span>
                    <span>2,500</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/30 p-4 rounded-lg text-sm text-gray-500 space-y-2">
                  <div className="flex justify-between">
                    <span>Gasto medio mensual estimado:</span>
                    <span className="font-mono font-bold">75 €/persona</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comisión media tiendas:</span>
                    <span className="font-mono font-bold">~4%</span>
                  </div>
                </div>
              </div>

              {/* Resultado */}
              <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 border border-primary/20 shadow-lg text-center flex flex-col justify-center h-full">
                <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4">Ingresos estimados para tu ONG</h3>
                
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-display text-primary block mb-1">
                    {Math.floor(calculatedIncome.annual).toLocaleString('es-ES')} €
                  </span>
                  <span className="text-gray-500 text-sm">al año</span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                   <span className="text-2xl font-bold text-gray-800 dark:text-gray-200 block">
                    {Math.floor(calculatedIncome.monthly).toLocaleString('es-ES')} €
                  </span>
                  <span className="text-gray-500 text-xs">al mes</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-8 italic">
              * Cálculo basado en un gasto medio de 75€/mes por usuario y una comisión media del 4%. El 70% del beneficio neto (tras descontar el 25% de la red de afiliación) se transfiere directamente a la ONG.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Simple */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="font-display text-4xl text-center mb-10 text-text-light dark:text-text-dark">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">¿Tengo que hacer algo técnico?</h4>
            <p className="text-gray-600 dark:text-gray-400">Nada. Nosotros nos encargamos de toda la tecnología. Tú solo recibes los fondos.</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">¿Cómo recibo el dinero?</h4>
            <p className="text-gray-600 dark:text-gray-400">Acumulamos las donaciones generadas por tus seguidores y te hacemos una transferencia mensual o trimestral.</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
            <h4 className="font-bold text-lg mb-2">¿Mis seguidores pagan más por sus productos?</h4>
            <p className="text-gray-600 dark:text-gray-400">No. El precio es exactamente el mismo. La donación sale del margen de beneficio de la tienda (Amazon, Nike, etc.) como comisión de venta.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOPage;