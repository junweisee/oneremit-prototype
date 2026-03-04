import { motion } from 'motion/react';
import { Translation } from '../translations';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import svgPaths from '../../imports/svg-437bv9yw2l';
import imgPromotionImage from 'figma:asset/d3016ba6bb8aa3edcc77914f5be684ef2912dd32.png';
import imgPromotionImage1 from 'figma:asset/191d832370083d8d5169228fe5d13a52173bba78.png';
import imgPromotionImage2 from 'figma:asset/d2cabf5d2339b3084dae91160ce10494692d7190.png';

interface PromotionCardProps {
  image: string;
  title: string;
  date: string;
  desc: string;
  readMore: string;
  delay?: number;
}

function PromotionCard({ image, title, date, desc, readMore, delay = 0 }: PromotionCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden flex flex-col shrink-0 w-[280px] sm:w-auto sm:flex-1 border border-[#e5e5e5]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="h-[180px] md:h-[201px] overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 p-5 md:p-6 flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-[#231a16] text-[15px] font-medium leading-snug">{title}</p>
          <p className="text-[#3f4e50] text-[13px] leading-relaxed">{date}</p>
          <p className="text-[#3f4e50] text-[13px] leading-relaxed">{desc}</p>
        </div>
        <button className="flex items-center gap-2 cursor-pointer">
          <span className="text-[#3a9944] font-bold text-[15px]">{readMore}</span>
          <div className="w-[6px] h-[10px] rotate-180">
            <svg viewBox="0 0 6 10" fill="none" className="w-full h-full">
              <path clipRule="evenodd" d={svgPaths.pd3f2000} fill="#3A9944" fillRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </motion.div>
  );
}

interface PromotionsSectionProps {
  t: Translation;
}

export function PromotionsSection({ t }: PromotionsSectionProps) {
  const cards = [
    { image: imgPromotionImage, title: t.promotions.p1Title, date: t.promotions.p1Date, desc: t.promotions.p1Desc },
    { image: imgPromotionImage1, title: t.promotions.p2Title, date: t.promotions.p2Date, desc: t.promotions.p2Desc },
    { image: imgPromotionImage2, title: t.promotions.p3Title, date: t.promotions.p3Date, desc: t.promotions.p3Desc },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-8">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#231a16] text-[20px] font-medium">{t.promotions.title}</h2>
          <div className="flex items-center gap-2">
            <button className="size-10 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center cursor-pointer opacity-50">
              <ChevronLeft size={18} color="#647576" />
            </button>
            <button className="size-10 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center cursor-pointer">
              <ChevronRight size={18} color="#647576" />
            </button>
          </div>
        </motion.div>

        {/* Cards – horizontal scroll on mobile, row on sm+ */}
        <div className="flex gap-5 overflow-x-auto pb-2 sm:pb-0 sm:overflow-x-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {cards.map((card, i) => (
            <PromotionCard
              key={i}
              image={card.image}
              title={card.title}
              date={card.date}
              desc={card.desc}
              readMore={t.promotions.readMore}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="border-2 border-[#3a9944] text-[#3a9944] font-medium text-[15px] px-8 py-3 rounded-[10px] cursor-pointer bg-white">
            {t.promotions.viewAll}
          </button>
        </motion.div>
      </div>
    </section>
  );
}