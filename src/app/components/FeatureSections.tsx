import { motion } from "motion/react";
import { Translation } from "../translations";
import imgInformationImage from "../../assets/landscape-placeholder.svg";
import imgServiceImage from "../../assets/landscape-placeholder.svg";
import imgNetworkImage from "../../assets/landscape-placeholder.svg";
import imgRemittanceImage from "../../assets/landscape-placeholder.svg";

interface FeatureBlockProps {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}

function FeatureBlock({
  title,
  desc,
  image,
  imageAlt,
  reverse = false,
  delay = 0,
}: FeatureBlockProps) {
  return (
    <motion.div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Text */}
      <div className="flex-1 min-w-0 flex flex-col gap-5">
        <h2 className="text-[#231a16] font-bold text-[20px] md:text-[24px] leading-snug">
          {title}
        </h2>
        <p className="text-[#3f4e50] text-[15px] md:text-[16px] leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Image */}
      <motion.div
        className="w-full md:w-[46%] rounded-2xl overflow-hidden aspect-[575/369] shrink-0"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: "easeOut" }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

interface FeatureSectionsProps {
  t: Translation;
}

export function FeatureSections({ t }: FeatureSectionsProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-16 md:py-20 flex flex-col gap-16 md:gap-20">
      <FeatureBlock
        title={t.features.f1Title}
        desc={t.features.f1Desc}
        image={imgInformationImage}
        imageAlt="Fund transfer"
        reverse={false}
        delay={0}
      />
      <FeatureBlock
        title={t.features.f2Title}
        desc={t.features.f2Desc}
        image={imgServiceImage}
        imageAlt="Easy service"
        reverse={true}
        delay={0}
      />
      <FeatureBlock
        title={t.features.f3Title}
        desc={t.features.f3Desc}
        image={imgNetworkImage}
        imageAlt="Network"
        reverse={false}
        delay={0}
      />
      <FeatureBlock
        title={t.features.f4Title}
        desc={t.features.f4Desc}
        image={imgRemittanceImage}
        imageAlt="Remittance"
        reverse={true}
        delay={0}
      />
    </section>
  );
}
