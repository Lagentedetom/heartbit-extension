import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-card-light dark:bg-card-dark p-8 md:p-12 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
        <h1 className="font-display text-5xl md:text-6xl text-primary mb-8 text-shadow-pixel">
          Política de Privacidad
        </h1>
        
        <p className="text-gray-500 mb-8 italic">
          <strong>Última actualización:</strong> 9 de Diciembre de 2025
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          La extensión de navegador <strong>Heartbit</strong> ("el Servicio") es propiedad de y está operada por <strong>La gente de Tom</strong>.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              1. Recopilación de Datos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Heartbit está diseñada para proteger tu privacidad. <strong className="text-primary/80">NO recopilamos, almacenamos ni vendemos tu historial de navegación, tus datos personales ni tus búsquedas.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              La extensión funciona de manera local en tu dispositivo y solo se activa cuando detecta una URL perteneciente a uno de nuestros comercios asociados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              2. Cómo funciona la Afiliación
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Heartbit utiliza redes de marketing de afiliación (como Skimlinks) para generar donaciones. Cuando activas la extensión en una tienda:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Se añade un código de seguimiento anónimo (cookie) a la URL de la tienda.</li>
              <li>Este código permite a la tienda saber que Heartbit ha referido la visita.</li>
              <li>Si realizas una compra, la tienda nos paga una comisión.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              3. Datos del Usuario (Preferencias)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              La única información que guardamos se almacena <strong>localmente en tu navegador</strong> (Chrome Storage) y consiste en:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>La ONG que has seleccionado para donar.</li>
              <li>Tus preferencias de configuración (sonido, notificaciones).</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Estos datos nunca salen de tu ordenador ni se envían a nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              4. Terceros
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              El Servicio contiene enlaces a sitios web de terceros (tiendas online). No somos responsables de las prácticas de privacidad de dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">
              5. Contacto
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Si tienes preguntas sobre esta política, puedes contactarnos en: <em className="text-primary font-bold not-italic">hola@heart-bit.me</em>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;