
import React from 'react';
import { Translations } from './types';

export const TRANSLATIONS: Record<'fr' | 'ar', Translations> = {
  fr: {
    headerTitle: "Aperçu des actifs",
    demoAccount: "Compte démo",
    switchDemo: "(basculer vers)",
    totalAssets: "Valorisation totale des actifs",
    dailyProfit: "Les gains d’aujourd’hui",
    freezeFunds: "geler les fonds",
    actions: {
      recharge: "recharger",
      withdraw: "retirer",
      transfer: "transfert",
      flash: "Flash",
    },
    myAccount: "Mon compte",
    assets: {
      currency: "Devise",
      deliveryContract: "contrat de livraison",
      perpetualContract: "Contrats perpétuels",
    },
    nav: {
      home: "Fig début",
      quotes: "Citations",
      delivery: "Livraison",
      durable: "Durable",
      assets: "actifs",
    },
  },
  ar: {
    headerTitle: "نظرة عامة على الأصول",
    demoAccount: "حساب تجريبي",
    switchDemo: "(التبديل إلى)",
    totalAssets: "إجمالي تقييم الأصول",
    dailyProfit: "أرباح اليوم",
    freezeFunds: "تجميد الأموال",
    actions: {
      recharge: "فوق حتى",
      withdraw: "ينسحب",
      transfer: "تحويل",
      flash: "تبادل فلاش",
    },
    myAccount: "حسابي",
    assets: {
      currency: "محفظة العملة",
      deliveryContract: "محفظة العقود الآجلة",
      perpetualContract: "محفظة العقود الدائمة",
    },
    nav: {
      home: "بيت",
      quotes: "يقتبس",
      delivery: "توصيل",
      durable: "مستمر",
      assets: "أصول",
    },
  },
};

// Custom SVG Icons to match screenshot exactly
export const Icons = {
  DemoSwitch: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10l5-5 5 5M7 14l5 5 5-5"/></svg>
  ),
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Recharge: () => (
    <div className="bg-[#2a2d32] p-2 rounded-lg mb-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 18V14"/></svg>
    </div>
  ),
  Withdraw: () => (
    <div className="bg-[#2a2d32] p-2 rounded-lg mb-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5l-5-5-5 5M12 2l5 5"/></svg>
    </div>
  ),
  Transfer: () => (
    <div className="bg-[#2a2d32] p-2 rounded-lg mb-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
    </div>
  ),
  Flash: () => (
    <div className="bg-[#2a2d32] p-2 rounded-lg mb-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    </div>
  ),
  Nav: {
    Home: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    Quotes: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20V16"/></svg>,
    Delivery: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>,
    Durable: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>,
    Assets: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  }
};
