export interface ContentData {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    logo: string;
    menuItems: Array<{
      label: string;
      href: string;
    }>;
    ctaButton: {
      text: string;
      href: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCTA: {
      text: string;
      href: string;
    };
    secondaryCTA: {
      text: string;
      href: string;
    };
    trustBar: string;
    badges: Array<{
      text: string;
      icon?: string;
      rating?: number;
    }>;
  };
  socialProof: {
    title: string;
    logos: Array<{
      name: string;
      image?: string;
    }>;
  };
  problem: {
    headline: string;
    subheadline: string;
    painPoints: Array<{
      icon: string;
      title: string;
      stats: Array<string>;
      description: string;
    }>;
    transition: string;
  };
  solution: {
    headline: string;
    subheadline: string;
    valueProps: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    callout: string;
  };
  howItWorks: {
    headline: string;
    subheadline: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
      details?: Array<string>;
    }>;
    timeSaving: {
      before: string;
      after: string;
    };
  };
  features: {
    headline: string;
    subheadline: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      benefits: Array<string>;
      extra?: string;
    }>;
  };
  testimonials: {
    headline: string;
    subheadline: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
      companyInfo: string;
      metrics: Array<{
        icon: string;
        text: string;
      }>;
    }>;
    aggregateMetrics: {
      title: string;
      items: Array<{
        icon: string;
        text: string;
      }>;
    };
  };
  useCases: {
    headline: string;
    subheadline: string;
    cases: Array<{
      icon: string;
      title: string;
      challenge: string;
      solution: Array<string>;
      results: Array<string>;
      bestFor: string;
    }>;
  };
  pricing: {
    headline: string;
    subheadline: string;
    plans: Array<{
      name: string;
      price: string;
      period: string;
      description: string;
      features: Array<string>;
      cta: {
        text: string;
        href: string;
      };
      badge?: string;
      popular?: boolean;
    }>;
    notes: Array<string>;
  };
  faq: {
    headline: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    tagline: string;
    sections: Array<{
      title: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    }>;
  };
}

// TODO: Replace this placeholder content with your actual content
export const siteContent: ContentData = {
  meta: {
    title: "MagiqAI - Transform Your Business with AI",
    description: "Easily create AI-powered solutions with market-leading results in just 30 minutes. No coding required.",
  },
  hero: {
    eyebrow: "AI-Powered Business Solutions",
    headline: "Transform Your Business with AI-Powered Solutions",
    subheadline: "Easily create intelligent, automated workflows and personalized experiences with market-leading results in just 30 minutes. No coding skills required.",
    primaryCTA: {
      text: "Start Free Trial",
      href: "#signup",
    },
    secondaryCTA: {
      text: "Watch Demo",
      href: "#demo",
    },
    trustBar: "Trusted by thousands of businesses worldwide",
    badges: [
      { text: "4.9 rating", rating: 4.9 },
      { text: "1k+ community members" },
      { text: "4.8 rating", rating: 4.8 },
    ],
  },
  socialProof: {
    title: "Used daily by more than 6,000 small and large businesses",
    logos: [
      { name: "Google" },
      { name: "Microsoft" },
      { name: "Amazon" },
      { name: "Meta" },
      { name: "Salesforce" },
      { name: "Adobe" },
      { name: "Shopify" },
      { name: "Stripe" },
    ],
  },
  stats: {
    title: "Why You Need MagiqAI",
    subtitle: "Traditional solutions are slow, complex, and expensive. MagiqAI is built for today's fast-paced world.",
    items: [
      {
        value: "700%",
        label: "Higher Conversion",
        description: "Compared to traditional automation tools"
      },
      {
        value: "42x",
        label: "Faster Implementation",
        description: "Build in minutes, not months"
      },
      {
        value: "300%",
        label: "Better ROI",
        description: "More value from every customer"
      },
    ],
  },
  features: {
    title: "All You Need to Grow in One Place",
    subtitle: "The fastest AI platform you'll ever use. Build your first solution in just 30 minutes, track key metrics, and scale seamlessly - all in one beautifully designed platform.",
    items: [
      {
        title: "AI-Powered Automation",
        description: "Automate complex workflows with intelligent AI that learns and adapts to your business needs.",
      },
      {
        title: "Real-Time Analytics",
        description: "Gain actionable insights with real-time dashboards that show exactly what's working.",
      },
      {
        title: "Smart Integrations",
        description: "Connect seamlessly with all your favorite tools - no technical knowledge required.",
      },
      {
        title: "Flexible CRM",
        description: "Manage, track, and close deals with a CRM that adapts to your workflow.",
      },
      {
        title: "Team Collaboration",
        description: "Create workspaces for your team and clients with granular access control.",
      },
      {
        title: "Mobile-First Design",
        description: "Built for modern businesses - works perfectly on any device, anywhere.",
      },
    ],
  },
  screenshots: {
    title: "See It In Action",
    subtitle: "Powerful features designed for modern teams",
    items: [
      {
        image: "/images/screenshot-1.png", // TODO: Replace with actual screenshot path
        title: "Intuitive Dashboard",
        description: "Monitor all your metrics in one beautiful, easy-to-use interface.",
        category: "Dashboard",
      },
      {
        image: "/images/screenshot-2.png", // TODO: Replace with actual screenshot path
        title: "Advanced Analytics",
        description: "Deep dive into your data with powerful visualization tools.",
        category: "Analytics",
      },
      {
        image: "/images/screenshot-3.png", // TODO: Replace with actual screenshot path
        title: "Collaboration Tools",
        description: "Work together seamlessly with real-time collaboration features.",
        category: "Collaboration",
      },
    ],
  },
  testimonials: {
    title: "Results That Speak for Themselves",
    subtitle: "We asked our customers to share their results. Here's what they said 👇",
    items: [
      {
        quote: "Generated 8,000 qualified leads in two weeks with one campaign. The AI optimization is insane.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "Forward Digital",
        metric: "8,000 leads in 2 weeks",
      },
      {
        quote: "It's so powerful - the difference is that it's built for modern businesses. Absolutely game-changing for our workflow.",
        author: "Michael Chen",
        role: "Founder",
        company: "GrowthCat",
        metric: "$10M ARR in 3 years",
      },
      {
        quote: "I built our entire automation system in less than 30 minutes. That same system made over $50,000 in less than 10 days.",
        author: "Emily Rodriguez",
        role: "Marketing Director",
        company: "ScaleUp Inc",
        metric: "$50K in 10 days",
      },
      {
        quote: "Generated over 10,000 new customers in three months. The platform pays for itself 100x over.",
        author: "David Park",
        role: "Growth Lead",
        company: "Venture Labs",
        metric: "10,000+ customers",
      },
    ],
  },
  community: {
    title: "Become an Expert. For Free.",
    subtitle: "Not an expert? No problem! Our free academy, weekly live calls, proven templates, and thriving community take you by the hand—step by step to your success.",
    items: [
      {
        title: "Community & Network",
        description: "Where the most advanced professionals share their most valuable insights. Join 1,000+ members daily.",
        cta: {
          text: "Join Community for Free",
          href: "#community",
        },
      },
      {
        title: "Free Weekly Live Training",
        description: "Every week, our team personally helps you optimize your strategies. No experience needed.",
        cta: {
          text: "Secure Your Spot for Free",
          href: "#training",
        },
      },
      {
        title: "Academy & Courses",
        description: "A free course library that guides you step by step to success - 30+ courses included.",
        cta: {
          text: "Watch the Courses",
          href: "#academy",
        },
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    items: [
      {
        question: "How does the free trial work?",
        answer: "Start with a 14-day free trial with full access to all features. No credit card required. Cancel anytime.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes! You can change your plan at any time. Changes take effect immediately and we'll prorate the difference.",
      },
      {
        question: "Is my data secure?",
        answer: "Absolutely. We use bank-level encryption (AES-256) and are SOC 2 Type II certified. Your data is stored in secure data centers with regular backups.",
      },
      {
        question: "Do you offer custom enterprise plans?",
        answer: "Yes, we offer custom plans for large organizations with dedicated support, SLA guarantees, and custom integrations.",
      },
      {
        question: "What kind of support do you provide?",
        answer: "All plans include email support. Pro and Enterprise plans get priority support with faster response times and dedicated account managers.",
      },
    ],
  },
  pricing: {
    title: "Ready to Get Started?",
    subtitle: "Join thousands of teams already using our platform",
    cta: {
      text: "Start Free Trial",
      href: "#signup",
    },
  },
  footer: {
    tagline: "Empowering teams with intelligent automation",
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "#security" },
          { label: "Roadmap", href: "#roadmap" },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "About", href: "#about" },
          { label: "Blog", href: "#blog" },
          { label: "Careers", href: "#careers" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Documentation", href: "#docs" },
          { label: "API", href: "#api" },
          { label: "Support", href: "#support" },
          { label: "Status", href: "#status" },
        ],
      },
      {
        title: "Legal",
        items: [
          { label: "Privacy", href: "#privacy" },
          { label: "Terms", href: "#terms" },
          { label: "Cookie Policy", href: "#cookies" },
        ],
      },
    ],
    social: [
      { platform: "Twitter", href: "https://twitter.com" },
      { platform: "LinkedIn", href: "https://linkedin.com" },
      { platform: "GitHub", href: "https://github.com" },
    ],
  },
};

