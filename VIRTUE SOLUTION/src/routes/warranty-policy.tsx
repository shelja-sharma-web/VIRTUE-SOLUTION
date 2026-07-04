import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/warranty-policy")({
  head: () => ({
    meta: [
      { title: "Warranty Policy — Virtue Solutions" },
      { name: "description", content: "Virtue Solutions warranty policy and claim process." },
    ],
  }),
  component: WarrantyPage,
});

function WarrantyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            WARRANTY
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Warranty Policy</h1>
          <p className="mt-4 text-white/70">Reliable protection for your investment.</p>
        </div>

        <div className="mt-10 grid gap-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-xl font-semibold">Standard Warranty</h3>
            <p className="mt-2 text-white/70">
              Virtue Solutions provides a standard warranty on all eligible products against
              manufacturing defects under normal operating conditions.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-xl font-semibold">Warranty Coverage</h3>
            <ul className="mt-2 list-inside list-disc text-white/70">
              <li>LED modules</li>
              <li>Power supplies</li>
              <li>Control systems</li>
              <li>Internal electronics</li>
              <li>Manufacturing defects</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-xl font-semibold">Warranty Exclusions</h3>
            <ul className="mt-2 list-inside list-disc text-white/70">
              <li>Physical damage</li>
              <li>Water damage caused by improper installation</li>
              <li>Power surges</li>
              <li>Unauthorized modifications</li>
              <li>Accidental damage</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-xl font-semibold">Claim Process</h3>
            <ol className="mt-2 list-inside list-decimal text-white/70">
              <li>Contact support team.</li>
              <li>Share invoice and product details.</li>
              <li>Submit images/videos of the issue.</li>
              <li>Technical review.</li>
              <li>Repair or replacement approval.</li>
            </ol>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/support-center" className="btn-neon px-6 py-3 rounded-full">
            Visit Support Center
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
