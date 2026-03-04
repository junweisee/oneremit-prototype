import svgPaths from "./svg-nvg9eh288p";
import imgLogo from "https://placehold.co/600x400";
import imgFlagImage from "https://placehold.co/600x400";
import imgLogo1 from "https://placehold.co/600x400";
import imgHeaderImage from "https://placehold.co/600x400";
import imgPartnerBankLogo from "https://placehold.co/600x400";
import imgPartnerBankLogo1 from "https://placehold.co/600x400";
import imgPartnerBankLogo2 from "https://placehold.co/600x400";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-oxasz";

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

function MissionContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="Mission Container"
    >
      <p className="font-['Noto_Sans_KR:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px]">{`Mission `}</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        To pursue new forms of overseas remittance
      </p>
    </div>
  );
}

function VisionContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
      data-name="Vision Container"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px]">
        Vision
      </p>
      <ul className="block font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#647576] text-[14px] whitespace-nowrap whitespace-pre-wrap">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[1.5]">
            To provide overseas remittance and global payment systems that evoke
            emotion
          </span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[1.5]">
            Offer dynamic solutions to diverse needs
          </span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[1.5]">
            Deliver faster, simpler, and safer services
          </span>
        </li>
      </ul>
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-h-px min-w-px relative"
      data-name="Header Text Container"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#231a16] text-[24px] w-[min-content] whitespace-pre-wrap">{`C&B Inc. has been a steadfast presence in Tokyo for more than 7 years, providing secure and regulated money transfer services `}</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] text-[14px] w-[min-content] whitespace-pre-wrap">{`Since our establishment in May 2017, we've prioritized transparency, integrity, and customer satisfaction. We offer reliable and efficient remittance solutions. Our commitment to cutting-edge technology ensures seamless transactions. Join C&B One Remit as we empower partners with a trusted network for streamlined cross-border financial services.`}</p>
      <MissionContainer />
      <VisionContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative"
      data-name="Header Container"
    >
      <HeaderTextContainer />
      <div className="flex flex-row items-center self-stretch">
        <div
          className="aspect-[650/432] h-full relative rounded-[16px] shrink-0"
          data-name="Header Image"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
            src={imgHeaderImage}
          />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div
      className="bg-gradient-to-r from-white relative shrink-0 to-[#fff8ef] w-full"
      data-name="Header Section"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[64px] relative w-full">
          <HeaderContainer />
        </div>
      </div>
    </div>
  );
}

function JourneyDateContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Journey Date Container"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        Sep
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        2017
      </p>
    </div>
  );
}

function JourneyDetails() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Journey Details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Foundation
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px] w-full">
        Opening our first international branch in Seoul, South Korea, to serve
        the growing Korean community and expand our reach across East Asia
      </p>
    </div>
  );
}

function JourneyItem() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full"
      data-name="Journey Item"
    >
      <JourneyDateContainer />
      <JourneyDetails />
    </div>
  );
}

function JourneyDateContainer1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Journey Date Container"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        Sep
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        2017
      </p>
    </div>
  );
}

function JourneyDetails1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Journey Details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Seoul Branch Opening
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px] w-full">
        Opening our first international branch in Seoul, South Korea, to serve
        the growing Korean community and expand our reach across East Asia
      </p>
    </div>
  );
}

function JourneyItem1() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full"
      data-name="Journey Item"
    >
      <JourneyDateContainer1 />
      <JourneyDetails1 />
    </div>
  );
}

function JourneyDateContainer2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Journey Date Container"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        Aug
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        2017
      </p>
    </div>
  );
}

function JourneyDetails2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Journey Details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Regional Expansion
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px] w-full">
        Surpassed ¥5 billion in total transfers and served over 50,000
        customers. Received 4.8/5 rating from customer reviews. Preparing for
        South Korea expansion.
      </p>
    </div>
  );
}

function JourneyItem2() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full"
      data-name="Journey Item"
    >
      <JourneyDateContainer2 />
      <JourneyDetails2 />
    </div>
  );
}

function JourneyDateContainer3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Journey Date Container"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        July
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        2017
      </p>
    </div>
  );
}

function JourneyDetails3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Journey Details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Reached 5,000 Customers
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px] w-full">
        Expanded our network to include Nepal and Bangladesh. Launched our
        customer loyalty program and introduced competitive exchange rates that
        beat traditional banks by up to 3%.
      </p>
    </div>
  );
}

function JourneyItem3() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full"
      data-name="Journey Item"
    >
      <JourneyDateContainer3 />
      <JourneyDetails3 />
    </div>
  );
}

function JourneyDateContainer4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0"
      data-name="Journey Date Container"
    >
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        May
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px]">
        2017
      </p>
    </div>
  );
}

function JourneyDetails4() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-pre-wrap"
      data-name="Journey Details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full">
        Founded in Tokyo
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px] w-full">{`C&B Inc. established to provide reliable international money transfer services to Asian communities in Japan.`}</p>
    </div>
  );
}

function JourneyItem4() {
  return (
    <div
      className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full"
      data-name="Journey Item"
    >
      <JourneyDateContainer4 />
      <JourneyDetails4 />
    </div>
  );
}

function JourneyContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full"
      data-name="Journey Content"
    >
      <JourneyItem />
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
                  id="Line 13"
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
      <JourneyItem1 />
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
                  id="Line 13"
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
      <JourneyItem2 />
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
                  id="Line 13"
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
      <JourneyItem3 />
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
                  id="Line 13"
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
      <JourneyItem4 />
    </div>
  );
}

function JourneySection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Journey Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[80px] relative w-full">
        <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] text-center">
          Our Journey
        </p>
        <JourneyContent />
      </div>
    </div>
  );
}

function StatItem() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative"
      data-name="Stat Item"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] w-full">
        7+
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">
        Years in the industry
      </p>
    </div>
  );
}

function StatItem1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative"
      data-name="Stat Item"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] w-full">
        50,000+
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">
        Customers served
      </p>
    </div>
  );
}

function StatItem2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative"
      data-name="Stat Item"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] w-full">
        ¥5B+
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full">
        Total remitted value
      </p>
    </div>
  );
}

function StatsSection() {
  return (
    <div
      className="bg-[#3f4e50] relative shrink-0 w-full"
      data-name="Stats Section"
    >
      <div className="content-stretch flex items-start justify-between px-[64px] py-[80px] relative text-center text-white w-full whitespace-pre-wrap">
        <StatItem />
        <StatItem1 />
        <StatItem2 />
      </div>
    </div>
  );
}

function CountriesHeader() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 whitespace-pre-wrap"
      data-name="Countries Header"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-[1312px]">
        Our Service Countries
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[16px] w-[1312px]">
        With a global reach spanning 18 countries from Japan and an additional
        presence in Seoul, South Korea, we ensure reliable and seamless
        financial transactions for our clients.
      </p>
    </div>
  );
}

function AustraliaAu() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Australia (AU)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_806)" id="Australia (AU)">
          <path d="M0 0H48V36H0V0Z" fill="var(--fill-0, #00008B)" id="Vector" />
          <path
            d={svgPaths.p1f5abc00}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p36d57700}
            fill="var(--fill-0, #FF0000)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p25e900f0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p2707000}
            fill="var(--fill-0, #FF0000)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p17b2500}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_806">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryFlag() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Flag"
    >
      <AustraliaAu />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Australia
      </p>
    </div>
  );
}

function A() {
  return (
    <div className="absolute inset-[50.85%_40.82%_38.34%_49.7%]" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55034 3.89257"
      >
        <g id="a">
          <path
            d={svgPaths.p2c65c00}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p2dfc8280}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A1() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.5504 3.89257"
      >
        <g id="a">
          <path
            d={svgPaths.p3680c700}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p31433b40}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B() {
  return (
    <div
      className="absolute contents inset-[50.72%_40.82%_35.56%_47.45%]"
      data-name="b"
    >
      <A />
      <div className="absolute flex inset-[50.72%_41.3%_35.56%_47.45%] items-center justify-center">
        <div className="flex-none h-[3.892px] rotate-15 w-[4.55px]">
          <A1 />
        </div>
      </div>
    </div>
  );
}

function A2() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55034 3.89259"
      >
        <g id="a">
          <path
            d={svgPaths.p3b9d0400}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p1e2ef400}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A3() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55034 3.89261"
      >
        <g id="a">
          <path
            d={svgPaths.p25959b00}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.paa04d00}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B1() {
  return (
    <div
      className="absolute contents inset-[48.92%_42.32%_31.38%_42.37%]"
      data-name="b"
    >
      <div className="absolute flex inset-[50.54%_42.37%_33.78%_45.37%] items-center justify-center">
        <div className="flex-none h-[3.892px] rotate-30 w-[4.551px]">
          <A2 />
        </div>
      </div>
      <div className="absolute flex inset-[50.32%_43.96%_33.1%_43.6%] items-center justify-center">
        <div className="flex-none h-[3.894px] rotate-45 w-[4.549px]">
          <A3 />
        </div>
      </div>
    </div>
  );
}

function C() {
  return (
    <div
      className="absolute contents inset-[48.92%_40.82%_31.38%_42.37%]"
      data-name="c"
    >
      <B />
      <B1 />
    </div>
  );
}

function A4() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55041 3.89254"
      >
        <g id="a">
          <path
            d={svgPaths.p2628d4c0}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.pb35eb70}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A5() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55035 3.89258"
      >
        <g id="a">
          <path
            d={svgPaths.p1c246000}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p4488a00}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B2() {
  return (
    <div
      className="absolute contents inset-[47.41%_45.88%_32.18%_39.35%]"
      data-name="b"
    >
      <div className="absolute flex inset-[50.08%_45.96%_33.56%_42.27%] items-center justify-center">
        <div className="flex-none h-[3.892px] rotate-60 w-[4.551px]">
          <A4 />
        </div>
      </div>
      <div className="absolute flex inset-[49.84%_48.24%_35.16%_41.47%] items-center justify-center">
        <div className="flex-none h-[3.893px] rotate-75 w-[4.549px]">
          <A5 />
        </div>
      </div>
    </div>
  );
}

function A6() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55044 3.89246"
      >
        <g id="a">
          <path
            d={svgPaths.p39454700}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p2494d200}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A7() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55047 3.89243"
      >
        <g id="a">
          <path
            d={svgPaths.p38352500}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p2ed08480}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B3() {
  return (
    <div
      className="absolute contents inset-[46.59%_50.54%_37.76%_39.17%]"
      data-name="b"
    >
      <div className="absolute flex inset-[49.6%_50.64%_37.76%_41.25%] items-center justify-center">
        <div className="flex-none h-[3.892px] rotate-90 w-[4.55px]">
          <A6 />
        </div>
      </div>
      <div className="absolute flex inset-[46.59%_50.54%_38.4%_39.17%] items-center justify-center">
        <div className="flex-none h-[3.893px] rotate-105 w-[4.552px]">
          <A7 />
        </div>
      </div>
    </div>
  );
}

function C1() {
  return (
    <div
      className="absolute contents inset-[40.65%_44.71%_30.09%_34.09%]"
      data-name="c"
    >
      <B2 />
      <B3 />
    </div>
  );
}

function D() {
  return (
    <div
      className="absolute contents inset-[40.65%_40.82%_30.09%_34.09%]"
      data-name="d"
    >
      <C />
      <C1 />
    </div>
  );
}

function A8() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55041 3.89282"
      >
        <g id="a">
          <path
            d={svgPaths.p1d558300}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.pec9a400}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A9() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55034 3.89262"
      >
        <g id="a">
          <path
            d={svgPaths.p9ef7ef0}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p1721aff0}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B4() {
  return (
    <div
      className="absolute contents inset-[39.83%_49.19%_39.76%_36.03%]"
      data-name="b"
    >
      <div className="absolute flex inset-[43.82%_50.4%_39.83%_37.83%] items-center justify-center">
        <div className="flex-none h-[3.893px] rotate-120 w-[4.55px]">
          <A8 />
        </div>
      </div>
      <div className="absolute flex inset-[41.47%_50.24%_41.95%_37.32%] items-center justify-center">
        <div className="flex-none h-[3.893px] rotate-135 w-[4.551px]">
          <A9 />
        </div>
      </div>
    </div>
  );
}

function A10() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55034 3.89266"
      >
        <g id="a">
          <path
            d={svgPaths.p39cc9b80}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.pf484980}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A11() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55035 3.89268"
      >
        <g id="a">
          <path
            d={svgPaths.p10feb700}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p4e7180}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B5() {
  return (
    <div
      className="absolute contents inset-[35.79%_48.06%_44.5%_36.64%]"
      data-name="b"
    >
      <div className="absolute flex inset-[39.7%_50.06%_44.62%_37.68%] items-center justify-center">
        <div className="flex-none h-[3.891px] rotate-150 w-[4.55px]">
          <A10 />
        </div>
      </div>
      <div className="absolute flex inset-[38.62%_49.88%_47.66%_38.87%] items-center justify-center">
        <div className="flex-none h-[3.893px] rotate-165 w-[4.551px]">
          <A11 />
        </div>
      </div>
    </div>
  );
}

function C2() {
  return (
    <div
      className="absolute contents inset-[31.88%_45.49%_38.86%_33.31%]"
      data-name="c"
    >
      <B4 />
      <B5 />
    </div>
  );
}

function A12() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55024 3.89266"
      >
        <g id="a">
          <path
            d={svgPaths.p2cfd0100}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p3262e500}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A13() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55039 3.89263"
      >
        <g id="a">
          <path
            d={svgPaths.p21266280}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p3aed000}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B6() {
  return (
    <div
      className="absolute contents inset-[35.56%_47.45%_50.72%_40.82%]"
      data-name="b"
    >
      <div className="absolute flex inset-[38.33%_49.7%_50.85%_40.82%] items-center justify-center">
        <div className="flex-none h-[3.892px] rotate-180 w-[4.55px]">
          <A12 />
        </div>
      </div>
      <div className="absolute flex inset-[35.56%_47.45%_50.72%_41.3%] items-center justify-center">
        <div className="-rotate-165 flex-none h-[3.892px] w-[4.55px]">
          <A13 />
        </div>
      </div>
    </div>
  );
}

function A14() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55033 3.89263"
      >
        <g id="a">
          <path
            d={svgPaths.pcbb9e80}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p39b64700}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A15() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55053 3.89265"
      >
        <g id="a">
          <path
            d={svgPaths.p35d00e40}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.pb7cd280}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B7() {
  return (
    <div
      className="absolute contents inset-[31.38%_42.37%_48.92%_42.32%]"
      data-name="b"
    >
      <div className="absolute flex inset-[33.78%_45.37%_50.54%_42.37%] items-center justify-center">
        <div className="-rotate-150 flex-none h-[3.894px] w-[4.55px]">
          <A14 />
        </div>
      </div>
      <div className="absolute flex inset-[33.1%_43.6%_50.32%_43.96%] items-center justify-center">
        <div className="-rotate-135 flex-none h-[3.892px] w-[4.551px]">
          <A15 />
        </div>
      </div>
    </div>
  );
}

function C3() {
  return (
    <div
      className="absolute contents inset-[31.38%_42.37%_48.92%_40.82%]"
      data-name="c"
    >
      <B6 />
      <B7 />
    </div>
  );
}

function D1() {
  return (
    <div
      className="absolute contents inset-[21.68%_35.98%_34.72%_32.48%]"
      data-name="d"
    >
      <C2 />
      <C3 />
    </div>
  );
}

function A16() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55037 3.89254"
      >
        <g id="a">
          <path
            d={svgPaths.p2bd7a500}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.pd184f00}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A17() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55035 3.89258"
      >
        <g id="a">
          <path
            d={svgPaths.p168f6280}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p1e0b7980}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B8() {
  return (
    <div
      className="absolute contents inset-[32.18%_39.35%_47.41%_45.88%]"
      data-name="b"
    >
      <div className="absolute flex inset-[33.57%_42.27%_50.08%_45.96%] items-center justify-center">
        <div className="-rotate-120 flex-none h-[3.892px] w-[4.551px]">
          <A16 />
        </div>
      </div>
      <div className="absolute flex inset-[35.16%_41.47%_49.84%_48.24%] items-center justify-center">
        <div className="-rotate-105 flex-none h-[3.893px] w-[4.549px]">
          <A17 />
        </div>
      </div>
    </div>
  );
}

function A18() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55044 3.89246"
      >
        <g id="a">
          <path
            d={svgPaths.p1a65a9f0}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p1aef700}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A19() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55048 3.89242"
      >
        <g id="a">
          <path
            d={svgPaths.p398e0f80}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p37b6e7c0}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B9() {
  return (
    <div
      className="absolute contents inset-[37.76%_39.17%_46.59%_50.54%]"
      data-name="b"
    >
      <div className="absolute flex inset-[37.76%_41.25%_49.6%_50.64%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[3.892px] w-[4.55px]">
          <A18 />
        </div>
      </div>
      <div className="absolute flex inset-[38.4%_39.17%_46.59%_50.54%] items-center justify-center">
        <div className="-rotate-75 flex-none h-[3.893px] w-[4.552px]">
          <A19 />
        </div>
      </div>
    </div>
  );
}

function C4() {
  return (
    <div
      className="absolute contents inset-[30.09%_34.09%_40.65%_44.71%]"
      data-name="c"
    >
      <B8 />
      <B9 />
    </div>
  );
}

function A20() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55056 3.89259"
      >
        <g id="a">
          <path
            d={svgPaths.p192f0500}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p3006ef80}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A21() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55039 3.89254"
      >
        <g id="a">
          <path
            d={svgPaths.p3d6e6a00}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p8191b00}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B10() {
  return (
    <div
      className="absolute contents inset-[39.76%_36.03%_39.83%_49.19%]"
      data-name="b"
    >
      <div className="absolute flex inset-[39.83%_37.83%_43.82%_50.4%] items-center justify-center">
        <div className="-rotate-60 flex-none h-[3.893px] w-[4.551px]">
          <A20 />
        </div>
      </div>
      <div className="absolute flex inset-[41.95%_37.32%_41.47%_50.24%] items-center justify-center">
        <div className="-rotate-45 flex-none h-[3.893px] w-[4.551px]">
          <A21 />
        </div>
      </div>
    </div>
  );
}

function A22() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55038 3.89252"
      >
        <g id="a">
          <path
            d={svgPaths.p2a524500}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p164e2c0}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function A23() {
  return (
    <div className="relative size-full" data-name="a">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4.55037 3.89252"
      >
        <g id="a">
          <path
            d={svgPaths.p3bc78b80}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
          <path
            d={svgPaths.p1fca31f0}
            fill="var(--fill-0, #000088)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function B11() {
  return (
    <div
      className="absolute contents inset-[44.5%_36.64%_35.8%_48.06%]"
      data-name="b"
    >
      <div className="absolute flex inset-[44.62%_37.67%_39.69%_50.06%] items-center justify-center">
        <div className="-rotate-30 flex-none h-[3.893px] w-[4.551px]">
          <A22 />
        </div>
      </div>
      <div className="absolute flex inset-[47.66%_38.87%_38.63%_49.88%] items-center justify-center">
        <div className="-rotate-15 flex-none h-[3.891px] w-[4.55px]">
          <A23 />
        </div>
      </div>
    </div>
  );
}

function C5() {
  return (
    <div
      className="absolute contents inset-[38.86%_33.31%_31.89%_45.49%]"
      data-name="c"
    >
      <B10 />
      <B11 />
    </div>
  );
}

function D2() {
  return (
    <div
      className="absolute contents inset-[29.44%_29.11%_26.96%_39.34%]"
      data-name="d"
    >
      <C4 />
      <C5 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute contents inset-[21.68%_29.11%_26.96%_32.48%]"
      data-name="Group"
    >
      <div className="absolute inset-[36.67%_40%]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9.6 9.6"
        >
          <path
            d={svgPaths.p7271600}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute inset-[38.33%_41.25%]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.4 8.4"
        >
          <path d={svgPaths.padc5380} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.67%_48.25%]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1.68 1.68"
        >
          <path
            d={svgPaths.p13f67800}
            fill="var(--fill-0, #000088)"
            id="Vector"
          />
        </svg>
      </div>
      <D />
      <D1 />
      <D2 />
    </div>
  );
}

function IndiaIn() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="India (IN)"
    >
      <div className="absolute inset-[0_0_66.67%_0]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 12"
        >
          <path d="M0 0H48V12H0V0Z" fill="var(--fill-0, #FF9933)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.33%_0]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 12"
        >
          <path d="M0 0H48V12H0V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.67%_0_0_0]" data-name="Vector">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 12"
        >
          <path d="M0 0H48V12H0V0Z" fill="var(--fill-0, #128807)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function CountryItem2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <IndiaIn />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        India
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute inset-[0_-6.24%_0_-6.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.002px_0px] mask-size-[47.995px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 54 36"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d="M0 0H54V36H0V0Z"
            fill="var(--fill-0, #0C590B)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d="M0 0H13.5352V36H0V0Z"
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <g id="Group_2">
            <path
              clipRule="evenodd"
              d={svgPaths.p389ae600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1d93ba80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_4"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[0_0.01%_0_-0.01%]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function PakistanPk() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Pakistan (PK)"
    >
      <ClipPathGroup />
    </div>
  );
}

function CountryItem3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <PakistanPk />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Pakistan
      </p>
    </div>
  );
}

function ThailandTh() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Thailand (TH)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d="M0 0H48V36H0V0Z"
            fill="var(--fill-0, #F4F5F8)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3c58f500}
            fill="var(--fill-0, #2D2A4A)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p155cf700}
            fill="var(--fill-0, #A51931)"
            fillRule="evenodd"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function CountryFlag1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Flag"
    >
      <ThailandTh />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Thailand
      </p>
    </div>
  );
}

function CountryItem1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[58px]"
      data-name="Country Item"
    >
      <CountryFlag />
      <CountryItem2 />
      <CountryItem3 />
      <CountryFlag1 />
    </div>
  );
}

function BangladeshBd() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Bangladesh (BD)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_699)" id="Bangladesh (BD)">
          <path d="M0 0H48V36H0V0Z" fill="var(--fill-0, #006A4E)" id="Vector" />
          <path
            d={svgPaths.p1e608600}
            fill="var(--fill-0, #F42A41)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_699">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <BangladeshBd />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Bangladesh
      </p>
    </div>
  );
}

function IndonesiaId() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Indonesia (ID)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_741)" id="Indonesia (ID)">
          <path d="M0 0H48V18H0V0Z" fill="var(--fill-0, #E70011)" id="Vector" />
          <path
            d="M0 18H48V36H0V18Z"
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_741">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryFlag2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Flag"
    >
      <IndonesiaId />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Indonesia
      </p>
    </div>
  );
}

function PhilippinesPh() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Philippines (PH)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_630)" id="Philippines (PH)">
          <path d="M0 0H48V18H0V0Z" fill="var(--fill-0, #0038A8)" id="Vector" />
          <path
            d="M0 18H48V36H0V18Z"
            fill="var(--fill-0, #CE1126)"
            id="Vector_2"
          />
          <path
            d="M31.1775 18L0 36V0"
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pcf88a00}
            fill="var(--fill-0, #FCD116)"
            id="Vector_4"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_630">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem6() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <PhilippinesPh />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Philippines
      </p>
    </div>
  );
}

function UnitedStatesOfAmericaUs() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="United States of America (US)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_766)" id="United States of America (US)">
          <path d="M0 0H48V36H0" fill="var(--fill-0, #BD3D44)" id="Vector" />
          <path
            d={svgPaths.p3dcb1580}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p5047980}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d="M0 0H27.36V19.3875H0"
            fill="var(--fill-0, #192F5D)"
            id="Vector_4"
          />
          <g id="Group">
            <path
              d={svgPaths.p926e080}
              fill="var(--fill-0, white)"
              id="Vector_5"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_12_766">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem7() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <UnitedStatesOfAmericaUs />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        United States of America
      </p>
    </div>
  );
}

function CountryItem4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[160px]"
      data-name="Country Item"
    >
      <CountryItem5 />
      <CountryFlag2 />
      <CountryItem6 />
      <CountryItem7 />
    </div>
  );
}

function CanadaCa() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Canada (CA)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_623)" id="Canada (CA)">
          <path
            d={svgPaths.p31082900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.pf17ed00}
            fill="var(--fill-0, #D52B1E)"
            id="Vector_2"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_623">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem9() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <CanadaCa />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Canada
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g id="Group">
          <path d="M0 0H48V36H0V0Z" fill="var(--fill-0, #CC0000)" id="Vector" />
          <path
            d="M0 0H48V2.5725H0V0Z"
            fill="var(--fill-0, #CC0000)"
            id="Vector_2"
          />
          <path
            d="M0 2.5725H48V5.145H0V2.5725Z"
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d="M0 5.145H48V7.7175H0V5.145Z"
            fill="var(--fill-0, #CC0000)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p8874200}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p24817880}
            fill="var(--fill-0, #CC0000)"
            id="Vector_6"
          />
          <path
            d={svgPaths.pc2f1e00}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d="M0 15.4275H48V18H0V15.4275Z"
            fill="var(--fill-0, #CC0000)"
            id="Vector_8"
          />
          <path
            d="M0 18H48V20.5725H0V18Z"
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p3e5a1a80}
            fill="var(--fill-0, #CC0000)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p10246100}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p2bc55600}
            fill="var(--fill-0, #CC0000)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p392db380}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p3f620580}
            fill="var(--fill-0, #CC0000)"
            id="Vector_14"
          />
          <path
            d="M0 33.4275H48V36H0V33.4275Z"
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
          <path
            d="M0 0.0375H24V20.61H0V0.0375Z"
            fill="var(--fill-0, #000066)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p3fe09471}
            fill="var(--fill-0, #FFCC00)"
            id="Vector_17"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function MalaysiaMy() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Malaysia (MY)"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function CountryItem10() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <MalaysiaMy />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Malaysia
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-[0_-9.38%_0_-3.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.5px_0px] mask-size-[48px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 54 36"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d="M0 0H54V36H0V0Z"
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d="M0 0H54V18H0V0Z"
            fill="var(--fill-0, #DF0000)"
            fillRule="evenodd"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p15d8f100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p23eed100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function SingaporeSg() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Singapore (SG)"
    >
      <ClipPathGroup2 />
    </div>
  );
}

function CountryItem11() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <SingaporeSg />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Singapore
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute inset-[0_-6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.002px_0px] mask-size-[47.995px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 54 36"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d="M0 0H54V36H0V0Z"
            fill="var(--fill-0, #DA251D)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p379e3871}
            fill="var(--fill-0, #FFFF00)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="absolute contents inset-[0_0_0_0.01%]"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function VietnamVn() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Vietnam (VN)"
    >
      <ClipPathGroup3 />
    </div>
  );
}

function CountryFlag3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Flag"
    >
      <VietnamVn />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Vietnam
      </p>
    </div>
  );
}

function CountryItem8() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[67px]"
      data-name="Country Item"
    >
      <CountryItem9 />
      <CountryItem10 />
      <CountryItem11 />
      <CountryFlag3 />
    </div>
  );
}

function ChinaCn() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]" data-name="China (CN)">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_792)" id="China (CN)">
          <path d="M0 0H48V36H0V0Z" fill="var(--fill-0, #EE1C25)" id="Vector" />
          <path
            d={svgPaths.p1bc60a0}
            fill="var(--fill-0, #FFFF00)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1406ca00}
            fill="var(--fill-0, #FFFF00)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p38d48980}
            fill="var(--fill-0, #FFFF00)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p11dbbbf0}
            fill="var(--fill-0, #FFFF00)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p1d09a300}
            fill="var(--fill-0, #FFFF00)"
            id="Vector_6"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_792">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <ChinaCn />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        China
      </p>
    </div>
  );
}

function MongoliaMn() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Mongolia (MN)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_671)" id="Mongolia (MN)">
          <path d="M0 0H48V36H0V0Z" fill="var(--fill-0, #DA2032)" id="Vector" />
          <path
            d={svgPaths.p2ce3cb00}
            fill="var(--fill-0, #0066B3)"
            id="Vector_2"
          />
          <path
            d={svgPaths.pfcdda00}
            fill="var(--fill-0, #FFD900)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3e5fe000}
            fill="var(--fill-0, #DA2032)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p20178480}
            fill="var(--fill-0, #FFD900)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p20f01f00}
            fill="var(--fill-0, #FFD900)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p1bed5600}
            fill="var(--fill-0, #FFD900)"
            id="Vector_7"
          />
          <g id="Group">
            <path
              d={svgPaths.pce0d880}
              fill="var(--fill-0, #DA2032)"
              id="Vector_8"
            />
            <path
              d={svgPaths.p20b7db00}
              fill="var(--fill-0, #DA2032)"
              id="Vector_9"
            />
            <path
              d={svgPaths.p27bd9a00}
              fill="var(--fill-0, #DA2032)"
              id="Vector_10"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_12_671">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem14() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <MongoliaMn />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Mongolia
      </p>
    </div>
  );
}

function B12() {
  return (
    <div className="absolute inset-[28.93%_15.03%_28.92%_47.11%]" data-name="b">
      <div className="absolute inset-[-1.98%_-1.65%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21.9047 18.4044"
        >
          <g id="b">
            <path
              d={svgPaths.p3b0eae00}
              fill="var(--fill-0, #FFB700)"
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p3fb5a100}
              fill="var(--fill-0, #FFB700)"
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p1a024c00}
              fill="var(--fill-0, #FFB700)"
              id="Vector_3"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p22c97071}
              fill="var(--fill-0, #FFB700)"
              id="Vector_4"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p27210640}
              fill="var(--fill-0, #FFB700)"
              id="Vector_5"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p9586e00}
              fill="var(--fill-0, #000001)"
              id="Vector_6"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
            <path
              d={svgPaths.p2699f280}
              fill="var(--fill-0, #000001)"
              id="Vector_7"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function B13() {
  return (
    <div className="absolute inset-[28.93%_15.03%_28.92%_47.11%]" data-name="b">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21.2047 17.7044"
      >
        <g id="b">
          <path
            d={svgPaths.p3a477c40}
            fill="var(--fill-0, #FFB700)"
            id="Vector"
          />
          <path
            d={svgPaths.p1f142c80}
            fill="var(--fill-0, #FFB700)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2395c200}
            fill="var(--fill-0, #FFB700)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p37e1f080}
            fill="var(--fill-0, #FFB700)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p243e0300}
            fill="var(--fill-0, #FFB700)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p8ec6000}
            fill="var(--fill-0, #000001)"
            id="Vector_6"
          />
          <path
            d={svgPaths.pe915e80}
            fill="var(--fill-0, #000001)"
            id="Vector_7"
          />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute contents inset-[28.93%_15.03%_28.92%_47.11%]"
      data-name="Group"
    >
      <B12 />
      <B13 />
    </div>
  );
}

function SriLankaLk() {
  return (
    <div
      className="h-[42px] overflow-clip relative shrink-0 w-[56px]"
      data-name="Sri Lanka (LK)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 42"
      >
        <path d="M0 0H56V42H0V0Z" fill="var(--fill-0, #FFB700)" id="Vector" />
      </svg>
      <div
        className="absolute inset-[5.56%_68.33%_5.56%_4.17%]"
        data-name="Vector"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15.4 37.3275"
        >
          <path
            d={svgPaths.p3321c000}
            fill="var(--fill-0, #FF5B00)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[5.56%_82.08%_5.56%_4.17%]"
        data-name="Vector"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7.7 37.3275"
        >
          <path
            d="M0 0H7.7V37.3275H0V0Z"
            fill="var(--fill-0, #005641)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute inset-[5.56%_3.75%_5.56%_35.83%]"
        data-name="Vector"
      >
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 33.8363 37.3275"
        >
          <path
            d="M0 0H33.8363V37.3275H0V0Z"
            fill="var(--fill-0, #8D2029)"
            id="Vector"
          />
        </svg>
      </div>
      <div className="absolute inset-[85.13%_4.25%_6.22%_90.52%]" data-name="a">
        <div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3.06755 3.73287"
          >
            <path
              d={svgPaths.p34de2ff0}
              fill="var(--fill-0, #FFB700)"
              id="a"
              stroke="var(--stroke-0, black)"
              strokeWidth="0.1375"
            />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[85.13%_58.44%_6.22%_36.33%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[3.634px] rotate-180 w-[2.93px]">
          <div className="relative size-full" data-name="a">
            <div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 3.06755 3.73287"
              >
                <path
                  d={svgPaths.p34de2ff0}
                  fill="var(--fill-0, #FFB700)"
                  id="a"
                  stroke="var(--stroke-0, black)"
                  strokeWidth="0.1375"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[6.22%_4.25%_85.13%_90.52%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[3.634px] w-[2.93px]">
          <div className="relative size-full" data-name="a">
            <div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 3.06755 3.73287"
              >
                <path
                  d={svgPaths.p34de2ff0}
                  fill="var(--fill-0, #FFB700)"
                  id="a"
                  stroke="var(--stroke-0, black)"
                  strokeWidth="0.1375"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[6.22%_58.42%_85.13%_36.35%] items-center justify-center">
        <div className="flex-none h-[3.634px] rotate-180 w-[2.93px]">
          <div className="relative size-full" data-name="a">
            <div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 3.06755 3.73287"
              >
                <path
                  d={svgPaths.p34de2ff0}
                  fill="var(--fill-0, #FFB700)"
                  id="a"
                  stroke="var(--stroke-0, black)"
                  strokeWidth="0.1375"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function CountryItem15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <SriLankaLk />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        SriLanka
      </p>
    </div>
  );
}

function CountryItem12() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[61px]"
      data-name="Country Item"
    >
      <CountryItem13 />
      <CountryItem14 />
      <CountryItem15 />
    </div>
  );
}

function HongKongHk() {
  return (
    <div
      className="h-[36px] relative shrink-0 w-[48px]"
      data-name="Hong Kong (HK)"
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 36"
      >
        <g clipPath="url(#clip0_12_585)" id="Hong Kong (HK)">
          <path d="M0 0H48V36H0" fill="var(--fill-0, #EC1B2E)" id="Vector" />
          <path d={svgPaths.p1b11b380} fill="var(--fill-0, white)" id="a" />
          <path d={svgPaths.p1e649200} fill="var(--fill-0, white)" id="a_2" />
          <path d={svgPaths.p134d3f00} fill="var(--fill-0, white)" id="a_3" />
          <path d={svgPaths.p38267900} fill="var(--fill-0, white)" id="a_4" />
          <path d={svgPaths.p3dfc8ab0} fill="var(--fill-0, white)" id="a_5" />
        </g>
        <defs>
          <clipPath id="clip0_12_585">
            <rect fill="white" height="36" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CountryItem17() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <HongKongHk />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Hong Kong
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute inset-[1.27%_42.18%_1.27%_0.95%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.457px_-0.457px] mask-size-[36px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <div className="absolute inset-[-4.21%_-10.16%_-2.3%_-2.94%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 30.8699 37.3705"
        >
          <g id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p3e813480}
              fill="var(--fill-0, #CE0000)"
              fillRule="evenodd"
              id="Vector"
              stroke="var(--stroke-0, #000063)"
              strokeWidth="1.61719"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p23655500}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute contents inset-[1.27%_42.18%_1.27%_0.95%]"
      data-name="Group"
    >
      <Group7 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="absolute bottom-0 contents left-0 right-1/4 top-0"
      data-name="Clip path group"
    >
      <Group6 />
    </div>
  );
}

function NepalNp() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="Nepal (NP)"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function CountryItem18() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0"
      data-name="Country Item"
    >
      <NepalNp />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Nepal
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute inset-[-0.82%_-0.02%_-2.04%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.299px] mask-size-[48.002px_36px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup3}')` }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48.0094 37.0303"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c326100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
          <g id="Group_2">
            <g id="c">
              <path
                clipRule="evenodd"
                d={svgPaths.p19f99380}
                fill="var(--fill-0, #000001)"
                fillRule="evenodd"
                id="b"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p3b0deb00}
                fill="var(--fill-0, #000001)"
                fillRule="evenodd"
                id="b_2"
              />
            </g>
            <g id="Vector_2">
              <path
                clipRule="evenodd"
                d={svgPaths.p9f84180}
                fill="var(--fill-0, black)"
                fillRule="evenodd"
              />
              <path
                d={svgPaths.p6cef480}
                stroke="var(--stroke-0, white)"
                strokeWidth="1.25"
              />
            </g>
            <path
              clipRule="evenodd"
              d={svgPaths.p1f32ef00}
              fill="var(--fill-0, #CD2E3A)"
              fillRule="evenodd"
              id="Vector_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pe16ef80}
              fill="var(--fill-0, #0047A0)"
              fillRule="evenodd"
              id="Vector_4"
            />
            <path
              d={svgPaths.p20bee900}
              fill="var(--fill-0, #CD2E3A)"
              id="Vector_5"
            />
          </g>
          <g id="Group_3">
            <g id="c_2">
              <path
                clipRule="evenodd"
                d={svgPaths.p3ea43d00}
                fill="var(--fill-0, #000001)"
                fillRule="evenodd"
                id="b_3"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p1cff7900}
                fill="var(--fill-0, #000001)"
                fillRule="evenodd"
                id="b_4"
              />
            </g>
            <g id="Vector_6">
              <path
                clipRule="evenodd"
                d={svgPaths.p35d7cd80}
                fill="var(--fill-0, black)"
                fillRule="evenodd"
              />
              <path
                d={svgPaths.p32c3f000}
                stroke="var(--stroke-0, white)"
                strokeWidth="1.25"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="absolute contents inset-[0.01%_0_-0.01%_0]"
      data-name="Clip path group"
    >
      <Group8 />
    </div>
  );
}

function SouthKoreaKr() {
  return (
    <div
      className="h-[36px] overflow-clip relative shrink-0 w-[48px]"
      data-name="South Korea (KR)"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function CountryItem19() {
  return (
    <div
      className="content-stretch flex flex-col gap-[8px] h-[65px] items-center relative shrink-0 w-full"
      data-name="Country Item"
    >
      <SouthKoreaKr />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#3f4e50] text-[14px]">
        Republic of Korea
      </p>
    </div>
  );
}

function CountryItem16() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[115px]"
      data-name="Country Item"
    >
      <CountryItem17 />
      <CountryItem18 />
      <CountryItem19 />
    </div>
  );
}

function CountryItem() {
  return (
    <div
      className="content-stretch flex items-start justify-between relative shrink-0 w-full"
      data-name="Country Item"
    >
      <CountryItem1 />
      <CountryItem4 />
      <CountryItem8 />
      <CountryItem12 />
      <CountryItem16 />
    </div>
  );
}

function CountriesSection() {
  return (
    <div
      className="bg-[#f8fafb] content-stretch flex flex-col gap-[48px] items-center px-[64px] py-[80px] relative shrink-0 w-[1440px]"
      data-name="Countries Section"
    >
      <CountriesHeader />
      <CountryItem />
    </div>
  );
}

function CountryItem20() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Country Item"
    >
      <div
        className="h-[58px] relative shrink-0 w-[161px]"
        data-name="Partner Bank Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPartnerBankLogo}
        />
      </div>
      <div
        className="h-[40px] relative shrink-0 w-[135px]"
        data-name="Partner Bank Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPartnerBankLogo1}
        />
      </div>
      <div
        className="h-[92px] relative shrink-0 w-[174px]"
        data-name="Partner Bank Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPartnerBankLogo2}
        />
      </div>
      <div
        className="h-[40px] relative shrink-0 w-[135px]"
        data-name="Partner Bank Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPartnerBankLogo1}
        />
      </div>
      <div
        className="h-[58px] relative shrink-0 w-[161px]"
        data-name="Partner Bank Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgPartnerBankLogo}
        />
      </div>
    </div>
  );
}

function CountriesSection1() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Countries Section"
    >
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[80px] relative w-full">
        <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-[1312px] whitespace-pre-wrap">
          Our Partner Banks
        </p>
        <CountryItem20 />
      </div>
    </div>
  );
}

function Container1() {
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

function Container2() {
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

function Container3() {
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

function Container() {
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
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function MainContent() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-[81px] w-[1440px]"
      data-name="Main Content"
    >
      <HeaderSection />
      <JourneySection />
      <StatsSection />
      <CountriesSection />
      <CountriesSection1 />
      <div className="bg-[#f8fafb] relative shrink-0 w-full" data-name="Footer">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[48px] items-center px-[64px] py-[48px] relative w-full">
            <Container />
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
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-white relative size-full" data-name="About us">
      <div
        className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[64px] py-[8px] top-0 w-[1440px]"
        data-name="Navbar"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none"
        />
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
      <div
        className="absolute h-[169.5px] left-[-3144px] top-[-37px] w-[887px]"
        data-name="Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLogo1}
        />
      </div>
      <MainContent />
    </div>
  );
}
