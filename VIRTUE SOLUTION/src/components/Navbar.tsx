import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Phone, ArrowRight, Sparkles, Mail, MessageSquare, Clock } from "lucide-react";
import {
  CONTACT,
  TEL_CALL,
  WA_CALL,
  MAILTO,
  MAILTO_INFO,
  openCallAndWhatsApp,
} from "@/lib/contact";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ConsultButton } from "@/components/ConsultButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links: { label: string; to: string }[] = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Industries", to: "/industries" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className={`mx-auto max-w-7xl px-4`}>
        <div
          className={`glass-strong flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "shadow-2xl" : ""}`}
        >
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/virtue-logo.png"
              alt="Virtue Solutions"
              height={64}
              className="h-[64px] sm:h-[72px] md:h-[80px] w-auto object-contain"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-lg font-bold tracking-tight">VIRTUE</div>
              <div className="text-[10px] tracking-[0.2em] text-[var(--neon)]">SOLUTIONS</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--neon)] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openCallAndWhatsApp("call")}
              className="hidden md:flex items-center gap-2 rounded-full glass px-3 py-2 hover-glow cursor-pointer text-left"
              aria-label={`Call ${CONTACT.callAnytime} or open WhatsApp`}
            >
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ background: "var(--gradient-neon)" }}
              >
                <Phone className="h-4 w-4 text-[#04121A]" />
              </span>
              <span className="text-xs leading-tight">
                <span className="block text-white/60">Call Anytime</span>
                <span className="block font-semibold">{CONTACT.callAnytime}</span>
              </span>
            </button>
            <ConsultButton className="btn-neon hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </ConsultButton>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 rounded-2xl p-4 lg:hidden"
          >
            <div className="grid gap-3">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="block py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-1 grid gap-3">
                <a
                  href={TEL_CALL}
                  className="glass rounded-2xl p-4 hover-glow flex items-start gap-3"
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    <Phone className="h-5 w-5 text-[#04121A]" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold">Call Us</div>
                    <div className="text-xs text-[var(--neon)] font-semibold">
                      {CONTACT.consultation}
                    </div>
                    <div className="mt-1 text-xs text-white/65 flex items-start gap-2">
                      <Clock className="h-3.5 w-3.5 mt-0.5" /> Available Mon - Sat 9:00 AM – 7:00 PM
                    </div>
                  </div>
                </a>

                <a
                  href={MAILTO}
                  className="glass rounded-2xl p-4 hover-glow flex items-start gap-3"
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    <Mail className="h-5 w-5 text-[#04121A]" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold">Email Us</div>
                    <div className="text-xs break-all text-[var(--neon)] font-semibold">
                      <a href={MAILTO} className="hover:text-[var(--neon)]">
                        {CONTACT.email}
                      </a>
                      <br />
                      <a href={MAILTO_INFO} className="hover:text-[var(--neon)]">
                        {CONTACT.infoEmail}
                      </a>
                    </div>
                    <div className="mt-1 text-xs text-white/65">
                      Send requirements and we'll respond promptly.
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => {
                    setOpen(false);
                    setConsultOpen(true);
                  }}
                  className="glass rounded-2xl p-4 hover-glow flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-10 w-10 place-items-center rounded-xl"
                      style={{ background: "var(--gradient-neon)" }}
                    >
                      <MessageSquare className="h-5 w-5 text-[#04121A]" />
                    </div>
                    <div className="text-left">
                      <div className="font-display text-sm font-semibold">Free Consultation</div>
                      <div className="text-xs text-white/65">
                        Speak with our experts to find the ideal solution.
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--neon)]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <ConsultationDialog open={consultOpen} onClose={() => setConsultOpen(false)} />
    </motion.header>
  );
}
