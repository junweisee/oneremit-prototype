import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

const NOTICES = [
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
  { no: 33, title: 'Important Notice Regarding Remittance Services to Korea', date: '2025-12-12', writer: 'sjkyung2023', views: 99 },
];

const FAQ_ITEMS = [
  { q: 'How long does a transfer take?', a: 'Transfers submitted before 5:00 pm are processed the same day. Requests after 5:00 pm are handled from 10:00 am on the next bank day.' },
  { q: 'What documents do I need to sign up?', a: "Foreigners need a Residence Card. Japanese nationals need a driver's license or My Number Card, plus a My Number confirmation document." },
  { q: 'What currencies can I send money to?', a: 'We support 18 countries including Korea, Philippines, Vietnam, USA, China, Nepal and more.' },
  { q: 'What are the transfer limits?', a: 'Generally, per-transaction limits are up to ¥1,000,000 and monthly limits are up to ¥3,000,000. See Fees and Limits for details.' },
  { q: 'How do I track my transfer?', a: 'After completing a transfer you will receive an email receipt with a reference number. You can also view transfer history from your My Page.' },
  { q: 'Can I send money from Lawson stores?', a: 'Yes! With your C&B membership card you can send money from any Lawson store across Japan, 365 days a year.' },
];

type Tab = 'notice' | 'faq' | 'contact';

export function HelpPage() {
  const [tab, setTab]       = useState<Tab>('notice');
  const [search, setSearch] = useState('');

  const filtered = NOTICES.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex-1"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 md:py-16 flex flex-col gap-8">

        {/* Title */}
        <h1 className="text-[#231a16] text-[22px] md:text-[24px] font-bold">Help</h1>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#e5e5e5]">
          {([
            { key: 'notice',  label: 'Notice' },
            { key: 'faq',     label: 'FAQ' },
            { key: 'contact', label: 'Contact us' },
          ] as { key: Tab; label: string }[]).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex flex-col gap-2 items-center shrink-0 cursor-pointer"
            >
              <span className={`text-[15px] font-medium ${tab === key ? 'text-[#3a9944]' : 'text-[#3f4e50]'}`}>
                {label}
              </span>
              <div className={`h-[4px] w-full rounded-full transition-colors duration-200 ${tab === key ? 'bg-[#3a9944]' : 'bg-transparent'}`} />
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >

            {/* ── Notice tab ───────────────────────────────────────────── */}
            {tab === 'notice' && (
              <>
                {/* Search */}
                <div className="bg-white rounded-[8px] border border-[#e5e5e5] flex items-center gap-4 px-4 py-4">
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 text-[#231a16] text-[15px] bg-transparent outline-none border-none placeholder:text-[#8ca2a4]"
                  />
                  <Search size={16} color="#8ca2a4" className="shrink-0" />
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto rounded-[10px] border border-[#e5e5e5]">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-[#f8fafb]">
                        <th className="text-left text-[#231a16] font-medium px-6 py-3 border border-[#e5e5e5] w-[72px]">No.</th>
                        <th className="text-left text-[#231a16] font-medium px-6 py-3 border border-[#e5e5e5]">Title</th>
                        <th className="text-left text-[#231a16] font-medium px-6 py-3 border border-[#e5e5e5] whitespace-nowrap">Date Created</th>
                        <th className="text-left text-[#231a16] font-medium px-6 py-3 border border-[#e5e5e5] w-[146px]">Writer</th>
                        <th className="text-right text-[#231a16] font-medium px-6 py-3 border border-[#e5e5e5] whitespace-nowrap">Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((row, i) => (
                        <motion.tr
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: i * 0.04 }}
                          className="cursor-pointer"
                        >
                          <td className="text-[#231a16] px-6 py-3 border border-[#e5e5e5] text-center">{row.no}</td>
                          <td className="px-6 py-3 border border-[#e5e5e5]">
                            <p className="text-[#3a9944] truncate max-w-[480px]">{row.title}</p>
                          </td>
                          <td className="text-[#231a16] px-6 py-3 border border-[#e5e5e5]">{row.date}</td>
                          <td className="text-[#231a16] px-6 py-3 border border-[#e5e5e5]">{row.writer}</td>
                          <td className="text-[#231a16] px-6 py-3 border border-[#e5e5e5] text-center">{row.views}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* ── FAQ tab ──────────────────────────────────────────────── */}
            {tab === 'faq' && (
              <div className="flex flex-col divide-y divide-[#e5e5e5] border border-[#e5e5e5] rounded-[10px] overflow-hidden">
                {FAQ_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    className="px-6 py-5 flex flex-col gap-2 bg-white"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                  >
                    <p className="text-[#231a16] text-[14px] font-medium">{item.q}</p>
                    <p className="text-[#647576] text-[14px] leading-[1.5]">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Contact us tab ───────────────────────────────────────── */}
            {tab === 'contact' && (
              <motion.div
                className="bg-[#f8fafb] rounded-[12px] p-6 md:p-8 flex flex-col gap-4 border border-[#e5e5e5]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#231a16] text-[16px] font-medium">Contact Us</p>
                <div className="text-[#647576] text-[14px] leading-[1.8] flex flex-col gap-1">
                  <p>Business hours: 9:00 am – 5:00 pm (weekdays)</p>
                  <p>TEL: <span className="text-[#231a16]">03-4570-2220</span></p>
                  <p>Email: <span className="text-[#3a9944] cursor-pointer">hana@oneremit.jp</span></p>
                </div>
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
