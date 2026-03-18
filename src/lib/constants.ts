import type { Service, Step, EventInfo, FAQItem } from "@/types";

export const SITE = {
  name: "XPRSV Tech",
  tagline: "AI that actually works for you.",
  description:
    "I'm Travis Brown. I help people and businesses in LA cut through the AI noise and build real solutions.",
  location: "Los Angeles, CA",
  email: "hello@xprsvtech.com",
  social: {
    linkedin: "https://linkedin.com/in/travisbrown",
    twitter: "https://x.com/xprsvtech",
    instagram: "https://instagram.com/xprsvtech",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
] as const;

export const SERVICES: Service[] = [
  {
    title: "Individual Consultation",
    description:
      "You'll walk away knowing exactly which AI tools fit your life, how to use them, and a custom plan you can follow on your own.",
    price: "$50",
    rate: "/ hour",
    features: [
      "Personalized AI tool recommendations",
      "Hands-on setup and walkthrough",
      "Custom action plan you keep",
      "Follow-up support via email",
    ],
    href: "/book/individual",
    badge: "Personal",
  },
  {
    title: "Business Consultation",
    description:
      "I'll audit your workflows, identify where AI saves real time and money, and build an implementation roadmap your team can execute.",
    price: "$150",
    rate: "/ hour",
    features: [
      "Workflow and operations audit",
      "AI readiness assessment",
      "Implementation roadmap",
      "Team training session",
    ],
    href: "/book/business",
    badge: "Business",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Tell me what you need",
    description:
      "Fill out a quick form so I understand your situation before we meet. No generic questionnaires — I want to know what's actually slowing you down.",
  },
  {
    number: "02",
    title: "We meet and build",
    description:
      "In our session, we don't just talk — we do. I'll show you tools, set things up with you, and make sure you're comfortable before we wrap.",
  },
  {
    number: "03",
    title: "You walk away with a plan",
    description:
      "You leave with a clear, written action plan, configured tools, and my email if you get stuck. No upsells, no recurring fees.",
  },
];

export const EVENTS: EventInfo[] = [
  {
    title: "Soulfolks AI Workshop",
    level: "Beginner-friendly",
    price: "Free",
    description:
      "A casual, community-first introduction to AI. We cover the basics, answer every question, and make sure nobody gets left behind.",
    details: "Dates and location TBD — join the list to get notified.",
  },
  {
    title: "Library AI Lab",
    level: "Intermediate",
    price: "Free",
    description:
      "For people who've used ChatGPT but want to go deeper. We build real workflows, automate tasks, and explore what's actually possible.",
    details: "Dates and location TBD — join the list to get notified.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need any technical background?",
    answer:
      "Not at all. I work with everyone from people who've never touched AI to developers building their own tools. I meet you where you are.",
  },
  {
    question: "What happens in a typical session?",
    answer:
      "We start with your goals, I demo relevant tools, we set things up together, and you leave with a written plan. Most people book one session and have everything they need.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes — I'm based in LA and do in-person sessions. I also do virtual sessions for anyone outside the area.",
  },
  {
    question: "What if I don't know what I need yet?",
    answer:
      "That's exactly what the consultation is for. Fill out the form with whatever you can, and I'll come prepared with recommendations based on your situation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every session includes follow-up email support. If you need more hands-on help after that, we can book additional sessions — but most people don't need to.",
  },
];

export const ABOUT = {
  heading: "Meet Travis",
  bio: [
    "I got into AI because I was tired of watching people get sold on tools they didn't need and hype they couldn't use. There's a gap between what AI can do and what most people know about it — I close that gap.",
    "I've built AI systems, automated workflows, and trained teams across industries. Now I work one-on-one with people and businesses in Los Angeles to cut through the noise and get real results.",
  ],
  cta: "If you're curious about AI but don't know where to start, or you know exactly what you want but need help building it — let's talk.",
} as const;

export const CREDIBILITY = [
  { label: "Presented by", name: "Native Nomads" },
  { label: "Media by", name: "Swazi Socials" },
] as const;
