"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FormSuccess } from "./FormSuccess";

type FormState = "idle" | "loading" | "success" | "error";

const familiarityOptions = [
  { value: "never", label: "Never used AI tools" },
  { value: "beginner", label: "Used ChatGPT a few times" },
  { value: "intermediate", label: "Regular AI user, want to level up" },
  { value: "advanced", label: "Experienced, seeking specific guidance" },
];

export function IndividualForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: "individual" as const,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      familiarity: formData.get("familiarity") as string,
      goals: formData.get("goals") as string,
      questions: formData.get("questions") as string,
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

      <Input
        label="Your Name"
        id="name"
        name="name"
        type="text"
        required
        placeholder="John Doe"
      />

      <Input
        label="Email Address"
        id="email"
        name="email"
        type="email"
        required
        placeholder="john@example.com"
      />

      <Select
        label="Current Familiarity with AI"
        id="familiarity"
        name="familiarity"
        required
        options={familiarityOptions}
        placeholder="Select your level"
        defaultValue=""
      />

      <Textarea
        label="What do you hope to achieve?"
        id="goals"
        name="goals"
        required
        rows={4}
        placeholder="Tell me about your goals. What problems are you trying to solve? What tasks would you like to automate or improve?"
      />

      <Textarea
        label="Specific Questions (Optional)"
        id="questions"
        name="questions"
        rows={3}
        placeholder="Any specific questions you'd like answered during our session?"
      />

      <Input
        label="Preferred Availability"
        id="availability"
        name="availability"
        type="text"
        required
        placeholder="e.g., Weekday afternoons, Saturday mornings"
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
