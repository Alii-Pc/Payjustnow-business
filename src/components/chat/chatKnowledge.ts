export interface QuickReply {
  label: string;
  query: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; url?: string; actionType?: string }[];
}

export const initialQuickReplies: QuickReply[] = [
  { label: '💳 How does PayJustNow work for merchants?', query: 'How does PayJustNow work for merchants?' },
  { label: '💰 What are the fees & payouts?', query: 'What are the fees and payouts?' },
  { label: '🛍️ How do I integrate Shopify or WooCommerce?', query: 'How do I integrate Shopify or WooCommerce?' },
  { label: '📱 How does PayUp in-store QR work?', query: 'How does in-store PayUp work?' },
  { label: '💵 Tell me about Business Funding', query: 'Tell me about Business Funding' },
  { label: '👩‍💼 Speak to a human support agent', query: 'Speak to a human agent' },
];

export function getBotReply(input: string): {
  text: string;
  actions?: { label: string; url?: string; actionType?: string }[];
} {
  const q = input.toLowerCase().trim();

  if (q.includes('work') || q.includes('how it works') || q.includes('bnpl') || q.includes('split')) {
    return {
      text: 'PayJustNow allows your customers to split their purchase into 3 equal, interest-free payments over 3 paychecks. As a merchant, you receive 100% of the funds upfront the very next day, and PayJustNow assumes all fraud and credit risk.',
      actions: [
        { label: 'Request a Demo', url: '/business-application' },
        { label: 'Learn More', url: '/bnpl' },
      ],
    };
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('payout') || q.includes('rate') || q.includes('price')) {
    return {
      text: 'There are zero setup fees, no monthly software costs, and no terminal rental charges. You only pay a competitive transaction fee per successful purchase, and settlements are paid directly into your business bank account the next business day.',
      actions: [
        { label: 'Get Fee Proposal', url: '/business-application' },
        { label: 'Merchant Portal', url: '/merchant-portal' },
      ],
    };
  }

  if (q.includes('shopify') || q.includes('woocommerce') || q.includes('integration') || q.includes('magento') || q.includes('plugin') || q.includes('api')) {
    return {
      text: 'We provide plug-and-play integrations for all major platforms including Shopify, WooCommerce, Magento, PrestaShop, and custom REST APIs. Installation takes less than 15 minutes with our guided walkthrough.',
      actions: [
        { label: 'View Integrations', url: '/integrations' },
        { label: 'Developer Support', url: '/business-support' },
      ],
    };
  }

  if (q.includes('payup') || q.includes('in-store') || q.includes('instore') || q.includes('pos') || q.includes('qr')) {
    return {
      text: 'PayUp is our standalone in-store checkout solution. Cashiers can generate dynamic QR codes on any smartphone, tablet, or POS terminal. Shoppers simply scan with their PayJustNow app to complete checkout in seconds with zero extra hardware costs.',
      actions: [
        { label: 'Discover PayUp', url: '/payup' },
        { label: 'Request PayUp Demo', url: '/business-application' },
      ],
    };
  }

  if (q.includes('funding') || q.includes('capital') || q.includes('loan') || q.includes('advance')) {
    return {
      text: 'PayJustNow Business Funding offers quick working capital from R50,000 up to R5,000,000 with flexible repayments linked directly to your daily turnover. No fixed monthly installments and approval takes as little as 24 hours.',
      actions: [
        { label: 'Apply for Funding', url: '/business-funding' },
      ],
    };
  }

  if (q.includes('human') || q.includes('agent') || q.includes('support') || q.includes('email') || q.includes('contact') || q.includes('call') || q.includes('phone')) {
    return {
      text: 'Our merchant support team is ready to assist! You can reach us directly via email at merchantsupport@payjustnow.com or submit a support ticket. Business hours: Mon–Fri 07h30–17h00, Sat 08h30–17h00, Sun 10h30–17h00.',
      actions: [
        { label: 'Email Support', url: 'mailto:merchantsupport@payjustnow.com' },
        { label: 'Business Support Center', url: '/business-support' },
      ],
    };
  }

  if (q.includes('status') || q.includes('operational') || q.includes('uptime') || q.includes('down')) {
    return {
      text: 'All PayJustNow core switching, checkout, and bank settlement gateways are currently 100% operational. You can view our live system metrics and historical uptime on our status page.',
      actions: [
        { label: 'View Operational Status', url: '/operational-status' },
      ],
    };
  }

  // Fallback intelligent reply
  return {
    text: "Thanks for reaching out! Whether you're looking to increase your conversion rate by 30%+, integrate PayJustNow into your online store, set up in-store PayUp, or apply for Business Funding, we're here to help.",
    actions: [
      { label: 'Request a Demo', url: '/business-application' },
      { label: 'Browse FAQs', url: '/business-support' },
      { label: 'Email Support Team', url: 'mailto:merchantsupport@payjustnow.com' },
    ],
  };
}
