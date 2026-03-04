import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const INDIVIDUAL_SECTIONS = [
  {
    title: 'Sign up',
    content: (
      <div className="flex flex-col gap-10">
        {/* Text block */}
        <div className="text-[#3f4e50] text-[14px] leading-[1.5] flex flex-col gap-3">
          <p>In the case of FAX, you must mail the original application form.</p>
          <p>
            Contact :<br />
            {'   TEL: 03-4570-2220'}<br />
            {'Email : '}
            <span className="text-[#3a9944]">hana@oneremit.jp</span>
          </p>
          <p>2. Convenience of membership</p>
          <p>
            - Applying for international money transfers is now simpler than ever. No need for complicated paperwork—our quick and easy process gets your funds sent abroad without any fuss.<br />
            - Make your transfers both speedy and secure by managing your remittance account and frequently used accounts. It's a fast and reliable way to send money globally.
          </p>
          <p>3. Membership card will be sent within about one week after completing the membership application.</p>
          <p>
            - Get even more flexibility with up to three virtual accounts per person. After you finish applying for membership, expect your membership card to arrive in about a week. Just remember to keep the passwords you set during the application for easy access and identification.<br />
            - With this card, you can easily send money to any country from your local Lawson stores across Japan, any day of the year. International remittances just got simpler.
          </p>
          <p>4. Please keep passwords registered at the time of member application for inquiry and identification</p>
        </div>

        {/* ID Documents subsection */}
        <div className="flex flex-col gap-6">
          <p className="text-[#231a16] text-[15px] font-medium">Confirmation of identity at the time of membership</p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Doc 1 */}
            <div className="flex flex-col gap-3 text-[14px]">
              <p className="text-[#231a16] font-medium">1. ID Document</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[#231a16] leading-[1.5]">Foreigner</p>
                  <p className="text-[#3a9944] leading-[1.5]">Residence card</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#231a16] leading-[1.5]">Japanese national</p>
                  <p className="leading-[1.5]">
                    <span className="text-[#3a9944]">Japanese driver's license</span>
                    {' or '}
                    <span className="text-[#3a9944]">My Number Card</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:flex items-stretch">
              <div className="w-px bg-[#e5e5e5]" />
            </div>
            {/* Doc 2 */}
            <div className="flex flex-col gap-3 text-[14px]">
              <p className="text-[#231a16] font-medium">2. My Number Confirmation Document</p>
              <div className="text-[#3f4e50] leading-[1.5]">
                <p>One of the following:</p>
                <ul className="list-disc pl-5 flex flex-col gap-1">
                  <li>My Number Card (back)</li>
                  <li>My number Notification card</li>
                  <li>Residence certificate with my number</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="bg-[#3a9944] text-white rounded-[10px] px-6 py-4 text-[15px] font-medium cursor-pointer self-start">
          Sign up now
        </button>
      </div>
    ),
  },
  {
    title: 'Money Transfer Service',
    content: (
      <div className="text-[#3f4e50] text-[14px] leading-[1.5] flex flex-col gap-4">
        <p>1. You can apply for remittance via internet / mobile.</p>
        <p>2. We welcome visits, FAXes, and emails during our business hours from 9:00 am to 5:00 pm. Feel free to reach out to us through any of these channels during this time.</p>
        <p>3. Remittance Processing</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Remittances submitted before 5:00 pm are processed on the same day.</li>
          <li>Requests received after 5:00 pm will be handled after 10:00 am on the next bank day.</li>
          <li>The exchange rate used is the rate at the time of the transfer.</li>
        </ul>
        <p>4. Receipt confirmation</p>
        <p>
          After you finish sending money, we'll email you a receipt.<br />
          The reference number on the acceptance document is essential for questions to us or the receiving bank.<br />
          Keep your receipts in order by date for easy access.
        </p>
        <p className="text-[#3a9944] cursor-pointer">International Wire Transfer Terms of Service</p>
      </div>
    ),
  },
  {
    title: 'My page',
    content: (
      <div className="flex flex-col gap-3 text-[14px] text-[#3a9944] leading-[1.5]">
        <p className="cursor-pointer">View and download receipt, transfer results</p>
        <p className="cursor-pointer">Edit personal information</p>
        <p className="cursor-pointer">Virtual Account Application</p>
        <p className="cursor-pointer">Account management</p>
      </div>
    ),
  },
];

const CORPORATE_CONTENT = (
  <div className="text-[#3f4e50] text-[14px] leading-[1.5] flex flex-col gap-4">
    <p>Corporate membership provides businesses with enhanced remittance capabilities and dedicated support.</p>
    <p>Please contact us for corporate membership details:</p>
    <p>TEL: 03-4570-2220<br />Email: <span className="text-[#3a9944]">hana@oneremit.jp</span></p>
  </div>
);

export function UsageGuidePage() {
  const [tab, setTab] = useState<'individual' | 'corporate'>('individual');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex-1"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 md:py-16 flex flex-col gap-10">
        {/* Title */}
        <h1 className="text-[#231a16] text-[22px] md:text-[24px] font-bold">Usage Guide</h1>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#e5e5e5]">
          {(['individual', 'corporate'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex flex-col gap-2 items-center shrink-0 cursor-pointer pb-0"
            >
              <span className={`text-[15px] font-medium ${tab === t ? 'text-[#3a9944]' : 'text-[#3f4e50]'}`}>
                {t === 'individual' ? 'Individual member' : 'Corporate member'}
              </span>
              <div className={`h-[3px] w-full rounded-full transition-colors duration-200 ${tab === t ? 'bg-[#3a9944]' : 'bg-transparent'}`} />
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-14"
          >
            {tab === 'individual'
              ? INDIVIDUAL_SECTIONS.map((section, i) => (
                  <motion.div
                    key={section.title}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <h2 className="text-[#231a16] text-[18px] md:text-[20px] font-medium">{section.title}</h2>
                    {section.content}
                  </motion.div>
                ))
              : <div className="flex flex-col gap-6">
                  <h2 className="text-[#231a16] text-[18px] md:text-[20px] font-medium">Corporate Membership</h2>
                  {CORPORATE_CONTENT}
                </div>
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
