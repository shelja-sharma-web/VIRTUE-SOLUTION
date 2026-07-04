import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { CONTACT, TEL_CALL, WA_CALL, MAILTO, MAILTO_INFO } from "@/lib/contact";
import { ConsultButton } from "@/components/ConsultButton";

export const Route = createFileRoute("/support-center")({
  head: () => ({
    meta: [
      { title: "Support Center — Virtue Solutions" },
      {
        name: "description",
        content: "Technical, installation and warranty support from Virtue Solutions.",
      },
    ],
  }),
  component: SupportCenter,
});

function SupportCenter() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            SUPPORT
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Support Center</h1>
          <p className="mt-4 text-white/70">We're here to help.</p>
        </div>

        <div className="mt-10 grid gap-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Technical Support</h3>
            <p className="mt-2 text-white/70">
              Assistance with display setup, configuration, troubleshooting and software support.
            </p>
            <div className="mt-3 flex gap-3">
              <a href={TEL_CALL} className="btn-neon px-4 py-2 rounded-full">
                Call Now
              </a>
              <a
                href={WA_CALL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-full"
              >
                WhatsApp Support
              </a>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Installation Support</h3>
            <p className="mt-2 text-white/70">
              Help regarding site preparation, installation planning and hardware setup.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Warranty Support</h3>
            <p className="mt-2 text-white/70">
              Warranty verification, service requests and replacement assistance.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-white/70">
              Phone:{" "}
              <a href={TEL_CALL} className="text-[var(--neon)]">
                {CONTACT.callAnytime}
              </a>
            </p>
            <p className="mt-1 text-white/70">
              Email:{" "}
              <a href={MAILTO} className="text-[var(--neon)]">
                {CONTACT.email}
              </a>
              ,{" "}
              <a href={MAILTO_INFO} className="text-[var(--neon)]">
                {CONTACT.infoEmail}
              </a>
            </p>
            <p className="mt-1 text-white/70">
              WhatsApp:{" "}
              <a
                href={WA_CALL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--neon)]"
              >
                Chat on WhatsApp
              </a>
            </p>
            <p className="mt-1 text-white/70">Business Hours: Mon - Sat: 9:00 AM – 7:00 PM</p>
          </div>

          <div className="mt-6 text-center">
            <h3 className="font-display text-xl font-semibold">Need Immediate Assistance?</h3>
            <p className="mt-2 text-white/70">
              Our support team is available to help with product inquiries, installation guidance,
              troubleshooting, and warranty-related questions.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a href={TEL_CALL} className="btn-neon px-6 py-3 rounded-full">
                Call Now
              </a>
              <a
                href={WA_CALL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-full"
              >
                WhatsApp Support
              </a>
              <ConsultButton className="inline-flex items-center gap-2 rounded-full btn-neon px-6 py-3">
                Get Free Consultation
              </ConsultButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
