export interface Service {
  title: string;
  description: string;
  price: string;
  rate: string;
  features: string[];
  href: string;
  badge?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface EventInfo {
  title: string;
  level: string;
  price: string;
  description: string;
  details: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  type: "individual" | "business";
  name: string;
  email: string;
  [key: string]: string;
}
