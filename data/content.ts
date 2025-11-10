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
  navigation: {
    logo: "MagiqAI",
    menuItems: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "Get Started",
      href: "#signup",
    },
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
  problem: {
    headline: "The Challenges You Face Every Day",
    subheadline: "Running a business shouldn't be this complicated",
    painPoints: [
      {
        icon: "⏰",
        title: "Time-Consuming Manual Work",
        stats: ["Hours spent on repetitive tasks", "Limited time for strategic work"],
        description: "Your team spends too much time on manual processes that could be automated.",
      },
      {
        icon: "💰",
        title: "High Costs, Low Efficiency",
        stats: ["Expensive tools with limited ROI", "Wasted resources"],
        description: "You're paying for multiple tools but not seeing the results you need.",
      },
      {
        icon: "📊",
        title: "Lack of Insights",
        stats: ["Data scattered across platforms", "No clear visibility"],
        description: "You have data everywhere but no clear picture of what's working.",
      },
      {
        icon: "🔗",
        title: "Integration Headaches",
        stats: ["Complex integrations", "Broken workflows"],
        description: "Your tools don't talk to each other, creating silos and inefficiencies.",
      },
    ],
    transition: "There's a better way. And it starts with MagiqAI.",
  },
  solution: {
    headline: "Everything You Need, All in One Place",
    subheadline: "Streamline your operations with intelligent automation and powerful insights",
    valueProps: [
      {
        icon: "🚀",
        title: "Automate Everything",
        description: "Eliminate manual work with intelligent automation that adapts to your needs.",
      },
      {
        icon: "📈",
        title: "Real-Time Insights",
        description: "Get a complete view of your business with unified dashboards and analytics.",
      },
      {
        icon: "🔌",
        title: "Seamless Integration",
        description: "Connect all your tools in one place with our powerful integration platform.",
      },
    ],
    callout: "Join thousands of businesses that have transformed their operations with MagiqAI.",
  },
  howItWorks: {
    headline: "How It Works",
    subheadline: "Get started in minutes, see results in days",
    steps: [
      {
        number: 1,
        title: "Sign Up",
        description: "Create your account and set up your workspace in minutes.",
        details: [],
      },
      {
        number: 2,
        title: "Connect Your Tools",
        description: "Integrate with your existing tools and platforms.",
        details: [],
      },
      {
        number: 3,
        title: "Automate Your Workflows",
        description: "Set up intelligent automation to streamline your processes.",
        details: [],
      },
      {
        number: 4,
        title: "See Results",
        description: "Watch your efficiency improve and your team focus on what matters.",
        details: [],
      },
    ],
    timeSaving: {
      before: "Weeks of setup",
      after: "Minutes to deploy",
    },
  },
  useCases: {
    headline: "Built for Every Team",
    subheadline: "See how different teams use MagiqAI to transform their work",
    cases: [
      {
        icon: "💼",
        title: "Sales Teams",
        challenge: "Managing leads, tracking deals, and closing more business",
        solution: [
          "Automated lead management",
          "Pipeline tracking",
          "Deal insights"
        ],
        results: [
          "30% more deals closed",
          "50% time savings",
          "Better forecast accuracy"
        ],
        bestFor: "Sales managers, AEs, SDRs",
      },
      {
        icon: "📢",
        title: "Marketing Teams",
        challenge: "Running campaigns, tracking performance, and proving ROI",
        solution: [
          "Campaign automation",
          "Performance tracking",
          "ROI analytics"
        ],
        results: [
          "2X campaign efficiency",
          "Real-time insights",
          "Proven ROI"
        ],
        bestFor: "Marketing managers, CMOs, Growth teams",
      },
    ],
  },
  features: {
    headline: "All You Need to Grow in One Place",
    subheadline: "The fastest AI platform you'll ever use. Build your first solution in just 30 minutes, track key metrics, and scale seamlessly - all in one beautifully designed platform.",
    items: [
      {
        icon: "🤖",
        title: "AI-Powered Automation",
        description: "Automate complex workflows with intelligent AI that learns and adapts to your business needs.",
        benefits: [
          "Intelligent workflow automation",
          "Adaptive learning algorithms",
          "Seamless integration capabilities"
        ],
      },
      {
        icon: "📊",
        title: "Real-Time Analytics",
        description: "Gain actionable insights with real-time dashboards that show exactly what's working.",
        benefits: [
          "Real-time data visualization",
          "Customizable dashboards",
          "Advanced reporting tools"
        ],
      },
      {
        icon: "🔌",
        title: "Smart Integrations",
        description: "Connect seamlessly with all your favorite tools - no technical knowledge required.",
        benefits: [
          "One-click integrations",
          "API access",
          "Webhook support"
        ],
      },
      {
        icon: "💼",
        title: "Flexible CRM",
        description: "Manage, track, and close deals with a CRM that adapts to your workflow.",
        benefits: [
          "Customizable pipelines",
          "Contact management",
          "Deal tracking"
        ],
      },
      {
        icon: "👥",
        title: "Team Collaboration",
        description: "Create workspaces for your team and clients with granular access control.",
        benefits: [
          "Role-based permissions",
          "Team workspaces",
          "Client portals"
        ],
      },
      {
        icon: "📱",
        title: "Mobile-First Design",
        description: "Built for modern businesses - works perfectly on any device, anywhere.",
        benefits: [
          "Responsive design",
          "Mobile apps",
          "Offline capabilities"
        ],
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
    headline: "Results That Speak for Themselves",
    subheadline: "We asked our customers to share their results. Here's what they said 👇",
    items: [
      {
        quote: "Generated 8,000 qualified leads in two weeks with one campaign. The AI optimization is insane.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "Forward Digital",
        companyInfo: "Digital Marketing Agency • 50+ employees",
        metrics: [
          { icon: "📈", text: "8,000 leads in 2 weeks" }
        ],
      },
      {
        quote: "It's so powerful - the difference is that it's built for modern businesses. Absolutely game-changing for our workflow.",
        author: "Michael Chen",
        role: "Founder",
        company: "GrowthCat",
        companyInfo: "SaaS Platform • $10M ARR",
        metrics: [
          { icon: "💰", text: "$10M ARR in 3 years" }
        ],
      },
      {
        quote: "I built our entire automation system in less than 30 minutes. That same system made over $50,000 in less than 10 days.",
        author: "Emily Rodriguez",
        role: "Marketing Director",
        company: "ScaleUp Inc",
        companyInfo: "B2B Services • 200+ employees",
        metrics: [
          { icon: "⚡", text: "$50K in 10 days" }
        ],
      },
      {
        quote: "Generated over 10,000 new customers in three months. The platform pays for itself 100x over.",
        author: "David Park",
        role: "Growth Lead",
        company: "Venture Labs",
        companyInfo: "Tech Startup • Series A",
        metrics: [
          { icon: "🚀", text: "10,000+ customers" }
        ],
      },
    ],
    aggregateMetrics: {
      title: "Average Results Across All Customers",
      items: [
        { icon: "📈", text: "300% average growth" },
        { icon: "⚡", text: "50% time savings" },
        { icon: "💰", text: "5X ROI improvement" }
      ],
    },
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
    headline: "Frequently Asked Questions",
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
    headline: "Ready to Get Started?",
    subheadline: "Join thousands of teams already using our platform",
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for small teams getting started",
        features: [
          "Up to 5 team members",
          "Basic automation",
          "Email support",
          "10 integrations"
        ],
        cta: {
          text: "Start Free Trial",
          href: "#signup",
        },
      },
      {
        name: "Professional",
        price: "$99",
        period: "/month",
        description: "For growing teams that need more power",
        features: [
          "Up to 25 team members",
          "Advanced automation",
          "Priority support",
          "Unlimited integrations",
          "Custom workflows"
        ],
        cta: {
          text: "Start Free Trial",
          href: "#signup",
        },
        badge: "Most Popular",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations with custom needs",
        features: [
          "Unlimited team members",
          "Enterprise automation",
          "Dedicated support",
          "Custom integrations",
          "SSO & advanced security",
          "Custom SLA"
        ],
        cta: {
          text: "Contact Sales",
          href: "#contact",
        },
      },
    ],
    notes: [
      "14-day free trial on all plans",
      "No credit card required",
      "Cancel anytime"
    ],
  },
  footer: {
    tagline: "Empowering teams with intelligent automation",
    sections: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "#security" },
          { label: "Roadmap", href: "#roadmap" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Blog", href: "#blog" },
          { label: "Careers", href: "#careers" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#docs" },
          { label: "API", href: "#api" },
          { label: "Support", href: "#support" },
          { label: "Status", href: "#status" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#privacy" },
          { label: "Terms", href: "#terms" },
          { label: "Cookie Policy", href: "#cookies" },
        ],
      },
    ],
  },
};

