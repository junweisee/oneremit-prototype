import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FEE_ROWS = [
  { country: 'Australia',    amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Bangladesh',   amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Canada',       amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'China',        amount: '¥ 1 ~ ¥ 100,000',   fee: '¥ 100' },
  { country: 'Hong Kong',    amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'India',        amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Indonesia',    amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Malaysia',     amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Mongolia',     amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Nepal',        amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Philippines',  amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Singapore',    amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Sri Lanka',    amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Korea',        amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Thailand',     amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'USA',          amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
  { country: 'Vietnam',      amount: '¥ 1 ~ ¥ 200,000',   fee: '¥ 100' },
];

const LIMIT_ROWS = [
  { country: 'Australia',    single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Bangladesh',   single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Canada',       single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'China',        single: '¥ 400,000',   monthly: '¥ 1,200,000' },
  { country: 'Hong Kong',    single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'India',        single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Indonesia',    single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Malaysia',     single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Mongolia',     single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Nepal',        single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Philippines',  single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Singapore',    single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Sri Lanka',    single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Korea',        single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Thailand',     single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'USA',          single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
  { country: 'Vietnam',      single: '¥ 1,000,000', monthly: '¥ 3,000,000' },
];

export function FeesLimitsPage() {
  const [tab, setTab] = useState<'fee' | 'limit'>('fee');

  const rows = tab === 'fee' ? FEE_ROWS : LIMIT_ROWS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex-1"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 md:py-16 flex flex-col gap-10">
        {/* Title */}
        <h1 className="text-[#231a16] text-[22px] md:text-[24px] font-bold">Fees and Limits</h1>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#e5e5e5]">
          {([
            { key: 'fee',   label: 'Remittance fee' },
            { key: 'limit', label: 'Remittance limit' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex flex-col gap-2 items-center shrink-0 cursor-pointer"
            >
              <span className={`text-[15px] font-medium ${tab === key ? 'text-[#3a9944]' : 'text-[#3f4e50]'}`}>
                {label}
              </span>
              <div className={`h-[3px] w-full rounded-full transition-colors duration-200 ${tab === key ? 'bg-[#3a9944]' : 'bg-transparent'}`} />
            </button>
          ))}
        </div>

        {/* Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="w-full overflow-x-auto rounded-[8px] border border-[#e5e5e5]"
          >
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="bg-[#f8fafb]">
                  <th className="text-left text-[#231a16] font-medium px-6 py-4 border-b border-[#e5e5e5] w-1/3">Country</th>
                  {tab === 'fee' ? (
                    <>
                      <th className="text-center text-[#231a16] font-medium px-6 py-4 border-b border-[#e5e5e5] w-1/3">Remittance amount</th>
                      <th className="text-center text-[#231a16] font-medium px-6 py-4 border-b border-[#e5e5e5] w-1/3">Remittance fee</th>
                    </>
                  ) : (
                    <>
                      <th className="text-center text-[#231a16] font-medium px-6 py-4 border-b border-[#e5e5e5] w-1/3">Per transaction limit</th>
                      <th className="text-center text-[#231a16] font-medium px-6 py-4 border-b border-[#e5e5e5] w-1/3">Monthly limit</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.country}
                    className="border-b border-[#e5e5e5] last:border-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.025 }}
                  >
                    <td className="text-[#231a16] px-6 py-4">{row.country}</td>
                    {'amount' in row ? (
                      <>
                        <td className="text-[#3f4e50] text-center px-6 py-4">{(row as typeof FEE_ROWS[0]).amount}</td>
                        <td className="text-[#3a9944] text-center px-6 py-4 font-medium">{(row as typeof FEE_ROWS[0]).fee}</td>
                      </>
                    ) : (
                      <>
                        <td className="text-[#3f4e50] text-center px-6 py-4">{(row as typeof LIMIT_ROWS[0]).single}</td>
                        <td className="text-[#3f4e50] text-center px-6 py-4">{(row as typeof LIMIT_ROWS[0]).monthly}</td>
                      </>
                    )}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
