"use client";

import Link from "next/link";
import { useState } from "react";

export default function IndividualBooking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Request Received!</h1>
          <p className="text-dark-400 mb-8">
            Thank you for your interest. I&apos;ll review your information and reach out within 24 hours to schedule our session.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors mb-8"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back
        </Link>

        <div className="mb-10">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
            Individual Consultation
          </span>
          <h1 className="text-4xl font-bold mb-4">Book Your Session</h1>
          <p className="text-xl text-dark-400">
            $50/hour — Let&apos;s explore how AI can help you personally and professionally.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="familiarity" className="block text-sm font-medium mb-2">
              Current Familiarity with AI *
            </label>
            <select
              id="familiarity"
              name="familiarity"
              required
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
            >
              <option value="">Select your level</option>
              <option value="none">Never used AI tools</option>
              <option value="beginner">Used ChatGPT a few times</option>
              <option value="intermediate">Regular AI user, want to level up</option>
              <option value="advanced">Experienced, seeking specific guidance</option>
            </select>
          </div>

          <div>
            <label htmlFor="goals" className="block text-sm font-medium mb-2">
              What do you hope to achieve? *
            </label>
            <textarea
              id="goals"
              name="goals"
              required
              rows={4}
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
              placeholder="Tell me about your goals. What problems are you trying to solve? What tasks would you like to automate or improve?"
            />
          </div>

          <div>
            <label htmlFor="questions" className="block text-sm font-medium mb-2">
              Specific Questions (Optional)
            </label>
            <textarea
              id="questions"
              name="questions"
              rows={3}
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
              placeholder="Any specific questions you'd like answered during our session?"
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium mb-2">
              Preferred Availability *
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              required
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              placeholder="e.g., Weekday afternoons, Saturday mornings"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-dark-950 font-semibold rounded-lg transition-all hover:scale-[1.02]"
          >
            Submit Request
          </button>

          <p className="text-sm text-dark-500 text-center">
            I&apos;ll review your information and reach out within 24 hours to schedule.
          </p>
        </form>
      </div>
    </main>
  );
}
