import svgPaths from "./svg-437bv9yw2l";
import imgLogo from "https://placehold.co/600x400082a90a04b893d1c8d3ceafaf5997a05068aab8b.png";
import imgFlagImage from "https://placehold.co/600x4009875e3b3d86e7e562cb0bc2c432eba5885fc02be.png";
import imgIntroImage from "https://placehold.co/600x4004cb73885bd48ef33b1edb44ae1c6367218a5b158.png";
import imgFlagImage1 from "https://placehold.co/600x40027be2d2426c96da581cf5ef337cb07ac72675fe3.png";
import imgFlagImage2 from "https://placehold.co/600x400da19d3b20c36de9cd3c0b60eb2dd732efebf6d02.png";
import imgInformationImage from "https://placehold.co/600x40004380d1b347adc25f69945579d27f639b0420163.png";
import imgServiceImage from "https://placehold.co/600x4000d83fb4f23b59f70b8858869bd332423e0fcb449.png";
import imgNetworkImage from "https://placehold.co/600x4002d3b4a387814ed04a5cd04e744224fa132144cf1.png";
import imgRemittanceImage from "https://placehold.co/600x400623f7fe5dd5c02da184e093f65eba1f5ca97d3ac.png";
import imgPromotionImage from "https://placehold.co/600x400d3016ba6bb8aa3edcc77914f5be684ef2912dd32.png";
import imgPromotionImage1 from "https://placehold.co/600x400191d832370083d8d5169228fe5d13a52173bba78.png";
import imgPromotionImage2 from "https://placehold.co/600x400d2cabf5d2339b3084dae91160ce10494692d7190.png";
import imgFlagIcon from "https://placehold.co/600x4009b49587ddc7f5ff1a253a50d93a5735408b7988d.png";

function NavigationItem() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Navigation Item"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        How to use
      </p>
      <div
        className="overflow-clip relative shrink-0 size-[16px]"
        data-name="chevron-down"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-1/2 top-1/2 w-[10px]"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[10px] relative w-[6px]" data-name="Vector">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2118a470}
                  fill="var(--fill-0, #8CA2A4)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center relative shrink-0"
      data-name="Navigation"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        Send money
      </p>
      <NavigationItem />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        About us
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        Help
      </p>
    </div>
  );
}

function LanguageSelector() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Language Selector"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/English"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        EN
      </p>
    </div>
  );
}

function SignUpButton() {
  return (
    <div
      className="bg-[#3a9944] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0"
      data-name="Sign up Button"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white">
        Sign up
      </p>
    </div>
  );
}

function UserMenu() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center relative shrink-0"
      data-name="User Menu"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
        Log in
      </p>
      <SignUpButton />
    </div>
  );
}

function UserActions() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0"
      data-name="User Actions"
    >
      <LanguageSelector />
      <UserMenu />
    </div>
  );
}

function IntroSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#231a16] w-full whitespace-pre-wrap"
      data-name="Intro section"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[32px] w-[327px]">
        <span className="leading-[normal]">{`Send money to your `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#3a9944] leading-[normal] text-[transparent] to-[#d5ffda] to-[72.115%]">
          loved ones
        </span>
        <span className="leading-[normal]">, instantly</span>
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-[426px]">
        Fast, secure, and affordable international money transfers. Send to
        Korea, Philippines, Vietnam and more with the best exchange rates.
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative"
      data-name="Main content"
    >
      <IntroSection />
      <div
        className="aspect-[853/469] relative rounded-[16px] shrink-0 w-full"
        data-name="Intro image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgIntroImage}
        />
      </div>
    </div>
  );
}

function ExchangeRateHeader() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="Exchange rate header"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        Rate
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#231a16] text-[0px] text-[16px]">
        <span className="leading-[normal]">1 Y</span>
        <span className="leading-[normal]">EN</span>
        <span className="leading-[normal]">{` = `}</span>
        <span className="leading-[normal] text-[#ff9d1a]">9.4745 KRW</span>
      </p>
    </div>
  );
}

function SendAmountCurrency() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Send amount currency"
    >
      <div
        className="overflow-clip relative shrink-0 size-[32px]"
        data-name="Language/Japanese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[22px] left-1/2 top-1/2 w-[30px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[149.71%] left-0 max-w-none top-[-24.85%] w-full"
              src={imgFlagImage1}
            />
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        YEN
      </p>
    </div>
  );
}

function SendAmountDetails() {
  return (
    <div
      className="relative rounded-[8px] shrink-0 w-full"
      data-name="Send amount details"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px]">
            8,000
          </p>
          <SendAmountCurrency />
        </div>
      </div>
    </div>
  );
}

function SendAmountSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Send amount section"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#647576] text-[14px] w-full whitespace-pre-wrap">
        You send
      </p>
      <SendAmountDetails />
    </div>
  );
}

function ReceiveAmountCurrency() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Receive amount currency"
    >
      <div
        className="overflow-clip relative shrink-0 size-[32px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[22px] left-1/2 top-1/2 w-[30px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage2}
            />
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        KRW
      </p>
      <div
        className="overflow-clip relative shrink-0 size-[16px]"
        data-name="chevron-down"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-1/2 top-1/2 w-[10px]"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[10px] relative w-[6px]" data-name="Vector">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2118a470}
                  fill="var(--fill-0, #8CA2A4)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiveAmountDetails() {
  return (
    <div
      className="relative rounded-[8px] shrink-0 w-full"
      data-name="Receive amount details"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px]">
            71,750
          </p>
          <ReceiveAmountCurrency />
        </div>
      </div>
    </div>
  );
}

function ReceiveAmountSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Receive amount section"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#647576] text-[14px] w-full whitespace-pre-wrap">
        Recipient gets
      </p>
      <ReceiveAmountDetails />
    </div>
  );
}

function ExchangeRateDetails() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
      data-name="Exchange rate details"
    >
      <SendAmountSection />
      <ReceiveAmountSection />
    </div>
  );
}

function TotalFeeSection() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Total fee section"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        Total included fee
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px]">
        100 Yen
      </p>
    </div>
  );
}

function ExchangeRateSection() {
  return (
    <div
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_2px_17.9px_0px_rgba(0,0,0,0.17)]"
      data-name="Exchange rate section"
    >
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <ExchangeRateHeader />
        <ExchangeRateDetails />
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 558 1"
                >
                  <line
                    id="Line 7"
                    stroke="var(--stroke-0, #E5E5E5)"
                    x2="558"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <TotalFeeSection />
        <div
          className="bg-[#3a9944] relative rounded-[10px] shrink-0 w-full"
          data-name="Buttons"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
              <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white">
                Send money now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Header section"
      style={{
        backgroundImage:
          "linear-gradient(245.312deg, rgb(232, 255, 234) 6.4263%, rgb(255, 255, 255) 93.198%)",
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[100px] items-start p-[64px] relative w-full">
          <MainContent />
          <ExchangeRateSection />
        </div>
      </div>
    </div>
  );
}

function InformationText() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Information text"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full">
        Fund transfer operators according to the Fund Payment Act
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[16px] w-full">
        The customer deposits requested by the transfer shall be deposited in
        accordance with the From overseas until the recipient actually receives
        the money It is secured and protected by the Legal Affairs Bureau
      </p>
    </div>
  );
}

function InformationContent() {
  return (
    <div
      className="content-stretch flex gap-[100px] items-center relative shrink-0 w-full"
      data-name="Information content"
    >
      <InformationText />
      <div
        className="h-[369px] relative rounded-[16px] shrink-0 w-[575px]"
        data-name="Information image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgInformationImage}
        />
      </div>
    </div>
  );
}

function ServiceText() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Service text"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full">
        Easy money transfer service using PC and smart phone
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[16px] w-full">
        For convenient money transfer service, PC, smartphone, Various
        remittance such as FAX, telephone application, branch visit reception We
        provide the service
      </p>
    </div>
  );
}

function ServiceSection() {
  return (
    <div
      className="content-stretch flex gap-[100px] items-center relative shrink-0 w-full"
      data-name="Service section"
    >
      <div
        className="h-[369px] relative rounded-[16px] shrink-0 w-[575px]"
        data-name="Service image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgServiceImage}
        />
      </div>
      <ServiceText />
    </div>
  );
}

function NetworkText() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Network text"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full">
        Nepal, Vietnam and other overseas remittance networks
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[16px] w-full">
        Your family back home can receive your remittance quickly and by
        transferring it to the recipient’s bank account or by collecting it in
        cash at a bank counter (available in some countries).
      </p>
    </div>
  );
}

function NetworkSection() {
  return (
    <div
      className="content-stretch flex gap-[100px] items-center relative shrink-0 w-full"
      data-name="Network section"
    >
      <NetworkText />
      <div
        className="h-[369px] relative rounded-[16px] shrink-0 w-[575px]"
        data-name="Network image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgNetworkImage}
        />
      </div>
    </div>
  );
}

function RemittanceText() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Remittance text"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full">
        View and issue remittance via online and customer center
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[16px] w-full">
        We provide tax evidences for remittances and transactions to members as
        well as non-members.
      </p>
    </div>
  );
}

function RemittanceSection() {
  return (
    <div
      className="content-stretch flex gap-[100px] items-center relative shrink-0 w-full"
      data-name="Remittance section"
    >
      <div
        className="h-[369px] relative rounded-[16px] shrink-0 w-[575px]"
        data-name="Remittance image"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
          src={imgRemittanceImage}
        />
      </div>
      <RemittanceText />
    </div>
  );
}

function InformationSection() {
  return (
    <div
      className="relative rounded-[16px] shrink-0 w-full"
      data-name="Information section"
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center px-[64px] relative w-full">
          <InformationContent />
          <ServiceSection />
          <NetworkSection />
          <RemittanceSection />
        </div>
      </div>
    </div>
  );
}

function PreviousPromotion() {
  return (
    <div
      className="bg-white opacity-20 relative rounded-[99px] size-[48px]"
      data-name="Previous promotion"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div
              className="overflow-clip relative size-[24px]"
              data-name="chevron-right"
            >
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[10px]"
                data-name="Vector"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10 18"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p2c69fa80}
                    fill="var(--fill-0, #647576)"
                    fillRule="evenodd"
                    id="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[99px]"
      />
    </div>
  );
}

function NextPromotion() {
  return (
    <div
      className="bg-white relative rounded-[99px] shrink-0 size-[48px]"
      data-name="Next promotion"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div
              className="overflow-clip relative size-[24px]"
              data-name="chevron-right"
            >
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[10px]"
                data-name="Vector"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10 18"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p2c69fa80}
                    fill="var(--fill-0, #647576)"
                    fillRule="evenodd"
                    id="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[99px]"
      />
    </div>
  );
}

function PromotionsNavigation() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center relative shrink-0"
      data-name="Promotions navigation"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <PreviousPromotion />
        </div>
      </div>
      <NextPromotion />
    </div>
  );
}

function PromotionsHeader() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Promotions header"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        Promotions
      </p>
      <PromotionsNavigation />
    </div>
  );
}

function PromotionImage() {
  return (
    <div
      className="h-[201px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full"
      data-name="Promotion image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full"
        src={imgPromotionImage}
      />
    </div>
  );
}

function PromotionText() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap"
      data-name="Promotion text"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Send Your First Transfer For ¥500 Bonus!
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        21/1/26
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        New customers receive ¥500 cashback on their first international money
        transfer of ¥50,000 or more
      </p>
    </div>
  );
}

function ReadMoreLink() {
  return (
    <div
      className="content-stretch flex gap-[9px] items-center relative shrink-0"
      data-name="Read more link"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
        Read more
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div
            className="overflow-clip relative size-[16px]"
            data-name="chevron-right"
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-1/2 top-1/2 w-[6px]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pd3f2000}
                  fill="var(--fill-0, #3A9944)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromotionDetails() {
  return (
    <div
      className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full"
      data-name="Promotion details"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]"
      />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <PromotionText />
        <ReadMoreLink />
      </div>
    </div>
  );
}

function PromotionCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative rounded-[16px]"
      data-name="Promotion card"
    >
      <PromotionImage />
      <PromotionDetails />
    </div>
  );
}

function PromotionImage1() {
  return (
    <div
      className="h-[201px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full"
      data-name="Promotion image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full"
        src={imgPromotionImage1}
      />
    </div>
  );
}

function PromotionText1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap"
      data-name="Promotion text"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Zero Transfer Fees This Month
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        21/1/26
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        Send money to your family back home with zero transfer fees. Limited
        time offer for all destinations.
      </p>
    </div>
  );
}

function ReadMoreLink1() {
  return (
    <div
      className="content-stretch flex gap-[9px] items-center relative shrink-0"
      data-name="Read more link"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
        Read more
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div
            className="overflow-clip relative size-[16px]"
            data-name="chevron-right"
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-1/2 top-1/2 w-[6px]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pd3f2000}
                  fill="var(--fill-0, #3A9944)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromotionDetails1() {
  return (
    <div
      className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full"
      data-name="Promotion details"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]"
      />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <PromotionText1 />
        <ReadMoreLink1 />
      </div>
    </div>
  );
}

function PromotionCard1() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative rounded-[16px]"
      data-name="Promotion card"
    >
      <PromotionImage1 />
      <PromotionDetails1 />
    </div>
  );
}

function PromotionImage2() {
  return (
    <div
      className="h-[201px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full"
      data-name="Promotion image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full"
        src={imgPromotionImage2}
      />
    </div>
  );
}

function PromotionText2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap"
      data-name="Promotion text"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Invite Friends, Earn ¥1,000 Each
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        21/1/26
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px] w-full">
        Share One Remittance with friends and family. When they make their first
        transfer, you both get ¥1,000 bonus
      </p>
    </div>
  );
}

function ReadMoreLink2() {
  return (
    <div
      className="content-stretch flex gap-[9px] items-center relative shrink-0"
      data-name="Read more link"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
        Read more
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div
            className="overflow-clip relative size-[16px]"
            data-name="chevron-right"
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-1/2 top-1/2 w-[6px]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pd3f2000}
                  fill="var(--fill-0, #3A9944)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromotionDetails2() {
  return (
    <div
      className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full"
      data-name="Promotion details"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]"
      />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
        <PromotionText2 />
        <ReadMoreLink2 />
      </div>
    </div>
  );
}

function PromotionCard2() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative rounded-[16px]"
      data-name="Promotion card"
    >
      <PromotionImage2 />
      <PromotionDetails2 />
    </div>
  );
}

function PromotionContent() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full"
      data-name="Promotion content"
    >
      <PromotionCard />
      <PromotionCard1 />
      <PromotionCard2 />
    </div>
  );
}

function PromotionsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Promotions section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center px-[64px] relative w-full">
          <PromotionsHeader />
          <PromotionContent />
          <div
            className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[10px] shrink-0"
            data-name="Buttons"
          >
            <div
              aria-hidden="true"
              className="absolute border-2 border-[#3a9944] border-solid inset-0 pointer-events-none rounded-[10px]"
            />
            <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
              View all
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExchangeRateDetails1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Exchange rate details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px]">
        Exchange Rate Information
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        2025-12-12 10:30
      </p>
    </div>
  );
}

function ExchangeRateInfo() {
  return (
    <div
      className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Exchange rate info"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <ExchangeRateDetails1 />
      </div>
    </div>
  );
}

function ExchangeRateDivider() {
  return (
    <div
      className="bg-[#e5e5e5] h-px shrink-0 w-full"
      data-name="Exchange rate divider"
    />
  );
}

function Cell() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage2}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell />
      <Cell1 />
    </div>
  );
}

function Cell2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/English"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell3() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Cell4() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage2}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell5() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Cell6() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/English"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-[278px]"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Cell8() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Chinese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Icon"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagIcon}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell9() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Cell10() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage2}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell11() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Cell12() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/English"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell13() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell12 />
      <Cell13 />
    </div>
  );
}

function Cell14() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Chinese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Icon"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagIcon}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell15() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-end relative shrink-0 w-[278px]"
      data-name="Container"
    >
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function ExchangeRateColumn() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Exchange rate column"
    >
      <Container />
      <Container5 />
    </div>
  );
}

function Scrollbar() {
  return (
    <div
      className="absolute h-[208px] left-[623px] rounded-br-[8px] top-0 w-[17px]"
      data-name="Scrollbar"
    >
      <div
        className="-translate-x-1/2 absolute left-1/2 size-[7px] top-[6px]"
        data-name="Arrow"
      >
        <div className="absolute inset-[14.29%_0_28.57%_0]" data-name="Arrow">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 4"
          >
            <path
              d="M7 4H0L3.5 0L7 4Z"
              fill="var(--fill-0, #505050)"
              id="Arrow"
            />
          </svg>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bottom-[6px] left-1/2 size-[7px]"
        data-name="Arrow"
      >
        <div className="absolute inset-[28.57%_0_14.29%_0]" data-name="Arrow">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 4"
          >
            <path
              d={svgPaths.p2bd0fa40}
              fill="var(--fill-0, #505050)"
              id="Arrow"
            />
          </svg>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#c1c1c1] content-stretch flex flex-col h-[73px] items-start left-1/2 rounded-[4px] top-[16px] w-[8px]"
        data-name="Thumb"
      >
        <div
          className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function ExchangeRateList() {
  return (
    <div
      className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Exchange rate list"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <ExchangeRateColumn />
        <Scrollbar />
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px]"
      data-name="Footer content"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <ExchangeRateInfo />
      <ExchangeRateDivider />
      <ExchangeRateList />
    </div>
  );
}

function NoticeDetails() {
  return (
    <div
      className="content-stretch flex font-['Noto_Sans_KR:Medium',sans-serif] font-medium items-center justify-between leading-[normal] relative shrink-0 w-full"
      data-name="Notice details"
    >
      <p className="relative shrink-0 text-[#3f4e50] text-[16px]">Notice</p>
      <p className="relative shrink-0 text-[#3a9944] text-[14px]">View all</p>
    </div>
  );
}

function NoticeHeader() {
  return (
    <div
      className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Notice header"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <NoticeDetails />
      </div>
    </div>
  );
}

function NoticeDivider() {
  return (
    <div
      className="bg-[#e5e5e5] h-px shrink-0 w-full"
      data-name="Notice divider"
    />
  );
}

function NoticeItem() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Important Notice Regarding Remittance Services to Korea
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Regarding Lawson ATM deposit service system malfunction
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem2() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Important Notice Regarding Remittance Services to Korea
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem3() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Regarding Lawson ATM deposit service system malfunction
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeList() {
  return (
    <div
      className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Notice list"
    >
      <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[24px] items-start leading-[1.5] p-[24px] relative text-[14px] w-full">
        <NoticeItem />
        <NoticeItem1 />
        <NoticeItem2 />
        <NoticeItem3 />
      </div>
    </div>
  );
}

function NoticeSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px] self-stretch"
      data-name="Notice section"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <NoticeHeader />
      <NoticeDivider />
      <NoticeList />
    </div>
  );
}

function ExchangeRateNoticeSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Exchange rate + Notice section"
    >
      <div className="content-stretch flex gap-[32px] items-start px-[64px] relative w-full">
        <FooterContent />
        <NoticeSection />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px] w-[95px]"
      data-name="Container"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">
        Quick links
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">
        About us
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Usage guide
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Fees and limits
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Send money
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px]"
      data-name="Container"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">
        Legal
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">
        Privacy
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">{`Terms of Service `}</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        AML/CFT Policy
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Caution on fraud
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Policy on anti-social forces
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px] w-[95px]"
      data-name="Container"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">
        Support
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Notice
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">
        FAQ
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">
        Contact us
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="h-[88px] relative shrink-0 w-[233px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[100.62%] left-[-13.37%] max-w-none top-[-0.31%] w-[126.74%]"
            src={imgLogo}
          />
        </div>
      </div>
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[80px] items-start left-0 top-[81px] w-[1440px]"
      data-name="Main container"
    >
      <HeaderSection />
      <InformationSection />
      <PromotionsSection />
      <ExchangeRateNoticeSection />
      <div
        className="bg-[#f8fafb] content-stretch flex flex-col gap-[48px] items-center px-[64px] py-[48px] relative shrink-0 w-[1440px]"
        data-name="Footer content"
      >
        <Container10 />
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1312 1"
                >
                  <line
                    id="Line 6"
                    stroke="var(--stroke-0, #E5E5E5)"
                    x2="1312"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#647576] text-[12px] text-center w-full whitespace-pre-wrap">{`Copyright ⓒ 2025 C&B Inc. All rights reserved.`}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage">
      <div
        className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[64px] py-[8px] top-0 w-[1440px]"
        data-name="Navbar"
      >
        <div className="h-[50px] relative shrink-0 w-[131px]" data-name="Logo">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[100.62%] left-[-13.37%] max-w-none top-[-0.31%] w-[126.74%]"
              src={imgLogo}
            />
          </div>
        </div>
        <Navigation />
        <UserActions />
      </div>
      <MainContainer />
    </div>
  );
}
