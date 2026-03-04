export type Language = 'en' | 'ko' | 'ja';

export interface Translation {
  nav: {
    sendMoney: string;
    howToUse: string;
    aboutUs: string;
    help: string;
    login: string;
    signup: string;
  };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    desc: string;
  };
  calc: {
    rate: string;
    youSend: string;
    recipientGets: string;
    fee: string;
    feeValue: string;
    button: string;
  };
  features: {
    f1Title: string; f1Desc: string;
    f2Title: string; f2Desc: string;
    f3Title: string; f3Desc: string;
    f4Title: string; f4Desc: string;
  };
  promotions: {
    title: string; viewAll: string; readMore: string;
    p1Title: string; p1Date: string; p1Desc: string;
    p2Title: string; p2Date: string; p2Desc: string;
    p3Title: string; p3Date: string; p3Desc: string;
  };
  exchange: { title: string; updatedAt: string; viewAll: string; };
  notice: {
    title: string; viewAll: string;
    n1: string; n2: string; n3: string; n4: string; date: string;
  };
  footer: {
    quickLinks: string; legal: string; support: string; copyright: string;
    aboutUs: string; usageGuide: string; feesLimits: string; sendMoney: string;
    privacy: string; terms: string; aml: string; fraud: string; antisocial: string;
    notice: string; faq: string; contact: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: { sendMoney: "Send money", howToUse: "How to use", aboutUs: "About us", help: "Help", login: "Log in", signup: "Sign up" },
    hero: { titleBefore: "Send money to your ", titleHighlight: "loved ones", titleAfter: ", instantly", desc: "Fast, secure, and affordable international money transfers. Send to Korea, Philippines, Vietnam and more with the best exchange rates." },
    calc: { rate: "Rate", youSend: "You send", recipientGets: "Recipient gets", fee: "Total included fee", feeValue: "100 Yen", button: "Send money now" },
    features: {
      f1Title: "Fund transfer operators according to the Fund Payment Act",
      f1Desc: "The customer deposits requested by the transfer shall be deposited in accordance with the From overseas until the recipient actually receives the money It is secured and protected by the Legal Affairs Bureau",
      f2Title: "Easy money transfer service using PC and smart phone",
      f2Desc: "For convenient money transfer service, PC, smartphone, Various remittance such as FAX, telephone application, branch visit reception We provide the service",
      f3Title: "Nepal, Vietnam and other overseas remittance networks",
      f3Desc: "Your family back home can receive your remittance quickly and by transferring it to the recipient's bank account or by collecting it in cash at a bank counter (available in some countries).",
      f4Title: "View and issue remittance via online and customer center",
      f4Desc: "We provide tax evidences for remittances and transactions to members as well as non-members.",
    },
    promotions: {
      title: "Promotions", viewAll: "View all", readMore: "Read more",
      p1Title: "Send Your First Transfer For ¥500 Bonus!", p1Date: "2026-01-21",
      p1Desc: "New customers receive ¥500 cashback on their first international money transfer of ¥50,000 or more",
      p2Title: "Zero Transfer Fees This Month", p2Date: "2026-01-21",
      p2Desc: "Send money to your family back home with zero transfer fees. Limited time offer for all destinations.",
      p3Title: "Invite Friends, Earn ¥1,000 Each", p3Date: "2026-01-21",
      p3Desc: "Share One Remittance with friends and family. When they make their first transfer, you both get ¥1,000 bonus",
    },
    exchange: { title: "Exchange Rate Information", updatedAt: "2026-02-27 10:30", viewAll: "View all" },
    notice: {
      title: "Notice", viewAll: "View all",
      n1: "Important Notice Regarding Remittance Services to Korea",
      n2: "Regarding Lawson ATM deposit service system malfunction",
      n3: "Important Notice Regarding Remittance Services to Korea",
      n4: "Regarding Lawson ATM deposit service system malfunction",
      date: "2025-12-12",
    },
    footer: {
      quickLinks: "Quick links", legal: "Legal", support: "Support",
      copyright: "Copyright ⓒ 2025 C&B Inc. All rights reserved.",
      aboutUs: "About us", usageGuide: "Usage guide", feesLimits: "Fees and limits", sendMoney: "Send money",
      privacy: "Privacy", terms: "Terms of Service", aml: "AML/CFT Policy", fraud: "Caution on fraud", antisocial: "Policy on anti-social forces",
      notice: "Notice", faq: "FAQ", contact: "Contact us",
    },
  },
  ko: {
    nav: { sendMoney: "송금하기", howToUse: "이용방법", aboutUs: "회사소개", help: "도움말", login: "로그인", signup: "회원가입" },
    hero: { titleBefore: "소중한 사람들에게\n", titleHighlight: "안전하고 빠르게", titleAfter: " 송금하세요", desc: "빠르고 안전하며 합리적인 가격의 국제 송금 서비스입니다. 한국, 필리핀, 베트남 등으로 최적의 환율로 송금하세요." },
    calc: { rate: "환율", youSend: "보내는 금액", recipientGets: "받는 금액", fee: "총 수수료 포함", feeValue: "100엔", button: "지금 송금하기" },
    features: {
      f1Title: "자금결제법에 의한 자금이동업자",
      f1Desc: "고객님의 송금 요청 금액은 해외에서부터 수취인이 실제로 받을 때까지 공탁에 의해 보호되며, 법무국에 의해 보증됩니다.",
      f2Title: "PC와 스마트폰으로 간편한 송금 서비스",
      f2Desc: "PC, 스마트폰, FAX, 전화 신청, 지점 방문 등 다양한 방법으로 편리하게 송금 서비스를 이용하실 수 있습니다.",
      f3Title: "네팔, 베트남 등 해외 송금 네트워크",
      f3Desc: "고국에 있는 가족에게 빠르게 송금할 수 있으며, 수취인의 은행 계좌로 이체하거나 은행 카운터에서 현금으로 수령할 수 있습니다.",
      f4Title: "온라인 및 고객센터를 통한 송금 조회 및 발급",
      f4Desc: "회원 및 비회원 모두에게 송금 및 거래에 대한 세금 영수증을 제공합니다.",
    },
    promotions: {
      title: "프로모션", viewAll: "전체보기", readMore: "더 보기",
      p1Title: "첫 송금 시 ¥500 보너스!", p1Date: "2026-01-21",
      p1Desc: "신규 고객님은 ¥50,000 이상 첫 국제 송금 시 ¥500 캐시백을 받으실 수 있습니다.",
      p2Title: "이번 달 송금 수수료 무료", p2Date: "2026-01-21",
      p2Desc: "수수료 없이 고국의 가족에게 송금하세요. 모든 목적지에 한시적으로 제공됩니다.",
      p3Title: "친구 초대 시 각 ¥1,000 적립", p3Date: "2026-01-21",
      p3Desc: "친구와 가족에게 원리밋을 공유하세요. 첫 송금을 완료하면 둘 다 ¥1,000 보너스를 받습니다.",
    },
    exchange: { title: "환율 정보", updatedAt: "2026-02-27 10:30", viewAll: "전체보기" },
    notice: {
      title: "공지사항", viewAll: "전체보기",
      n1: "한국 송금 서비스 관련 중요 공지", n2: "로손 ATM 입금 서비스 시스템 장애 관련 공지",
      n3: "한국 송금 서비스 관련 중요 공지", n4: "로손 ATM 입금 서비스 시스템 장애 관련 공지",
      date: "2025-12-12",
    },
    footer: {
      quickLinks: "빠른 링크", legal: "법적 고지", support: "고객지원",
      copyright: "Copyright ⓒ 2025 C&B Inc. 모든 권리 보유.",
      aboutUs: "회사소개", usageGuide: "이용 가이드", feesLimits: "수수료 및 한도", sendMoney: "송금하기",
      privacy: "개인정보처리방침", terms: "이용약관", aml: "자금세탁방지 정책", fraud: "사기 주의", antisocial: "반사회세력 대응 방침",
      notice: "공지사항", faq: "자주 묻는 질문", contact: "문의하기",
    },
  },
  ja: {
    nav: { sendMoney: "送金する", howToUse: "使い方", aboutUs: "会社概要", help: "ヘルプ", login: "ログイン", signup: "新規登録" },
    hero: { titleBefore: "大切な方へ、", titleHighlight: "すぐに送金", titleAfter: "できます", desc: "迅速、安全、そして手頃な価格の国際送金サービス。韓国、フィリピン、ベトナムなどへ最良の為替レートで送金できます。" },
    calc: { rate: "レート", youSend: "送金額", recipientGets: "受取額", fee: "手数料込み合計", feeValue: "100円", button: "今すぐ送金" },
    features: {
      f1Title: "資金決済法に基づく資金移動業者",
      f1Desc: "お客様の送金依頼金額は、海外から受取人が実際に受け取るまでの間、供託により保護されており、法務局によって保証されています。",
      f2Title: "PCとスマートフォンで簡単送金サービス",
      f2Desc: "PC、スマートフォン、FAX、電話申込、窓口来店など、様々な方法で便利に送金サービスをご利用いただけます。",
      f3Title: "ネパール、ベトナムなど海外送金ネットワーク",
      f3Desc: "母国のご家族へ迅速に送金でき、受取人の銀行口座への振込や銀行窓口での現金受取が可能です（一部の国で利用可能）。",
      f4Title: "オンライン・カスタマーセンターでの送金照会・発行",
      f4Desc: "会員・非会員を問わず、送金・取引に関する税務証明書を発行いたします。",
    },
    promotions: {
      title: "プロモーション", viewAll: "すべて表示", readMore: "続きを読む",
      p1Title: "初回送金で¥500ボーナス！", p1Date: "2026-01-21",
      p1Desc: "新規のお客様は¥50,000以上の初回国際送金で¥500キャッシュバックを受け取れます。",
      p2Title: "今月の送金手数料無料", p2Date: "2026-01-21",
      p2Desc: "手数料なしで母国のご家族に送金できます。全ての目的地への期間限定オファーです。",
      p3Title: "友達紹介で各¥1,000獲得", p3Date: "2026-01-21",
      p3Desc: "ワンリミットを友達や家族と共有しましょう。初回送金を完了すると、二人とも¥1,000ボーナスをもらえます。",
    },
    exchange: { title: "為替レート情報", updatedAt: "2026-02-27 10:30", viewAll: "すべて表示" },
    notice: {
      title: "お知らせ", viewAll: "すべて表示",
      n1: "韓国への送金サービスに関する重要なお知らせ",
      n2: "ローソンATM入金サービスシステム障害に関するお知らせ",
      n3: "韓国への送金サービスに関する重要なお知らせ",
      n4: "ローソンATM入金サービスシステム障害に関するお知らせ",
      date: "2025-12-12",
    },
    footer: {
      quickLinks: "クイックリンク", legal: "法的情報", support: "サポート",
      copyright: "Copyright ⓒ 2025 C&B Inc. 全著作権所有。",
      aboutUs: "会社概要", usageGuide: "ご利用ガイド", feesLimits: "手数料・限度額", sendMoney: "送金する",
      privacy: "プライバシーポリシー", terms: "利用規約", aml: "マネーロンダリング防止方針", fraud: "詐欺注意", antisocial: "反社会的勢力への対応方針",
      notice: "お知らせ", faq: "よくある質問", contact: "お問い合わせ",
    },
  },
};

export const CURRENCIES = [
  { code: 'KRW', name: 'Korean Won',       emoji: '🇰🇷', rate: 9.4745, decimals: 0 },
  { code: 'PHP', name: 'Philippine Peso',  emoji: '🇵🇭', rate: 0.376,  decimals: 2 },
  { code: 'VND', name: 'Vietnamese Dong',  emoji: '🇻🇳', rate: 164.4,  decimals: 0 },
  { code: 'USD', name: 'US Dollar',        emoji: '🇺🇸', rate: 0.0067, decimals: 4 },
  { code: 'CNY', name: 'Chinese Yuan',     emoji: '🇨🇳', rate: 0.049,  decimals: 3 },
  { code: 'NPR', name: 'Nepalese Rupee',   emoji: '🇳🇵', rate: 0.893,  decimals: 2 },
];

export const LANGUAGES = [
  { code: 'en' as Language, label: 'EN', name: 'English' },
  { code: 'ko' as Language, label: 'KR', name: '한국어' },
  { code: 'ja' as Language, label: 'JA', name: '日本語' },
];

export function formatReceiveAmount(amount: number, decimals: number): string {
  if (decimals === 0) return Math.floor(amount).toLocaleString();
  return amount.toFixed(decimals);
}
