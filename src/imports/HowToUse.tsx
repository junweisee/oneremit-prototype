import svgPaths from "./svg-lzxx3v0b7v";
import imgLogo from "figma:asset/082a90a04b893d1c8d3ceafaf5997a05068aab8b.png";
import imgFlagImage from "figma:asset/9875e3b3d86e7e562cb0bc2c432eba5885fc02be.png";
import imgLogo1 from "figma:asset/7e7c8b6a7dd1d7f076f1860e1515f3aa90ba48b8.png";

function NavigationItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Navigation Item">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">How to use</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-1/2 top-1/2 w-[10px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <div className="h-[10px] relative w-[6px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                <path clipRule="evenodd" d={svgPaths.p2118a470} fill="var(--fill-0, #8CA2A4)" fillRule="evenodd" id="Vector" />
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
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Navigation">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">Send money</p>
      <NavigationItem />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">About us</p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">Help</p>
    </div>
  );
}

function LanguageSelector() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Language Selector">
      <div className="relative shrink-0 size-[24px]" data-name="Language/English">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]" data-name="Flag Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]" src={imgFlagImage} />
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">EN</p>
    </div>
  );
}

function SignUpButton() {
  return (
    <div className="bg-[#3a9944] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0" data-name="Sign up Button">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white">Sign up</p>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="User Menu">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">Log in</p>
      <SignUpButton />
    </div>
  );
}

function UserActions() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0" data-name="User Actions">
      <LanguageSelector />
      <UserMenu />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[16px] whitespace-pre-wrap">Usage Guide</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[16px] whitespace-pre-wrap">Fees and Limits</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[584px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] top-[67px] w-[148px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Line() {
  return <div className="bg-[#3a9944] h-[4px] shrink-0 w-full" data-name="Line" />;
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Tab">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">Individual member</p>
        <Line />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Tab">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">Corporate member</p>
      </div>
    </div>
  );
}

function DocumentDetails() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.5] relative shrink-0 w-[99px] whitespace-pre-wrap" data-name="Document Details">
      <p className="relative shrink-0 text-[#231a16] w-full">Foreigner</p>
      <p className="relative shrink-0 text-[#3a9944] w-full">Residence card</p>
    </div>
  );
}

function DocumentDetails1() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[8px] items-start relative shrink-0 text-[#231a16] w-[292px] whitespace-pre-wrap" data-name="Document Details">
      <p className="leading-[1.5] relative shrink-0 w-full">Japanese national</p>
      <p className="leading-[0] relative shrink-0 text-[0px] w-full">
        <span className="leading-[1.5] text-[#3a9944]">{`Japanese driver's license`}</span>
        <span className="leading-[1.5]">{` `}</span>
        <span className="leading-[1.5]">{`or `}</span>
        <span className="leading-[1.5] text-[#3a9944]">My Number Card</span>
      </p>
    </div>
  );
}

function DocumentType() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px]" data-name="Document Type">
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#231a16] w-[min-content]" start="1">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[normal]">ID Document</span>
        </li>
      </ol>
      <DocumentDetails />
      <DocumentDetails1 />
    </div>
  );
}

function DocumentDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#231a16] text-[14px]" data-name="Document Details">
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium min-w-full relative shrink-0 w-[min-content]" start="2">
        <li className="ms-[21px] whitespace-pre-wrap">
          <span className="leading-[normal]">My Number Confirmation Document</span>
        </li>
      </ol>
      <div className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">
        <p className="leading-[1.5] mb-0">One of the following:</p>
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">My Number Card (back)</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">My number Notification card</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">Residence certificate with my number</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DocumentList() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Document List">
      <DocumentType />
      <div className="flex items-center justify-center relative self-stretch shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full overflow-clip relative w-[24px]" data-name="chevron-right">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[10px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
                <path clipRule="evenodd" d={svgPaths.p2c69fa80} fill="var(--fill-0, #647576)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <DocumentDetails2 />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1322px]" data-name="Subsection">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px] w-full whitespace-pre-wrap">Confirmation of identity at the time of membership</p>
      <DocumentList />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Text Block">
      <div className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#231a16] text-[#3f4e50] text-[0px] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">In the case of FAX, you must mail the original application form.</p>
        <p className="mb-0">
          <span className="leading-[1.5]">
            Contact :<br aria-hidden="true" />
            {`   TEL: 03-4570-2220`}
            <br aria-hidden="true" />
            {`Email : `}
          </span>
          <span className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5]">hana@oneremit.jp</span>
          <span className="leading-[1.5]">
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="leading-[1.5] mb-0">2. Convenience of membership</p>
        <p className="leading-[1.5] mb-0">
          - Applying for international money transfers is now simpler than ever. No need for complicated paperwork—our quick and easy process gets your funds sent abroad without any fuss..
          <br aria-hidden="true" />
          {`- Make your transfers both speedy and secure by managing your remittance account and frequently used accounts. It's a fast and reliable way to send money globally.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[1.5] mb-0">3. Membership card will be sent within about one week after completing the membership application.</p>
        <p className="leading-[1.5] mb-0">
          - Get even more flexibility with up to three virtual accounts per person. After you finish applying for membership, expect your membership card to arrive in about a week. Just remember to keep the passwords you set during the application for easy access and identification.
          <br aria-hidden="true" />- With this card, you can easily send money to any country from your local Lawson stores across Japan, any day of the year. International remittances just got simpler.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[1.5]">4. Please keep passwords registered at the time of member application for inquiry and identification</p>
      </div>
      <Subsection1 />
      <div className="bg-[#3a9944] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[10px] shrink-0" data-name="Buttons">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white">Sign up now</p>
      </div>
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Subsection">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px] w-full whitespace-pre-wrap">Sign up</p>
      <TextBlock />
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[48px] items-start relative shrink-0 text-[14px] w-full" data-name="Text Block">
      <div className="leading-[0] relative shrink-0 text-[#231a16] w-full">
        <p className="leading-[1.5] mb-0">1. You can apply for remittance via internet / mobile.</p>
        <p className="leading-[1.5] mb-0">2. We welcome visits, FAXes, and emails during our business hours from 9:00 am to 5:00 pm. Feel free to reach out to us through any of these channels during this time.</p>
        <p className="leading-[1.5] mb-0">3. Remittance Processing</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Remittances submitted before 5:00 pm are processed on the same day.</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.5]">Requests received after 5:00 pm will be handled after 10:00 am on the next bank day.</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.5]">The exchange rate used is the rate at the time of the transfer.</span>
          </li>
        </ul>
        <p className="leading-[1.5] mb-0">4. Receipt confirmation</p>
        <p className="leading-[1.5]">
          {`After you finish sending money, we'll email you a receipt.`}
          <br aria-hidden="true" />
          The reference number on the acceptance document is essential for questions to us or the receiving bank.
          <br aria-hidden="true" />
          Keep your receipts in order by date for easy access.
        </p>
      </div>
      <p className="leading-[1.5] relative shrink-0 text-[#3a9944] w-full">International Wire Transfer Terms of Service</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Section">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px] w-full">Money Transfer Service</p>
      <TextBlock1 />
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[16px] items-start leading-[1.5] relative shrink-0 text-[#3a9944] text-[14px] w-full" data-name="Text Block">
      <p className="relative shrink-0 w-full">View and download receipt, transfer results</p>
      <p className="relative shrink-0 w-full">Edit personal information</p>
      <p className="relative shrink-0 w-full">Virtual Account Application</p>
      <p className="relative shrink-0 w-full">Account management</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Section">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[20px] w-full">My page</p>
      <TextBlock2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section">
      <Subsection />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 p-[64px] top-[81px] w-[1440px]" data-name="Content">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full whitespace-pre-wrap">Usage Guide</p>
      <Tabs />
      <Section />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px] w-[95px]" data-name="Container">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">Quick links</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">About us</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Usage guide</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Fees and limits</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Send money</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px]" data-name="Container">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">Legal</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">Privacy</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">{`Terms of Service `}</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">AML/CFT Policy</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Caution on fraud</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Policy on anti-social forces</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[14px] w-[95px]" data-name="Container">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#231a16] w-[min-content] whitespace-pre-wrap">Support</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Notice</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#647576] w-[min-content] whitespace-pre-wrap">FAQ</p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576]">Contact us</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="h-[88px] relative shrink-0 w-[233px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.62%] left-[-13.37%] max-w-none top-[-0.31%] w-[126.74%]" src={imgLogo} />
        </div>
      </div>
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function HowToUse() {
  return (
    <div className="bg-white relative size-full" data-name="How to use">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 px-[64px] py-[8px] top-0 w-[1440px]" data-name="Navbar">
        <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
        <div className="h-[50px] relative shrink-0 w-[131px]" data-name="Logo">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.62%] left-[-13.37%] max-w-none top-[-0.31%] w-[126.74%]" src={imgLogo} />
          </div>
        </div>
        <Navigation />
        <UserActions />
      </div>
      <Frame2 />
      <div className="absolute h-[169.5px] left-[-3144px] top-[-37px] w-[887px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
      <Content />
      <div className="absolute bg-[#f8fafb] content-stretch flex flex-col gap-[48px] items-center left-0 px-[64px] py-[48px] top-[1758px] w-[1440px]" data-name="Footer">
        <Container />
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1312 1">
                  <line id="Line 6" stroke="var(--stroke-0, #E5E5E5)" x2="1312" y1="0.5" y2="0.5" />
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