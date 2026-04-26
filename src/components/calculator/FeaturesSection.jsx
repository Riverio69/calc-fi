import React from 'react';
import { motion } from 'framer-motion';

export const FEATURES_BY_PROJECT = {
  mobile: [
    { id: 'auth', label: 'Kirjautuminen / käyttäjätilit', price: 1500 },
    { id: 'social_login', label: 'Sosiaalinen kirjautuminen (Google, Apple)', price: 1000 },
    { id: 'payment', label: 'Maksuintegraatio', price: 2500 },
    { id: 'push', label: 'Push-ilmoitukset', price: 1500 },
    { id: 'chat', label: 'Chat / viestintä', price: 3000 },
    { id: 'geo', label: 'Sijainti / kartat', price: 1800 },
    { id: 'offline', label: 'Offline-tila', price: 3000 },
    { id: 'admin', label: 'Hallintapaneeli', price: 4000 },
    { id: 'api', label: 'API-integraatiot', price: 1000 },
    { id: 'publish', label: 'Julkaisu sovelluskaupoissa', price: 800 },
  ],
  web: [
    { id: 'pages', label: 'Lisäsivut', price: 200 },
    { id: 'animations', label: 'Animaatiot / interaktiot', price: 1000 },
    { id: 'multilang', label: 'Monikielisyys', price: 2000 },
    { id: 'seo', label: 'SEO-optimointi', price: 1500 },
    { id: 'crm', label: 'CRM-integraatio', price: 1500 },
    { id: 'forms', label: 'Lomakkeet / kyselyt', price: 1000 },
  ],
  ecommerce: [
    { id: 'payment', label: 'Maksujärjestelmä', price: 2500 },
    { id: 'delivery', label: 'Toimitus / logistiikka', price: 2000 },
    { id: 'cabinet', label: 'Käyttäjän tilin alue', price: 2500 },
    { id: 'filters', label: 'Suodattimet ja haku', price: 2000 },
    { id: 'erp', label: 'ERP / varastointegraatio', price: 3500 },
    { id: 'multilang', label: 'Monikielisyys / monivaluutta', price: 2000 },
    { id: 'subscriptions', label: 'Tilaukset (toistuva laskutus)', price: 3000 },
    { id: 'reviews', label: 'Arvostelut ja arviot', price: 1000 },
    { id: 'recommendations', label: 'Tuotesuositukset', price: 2000 },
  ],
  platform: [
    { id: 'roles', label: 'Rekisteröinti + käyttäjäroolit', price: 3000 },
    { id: 'payments', label: 'Maksut käyttäjien välillä', price: 4000 },
    { id: 'commission', label: 'Alustakomissio', price: 1500 },
    { id: 'chat', label: 'Chat / viestintä', price: 3000 },
    { id: 'reviews', label: 'Arvostelut ja arviot', price: 1500 },
    { id: 'search', label: 'Haku ja suodattimet', price: 2500 },
    { id: 'admin', label: 'Hallintapaneeli', price: 5000 },
    { id: 'moderation', label: 'Sisällön moderointi', price: 2500 },
    { id: 'notifications', label: 'Ilmoitukset (sähköposti / push)', price: 2500 },
  ],
  saas: [
    { id: 'subscriptions', label: 'Tilausjärjestelmä', price: 3000 },
    { id: 'plans', label: 'Hinnoittelusuunnitelmat', price: 1500 },
    { id: 'teams', label: 'Tiimililit', price: 3000 },
    { id: 'api', label: 'Julkinen API asiakkaille', price: 5000 },
    { id: 'integrations', label: 'Integraatiot (CRM, Slack, jne.)', price: 1500 },
    { id: 'dashboards', label: 'Koontinäytöt / analytiikka', price: 4000 },
    { id: 'security', label: 'Tietoturva (2FA, roolit)', price: 4000 },
    { id: 'architecture', label: 'Skaalautuva arkkitehtuuri', price: 5000 },
    { id: 'monitoring', label: 'Seuranta / lokit', price: 1500 },
  ],
};

export default function FeaturesSection({ projectType, selected, onToggle }) {
  const features = projectType ? FEATURES_BY_PROJECT[projectType.id] || [] : [];

  if (!projectType) {
    return (
      <div className="rounded-2xl bg-black border border-[#2a2a2a] p-6 md:p-8">
        <h3 className="text-[#a3e635] font-mono text-xs tracking-[0.2em] uppercase mb-4">
          02 — Lisäosat
        </h3>
        <p className="text-[#555] text-sm">Valitse projektityyppi nähdäksesi saatavilla olevat lisäosat.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-black border border-[#2a2a2a] p-6 md:p-8">
      <h3 className="text-[#a3e635] font-mono text-xs tracking-[0.2em] uppercase mb-6">
        02 — Lisäosat
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => {
          const isActive = selected.some(f => f.id === feature.id);
          return (
            <motion.button
              key={feature.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => onToggle(feature)}
              className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200 border text-left ${
                isActive
                  ? 'bg-[#a3e635]/10 border-[#a3e635]'
                  : 'bg-[#111] border-[#2a2a2a] hover:border-[#a3e635]/40'
              }`}
            >
              <span className="text-sm font-medium text-white">{feature.label}</span>
              <span className={`text-xs font-mono ml-3 shrink-0 ${isActive ? 'text-[#a3e635]' : 'text-[#555]'}`}>
                +€{feature.price.toLocaleString()}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}