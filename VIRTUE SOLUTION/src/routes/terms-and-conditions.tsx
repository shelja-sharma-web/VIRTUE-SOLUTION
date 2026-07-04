import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Virtue Solutions" },
      {
        name: "description",
        content: "Terms and conditions for using Virtue Solutions' website and services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            LEGAL
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Terms &amp; Conditions</h1>
          <p className="mt-4 text-white/70">Guidelines governing the use of our services.</p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Acceptance</h3>
            <p className="mt-2 text-white/70">
              By accessing our website, you agree to these terms.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Products</h3>
            <p className="mt-2 text-white/70">
              Product specifications may change without prior notice for continuous improvements.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Quotations</h3>
            <p className="mt-2 text-white/70">
              All quotations remain valid for the specified validity period.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Payments</h3>
            <p className="mt-2 text-white/70">Orders may require advance payment as agreed.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Intellectual Property</h3>
            <p className="mt-2 text-white/70">
              All website content, graphics, logos, and materials remain the property of Virtue
              Solutions.
            </p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Limitation of Liability</h3>
            <p className="mt-2 text-white/70">
              Virtue Solutions shall not be liable for indirect or consequential damages.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
