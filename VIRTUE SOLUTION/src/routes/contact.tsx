import { createFileRoute } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { CONTACT, TEL_CALL, WA_CALL, MAILTO, MAILTO_INFO } from "@/lib/contact";
import { ConsultButton } from "@/components/ConsultButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Virtue Solutions" },
      {
        name: "description",
        content:
          "Contact Virtue Solutions for product inquiries, support, installations and partnerships.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] text-foreground">
      <section id="contact" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            SMART VISUAL SOLUTIONS
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">Contact Virtue Solutions</h1>
          <p className="mt-4 text-white/70">
            Get in touch with our team for product inquiries, quotations, installation support,
            technical assistance, and business partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">Call Us</h3>
              <p className="mt-2 text-white/70">
                For immediate assistance, reach our team by phone.
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a href={TEL_CALL} className="btn-neon px-4 py-2 rounded-full">
                  Call Now
                </a>
                <a
                  href={WA_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-full"
                >
                  WhatsApp Now
                </a>
              </div>
              <p className="mt-3 text-sm text-[var(--neon)] font-semibold">{CONTACT.callAnytime}</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">Email Support</h3>
              <p className="mt-2 text-white/70">
                Send detailed requirements or queries and we'll respond promptly.
              </p>
              <div className="mt-3">
                <a href={MAILTO} className="btn-neon px-4 py-2 rounded-full">
                  Email Sales
                </a>
                <a href={MAILTO_INFO} className="ml-3 btn-neon px-4 py-2 rounded-full">
                  Email Info
                </a>
              </div>
              <p className="mt-3 text-sm text-[var(--neon)] break-all">
                {CONTACT.email}, {CONTACT.infoEmail}
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">Business Hours</h3>
              <p className="mt-2 text-white/70">{CONTACT.hours}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">WhatsApp Support</h3>
              <p className="mt-2 text-white/70">Quick queries and media support via WhatsApp.</p>
              <div className="mt-3">
                <a
                  href={WA_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon px-4 py-2 rounded-full"
                >
                  WhatsApp Now
                </a>
              </div>
              <p className="mt-3 text-sm text-[var(--neon)]">{CONTACT.callAnytime}</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">Office Address</h3>
              <p className="mt-2 text-white/70">
                Office no - 10 & 11, Second Floor, Capital Galleria, Sirsi Road, Kankpura, Vaishali
                Nagar, Jaipur, 302034, Rajasthan
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Office+no+10+%26+11+Capital+Galleria+Sirsi+Road+Kankpura+Vaishali+Nagar+Jaipur+302034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-full"
                >
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold">Quick Actions</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={TEL_CALL} className="btn-neon px-5 py-3 rounded-full">
                  Call Now
                </a>
                <a
                  href={WA_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-5 py-3 rounded-full"
                >
                  WhatsApp Now
                </a>
                <a href={MAILTO} className="glass-strong px-5 py-3 rounded-full">
                  Email Sales
                </a>
                <a href={MAILTO_INFO} className="glass px-5 py-3 rounded-full">
                  Email Info
                </a>
                <ConsultButton className="btn-neon px-5 py-3 rounded-full">
                  Get Free Consultation
                </ConsultButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold">Our Location</h3>
          <div className="mt-4 rounded-2xl overflow-hidden glass" style={{ minHeight: 300 }}>
            <iframe
              title="Virtue Solutions Location"
              src="https://maps.google.com/maps?q=123+Business+Park+Sector+62+Noida+Uttar+Pradesh+201301&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
