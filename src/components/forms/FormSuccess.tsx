import Link from "next/link";
import { CircleCheck } from "lucide-react";

export function FormSuccess() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-indigo-50 flex items-center justify-center">
        <CircleCheck className="w-8 h-8 text-indigo-600" />
      </div>
      <h2 className="text-3xl font-bold text-warm-900 mb-4">Request Received!</h2>
      <p className="text-warm-600 mb-8 max-w-md">
        I&apos;ll review your information and reach out within 24 hours to schedule.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
