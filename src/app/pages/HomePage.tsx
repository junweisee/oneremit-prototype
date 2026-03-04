import { useApp } from '../AppContext';
import { HeroSection } from '../components/HeroSection';
import { FeatureSections } from '../components/FeatureSections';
import { PromotionsSection } from '../components/PromotionsSection';
import { ExchangeNoticeSection } from '../components/ExchangeNoticeSection';

export function HomePage() {
  const { t, sendAmount, setSendAmount, receiveCurrencyCode, setReceiveCurrencyCode } = useApp();
  return (
    <>
      <HeroSection
        t={t}
        sendAmount={sendAmount}
        setSendAmount={setSendAmount}
        receiveCurrencyCode={receiveCurrencyCode}
        setReceiveCurrencyCode={setReceiveCurrencyCode}
      />
      <FeatureSections t={t} />
      <PromotionsSection t={t} />
      <ExchangeNoticeSection t={t} />
    </>
  );
}
