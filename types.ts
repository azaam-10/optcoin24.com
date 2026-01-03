
export type Language = 'fr' | 'ar';

export interface Translations {
  headerTitle: string;
  demoAccount: string;
  switchDemo: string;
  totalAssets: string;
  dailyProfit: string;
  freezeFunds: string;
  actions: {
    recharge: string;
    withdraw: string;
    transfer: string;
    flash: string;
  };
  myAccount: string;
  assets: {
    currency: string;
    deliveryContract: string;
    perpetualContract: string;
  };
  nav: {
    home: string;
    quotes: string;
    delivery: string;
    durable: string;
    assets: string;
  };
}
