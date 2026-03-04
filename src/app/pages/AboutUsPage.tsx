import { motion } from "motion/react";
import { CountryGrid } from "../components/CountryGrid";
import imgHeaderImage from """";
import imgPartnerLogo from """"; // MUFG
import imgPartnerLogo1 from """"; // Mizuho
import imgPartnerLogo2 from """"; // Rakuten Bank

const JOURNEY = [
  {
    month: "May",
    year: "2017",
    title: "Founded in Tokyo",
    desc: "C&B Inc. established to provide reliable international money transfer services to Asian communities in Japan.",
  },
  {
    month: "July",
    year: "2017",
    title: "Reached 5,000 Customers",
    desc: "Expanded our network to include Nepal and Bangladesh. Launched our customer loyalty program and introduced competitive exchange rates that beat traditional banks by up to 3%.",
  },
  {
    month: "Aug",
    year: "2017",
    title: "Regional Expansion",
    desc: "Surpassed ¥5 billion in total transfers and served over 50,000 customers. Received 4.8/5 rating from customer reviews. Preparing for South Korea expansion.",
  },
  {
    month: "Sep",
    year: "2017",
    title: "Seoul Branch Opening",
    desc: "Opening our first international branch in Seoul, South Korea, to serve the growing Korean community and expand our reach across East Asia.",
  },
  {
    month: "Sep",
    year: "2017",
    title: "Foundation",
    desc: "Opening our first international branch in Seoul, South Korea, to serve the growing Korean community and expand our reach across East Asia.",
  },
];

const STATS = [
  { value: "7+", label: "Years in the industry" },
  { value: "50,000+", label: "Customers served" },
  { value: "¥5B+", label: "Total remitted value" },
];

const PARTNER_BANKS = [
  { src: imgPartnerLogo, w: 161, h: 58 },
  { src: imgPartnerLogo1, w: 135, h: 40 },
  { src: imgPartnerLogo2, w: 174, h: 92 },
  { src: imgPartnerLogo1, w: 135, h: 40 },
  { src: imgPartnerLogo, w: 161, h: 58 },
];

export function AboutUsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-white to-[#fff8ef] w-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-[#231a16] text-[22px] md:text-[24px] font-bold leading-[1.3]">
              C&amp;B Inc. has been a steadfast presence in Tokyo for more than
              7 years, providing secure and regulated money transfer services
            </h1>
            <p className="text-[#647576] text-[14px] font-normal leading-[1.5]">
              Since our establishment in May 2017, we've prioritized
              transparency, integrity, and customer satisfaction. We offer
              reliable and efficient remittance solutions. Our commitment to
              cutting-edge technology ensures seamless transactions. Join
              C&amp;B One Remit as we empower partners with a trusted network
              for streamlined cross-border financial services.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#231a16] text-[15px] font-medium">
                  Mission
                </p>
                <p className="text-[#647576] text-[14px] leading-[1.5]">
                  To pursue new forms of overseas remittance
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#231a16] text-[15px] font-medium">Vision</p>
                <ul className="list-disc text-[#647576] text-[14px] leading-[1.5] pl-5 flex flex-col gap-1">
                  <li>
                    To provide overseas remittance and global payment systems
                    that evoke emotion
                  </li>
                  <li>Offer dynamic solutions to diverse needs</li>
                  <li>Deliver faster, simpler, and safer services</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="rounded-[16px] overflow-hidden w-full md:w-[420px] aspect-[650/432]">
              <img
                src={imgHeaderImage}
                alt="C&B Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey ──────────────────────────────────────────────────── */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-12">
          <motion.h2
            className="text-[#231a16] text-[22px] md:text-[24px] font-bold"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Our Journey
          </motion.h2>
          <div className="flex flex-col gap-8">
            {JOURNEY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="flex gap-10 md:gap-16 items-start">
                  <div className="flex flex-col gap-1 shrink-0 w-[52px]">
                    <p className="text-[#647576] text-[13px] leading-[1.5]">
                      {item.month}
                    </p>
                    <p className="text-[#231a16] text-[18px] font-medium">
                      {item.year}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-3 pb-8 border-b border-[#e5e5e5] last:border-0 last:pb-0">
                    <p className="text-[#231a16] text-[15px] font-medium">
                      {item.title}
                    </p>
                    <p className="text-[#647576] text-[14px] leading-[1.5]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="bg-[#3f4e50] w-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-white">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-[30px] md:text-[32px] font-bold text-center">
                {stat.value}
              </p>
              <p className="text-[15px] md:text-[16px] leading-[1.5] text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Service Countries ────────────────────────────────────────── */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-12">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-[#231a16] text-[22px] md:text-[24px] font-bold">
              Our Service Countries
            </h2>
            <p className="text-[#647576] text-[14px] md:text-[16px] leading-[1.5]">
              With a global reach spanning 18 countries from Japan and an
              additional presence in Seoul, South Korea, we ensure reliable and
              seamless financial transactions for our clients.
            </p>
          </motion.div>

          {/* Figma SVG flag set – justify-between / items-start (exact Figma layout) */}
          <CountryGrid />
        </div>
      </section>

      {/* ── Partner Banks ────────────────────────────────────────────── */}
      <section className="w-full pb-12 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col gap-8">
          <motion.h2
            className="text-[#231a16] text-[22px] md:text-[24px] font-bold"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Our Partner Banks
          </motion.h2>
          <motion.div
            className="flex items-center justify-between w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {PARTNER_BANKS.map((bank, i) => (
              <motion.div
                key={i}
                className="relative shrink-0"
                style={{ width: bank.w, height: bank.h }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <img
                  src={bank.src}
                  alt="Partner Bank"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
