import { createFileRoute, Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CONTACT, MAILTO, MAILTO_INFO } from "@/lib/contact";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Virtue Solutions" },
      {
        name: "description",
        content:
          "Frequently asked questions about Virtue Solutions' LED displays, installation, warranty and support.",
      },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            HELP & SUPPORT
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-white/70">
            Find answers to common questions about our LED display solutions, installation,
            warranty, and support services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="font-display text-xl font-semibold">General</h3>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: What products do you offer?</strong>
              <p className="mt-2 text-sm text-white/70">
                We provide Indoor LED Screens, Outdoor LED Screens, Video Walls, Interactive Kiosks,
                Digital Menu Boards, and customized digital signage solutions.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Do you provide installation services?</strong>
              <p className="mt-2 text-sm text-white/70">
                Yes, our team provides complete installation, testing, and commissioning support.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Can displays be customized?</strong>
              <p className="mt-2 text-sm text-white/70">
                Yes, displays can be customized according to size, resolution, brightness, and
                application requirements.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Do you offer nationwide service?</strong>
              <p className="mt-2 text-sm text-white/70">Yes, we serve clients across India.</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-xl font-semibold">Technical</h3>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Can content be updated remotely?</strong>
              <p className="mt-2 text-sm text-white/70">
                Yes, content can be managed remotely through compatible CMS software.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: What is the lifespan of LED displays?</strong>
              <p className="mt-2 text-sm text-white/70">
                Most LED displays provide up to 100,000 hours of operational life under recommended
                conditions.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Are your displays energy efficient?</strong>
              <p className="mt-2 text-sm text-white/70">
                Yes, our displays are designed to optimize power consumption while maintaining high
                brightness levels.
              </p>
            </div>
            <div className="glass p-4 rounded-2xl">
              {" "}
              <strong>Q: Do displays work 24/7?</strong>
              <p className="mt-2 text-sm text-white/70">
                Yes, commercial-grade displays are built for continuous operation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70">
            Still need help? Contact us at{" "}
            <a href={MAILTO} className="text-[var(--neon)]">
              {CONTACT.email}
            </a>
            ,{" "}
            <a href={MAILTO_INFO} className="text-[var(--neon)]">
              {CONTACT.infoEmail}
            </a>{" "}
            or call{" "}
            <a href={`tel:${CONTACT.callAnytime}`} className="text-[var(--neon)]">
              {CONTACT.callAnytime}
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://forms.gle/3twNk4hPD8G8KLEA7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-6 py-3 rounded-full"
            >
              Request Quote
            </a>
            <a href={`tel:${CONTACT.callAnytime}`} className="glass-strong px-6 py-3 rounded-full">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
