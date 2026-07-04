import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { CONTACT, MAILTO, MAILTO_INFO } from "@/lib/contact";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Virtue Solutions" },
      { name: "description", content: "How Virtue Solutions collects and uses customer data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            PRIVACY
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-white/70">Your privacy matters to us.</p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Information We Collect</h3>
            <p className="mt-2 text-white/70">
              Name, Email Address, Phone Number, Company Information, Inquiry Details.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">How We Use Information</h3>
            <p className="mt-2 text-white/70">
              Respond to inquiries, provide quotations, customer support, improve services, and
              marketing communications.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Data Protection</h3>
            <p className="mt-2 text-white/70">
              We implement industry-standard security measures to protect customer information.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Third-Party Sharing</h3>
            <p className="mt-2 text-white/70">
              Customer information is never sold to third parties.
            </p>
          </div>
          <div className="text-center">
            <p className="text-white/70">
              Contact:{" "}
              <a href={MAILTO} className="text-[var(--neon)]">
                {CONTACT.email}
              </a>
              ,{" "}
              <a href={MAILTO_INFO} className="text-[var(--neon)]">
                {CONTACT.infoEmail}
              </a>{" "}
              |{" "}
              <a href={`tel:${CONTACT.callAnytime}`} className="text-[var(--neon)]">
                {CONTACT.callAnytime}
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
