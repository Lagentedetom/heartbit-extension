import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-card-light dark:bg-card-dark p-8 md:p-12 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
        <h1 className="font-display text-5xl md:text-6xl text-primary mb-8 text-shadow-pixel">
          Aviso Legal
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              1. Titular del Sitio Web y la Extensión
            </h2>
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400 text-lg">
                <li><strong className="font-bold text-gray-800 dark:text-gray-200">Razón Social:</strong> La Gente de Tom</li>
                <li><strong className="font-bold text-gray-800 dark:text-gray-200">CIF:</strong> B65836116</li>
                <li><strong className="font-bold text-gray-800 dark:text-gray-200">Domicilio Social:</strong> Ignasi barraquer 10, 08195 Sant Cugat del Vallès</li>
                <li><strong className="font-bold text-gray-800 dark:text-gray-200">Email de contacto:</strong> tom@lagentedetom.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              2. Objeto
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              El sitio web y la extensión Heartbit tienen como objetivo facilitar a los usuarios una herramienta para generar donaciones a organizaciones sin ánimo de lucro a través de compras en comercios afiliados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              3. Propiedad Intelectual
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Todos los contenidos (código fuente, diseño gráfico, logotipos, textos y el personaje "Bit") son propiedad exclusiva del titular o de terceros que han autorizado su uso, estando protegidos por la normativa de Propiedad Intelectual e Industrial.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              4. Enlaces de Afiliados (Publicidad)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Este sitio web y su extensión participan en programas de afiliación (como Skimlinks). Esto significa que obtenemos una comisión por las compras realizadas a través de los enlaces promocionales. Este servicio no supone ningún coste adicional para el usuario.
            </p>
          </section>

           <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              5. Legislación
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;