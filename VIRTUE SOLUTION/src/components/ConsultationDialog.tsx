import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, X, Clock, MessageSquare, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { CONTACT, MAILTO, MAILTO_INFO, TEL_CALL, TEL_CONSULT, WA_CALL } from "@/lib/contact";

export function ConsultationDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative z-[210] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 p-6 md:p-10"
          >
            <motion.button
              onClick={onClose}
              role="button"
              tabIndex={0}
              aria-label="Close consultation popup"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClose();
                }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(106,255,77,0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass hover:text-[var(--neon)] z-[220] pointer-events-auto cursor-pointer"
              style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.35)" }}
            >
              <X className="h-4 w-4" />
            </motion.button>

            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{ background: "var(--gradient-neon)", filter: "blur(120px)", opacity: 0.25 }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-[var(--neon)]">
                <Sparkles className="h-3 w-3" /> Free Consultation
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold">
                Let's build your <span className="neon-text">digital signage solution</span>
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-2xl">
                Reach out through any of the options below — our team typically responds within a
                few hours.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {/* Call Us */}
                <a
                  href={TEL_CONSULT}
                  className="glass rounded-2xl p-5 hover-glow transition group block"
                >
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    <Phone className="h-5 w-5 text-[#04121A]" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">Call Us</div>
                  <div className="mt-1 text-[var(--neon)] font-semibold">
                    {CONTACT.consultation}
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-xs text-white/65">
                    <Clock className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    <span>
                      Available Monday to Saturday
                      <br />
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                </a>

                {/* Email Us */}
                <a
                  href={MAILTO}
                  className="glass rounded-2xl p-5 hover-glow transition group block"
                >
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    <Mail className="h-5 w-5 text-[#04121A]" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">Email Us</div>
                  <div className="mt-1 break-all text-[var(--neon)] font-semibold text-sm">
                    <a href={MAILTO} className="hover:text-[var(--neon)]">
                      {CONTACT.email}
                    </a>
                    <br />
                    <a href={MAILTO_INFO} className="hover:text-[var(--neon)]">
                      {CONTACT.infoEmail}
                    </a>
                  </div>
                  <p className="mt-3 text-xs text-white/65">
                    Send us your requirements and our team will get back to you promptly.
                  </p>
                </a>

                {/* Free Consultation */}
                <div className="glass rounded-2xl p-5">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    <MessageSquare className="h-5 w-5 text-[#04121A]" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">Free Consultation</div>
                  <p className="mt-1 text-xs text-white/65">
                    Speak with our experts to find the ideal digital signage solution for your
                    business.
                  </p>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <a
                      href={TEL_CALL}
                      className="flex items-center gap-2 text-white/85 hover:text-[var(--neon)]"
                    >
                      <Phone className="h-3.5 w-3.5" /> {CONTACT.callAnytime}
                    </a>
                    <a
                      href={MAILTO}
                      className="flex items-center gap-2 text-white/85 hover:text-[var(--neon)] break-all"
                    >
                      <Mail className="h-3.5 w-3.5" /> {CONTACT.email}
                    </a>
                    <a
                      href={MAILTO_INFO}
                      className="flex items-center gap-2 text-white/85 hover:text-[var(--neon)] break-all"
                    >
                      <Mail className="h-3.5 w-3.5" /> {CONTACT.infoEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://forms.gle/3twNk4hPD8G8KLEA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                >
                  Request a Quote
                </a>
                <a
                  href={WA_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm hover:text-[var(--neon)]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
export function useConsultation() {
  const [open, setOpen] = useState(false);
  return {
    open,
    openDialog: () => setOpen(true),
    closeDialog: () => setOpen(false),
    Dialog: () => <ConsultationDialog open={open} onClose={() => setOpen(false)} />,
  };
}
