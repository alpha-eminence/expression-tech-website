"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

type FormState = "idle" | "loading" | "success" | "error";

const teamSizeOptions = [
  { value: "solopreneur", label: "Just me (Solopreneur)" },
  { value: "2-10", label: "2-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "200+", label: "200+ employees" },
];

export function BusinessForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "business" as const,
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      industry: formData.get("industry") as string,
      teamSize: formData.get("teamSize") as string,
      currentState: formData.get("currentState") as string,
      goals: formData.get("goals") as string,
      techStack: formData.get("techStack") as string,
      availability: formData.get("availability") as string,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (formState === "success") {
    return <FormSuccess />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <Input
          label="Website"
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Your Name"
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
        />

        <Input
          label="Your Role"
          id="role"
          name="role"
          type="text"
          required
          placeholder="CEO, Operations Manager, etc."
        />
      </div>

      <Input
        label="Work Email"
        id="email"
        name="email"
        type="email"
        required
        placeholder="john@company.com"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          id="company"
          name="company"
          type="text"
          required
          placeholder="Acme Corp"
        />

        <Input
          label="Industry"
          id="industry"
          name="industry"
          type="text"
          required
          placeholder="Healthcare, Finance, Retail, etc."
        />
      </div>

      <Select
        label="Team Size"
        id="teamSize"
        name="teamSize"
        required
        options={teamSizeOptions}
        placeholder="Select team size"
        defaultValue=""
      />

      <Textarea
        label="What are you doing currently?"
        id="currentState"
        name="currentState"
        required
        rows={3}
        placeholder="Describe your current workflows, tools, and processes..."
      />

      <Textarea
        label="What do you hope to achieve?"
        id="goals"
        name="goals"
        required
        rows={3}
        placeholder="What problems are you trying to solve? What would success look like?"
      />

      <Textarea
        label="Current Tech Stack (Optional)"
        id="techStack"
        name="techStack"
        rows={2}
        placeholder="What tools and software does your team use? (CRM, project management, communication, etc.)"
      />

      <Input
        label="Preferred Availability"
        id="availability"
        name="availability"
        type="text"
        required
        placeholder="e.g., Weekday mornings, Tuesday/Thursday afternoons"
      />

      {formState === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={formState === "loading"}>
        {formState === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>

      <p className="text-sm text-warm-500 text-center">
        I&apos;ll review your information and reach out within 24 hours to schedule.
      </p>
    </form>
  );
}
