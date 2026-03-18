import { Badge } from "@/components/ui/Badge";
import { BusinessForm } from "@/components/forms/BusinessForm";

export default function BusinessBookingPage() {
  return (
    <div>
      <div className="mb-10">
        <Badge variant="indigo" className="mb-4">
          Business Consultation
        </Badge>
        <h1 className="text-4xl font-bold text-warm-900 mb-4">Book Your Session</h1>
        <p className="text-lg text-warm-600">
          $150/hour &mdash; Let&apos;s explore how AI can transform your business operations.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-warm-200 p-6 sm:p-8">
        <BusinessForm />
      </div>
    </div>
  );
}
