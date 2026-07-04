import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { CONTACT, MAILTO, MAILTO_INFO, TEL_CALL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <img
                  src="/virtue-logo.png"
                  alt="Virtue Solutions"
                  height={64}
                  className="h-[64px] sm:h-[72px] md:h-[80px] w-auto object-contain"
                />
              </div>
              <div className="leading-tight hidden sm:block">
                <div className="font-display text-lg font-bold">VIRTUE</div>
                <div className="text-[10px] tracking-[0.2em] text-[var(--neon)]">SOLUTIONS</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Transforming spaces and delivering engaging digital experiences with innovative
              signage solutions.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/virtue__solutions?igsh=M3dldXE0NmN1djJ1", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/virtue-solution/", label: "LinkedIn" },
                { Icon: Youtube, href: "https://youtube.com/@virtuesolutions?si=_Zu8wA6VibuLC8ka", label: "YouTube" },
                { Icon: Facebook, href: "https://www.facebook.com/share/17agnzwkHU/", label: "Facebook" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:border-[var(--neon)]/60 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-[var(--neon)] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Solutions column removed per design update */}

          <div>
            <h4 className="font-display text-base font-semibold">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/faqs"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty-policy"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/support-center"
                  className="text-sm text-white/60 hover:text-[var(--neon)] transition"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--neon)] shrink-0" />
                <span>
                  Office no - 10 & 11, Second Floor, Capital Galleria, Sirsi Road, Kankpura,
                  Vaishali Nagar, Jaipur, 302034, Rajasthan
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-[var(--neon)] shrink-0" />
                <a href={TEL_CALL} className="hover:text-[var(--neon)]">
                  {CONTACT.callAnytime}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-[var(--neon)] shrink-0" />
                <div className="flex flex-col">
                  <a href={MAILTO} className="break-all hover:text-[var(--neon)]">
                    {CONTACT.email}
                  </a>
                  <a href={MAILTO_INFO} className="break-all hover:text-[var(--neon)]">
                    {CONTACT.infoEmail}
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-[var(--neon)] shrink-0" />
                <span>Mon - Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Virtue Solutions. All Rights Reserved.</div>
          <div>Designed and made by Shelja Sharma</div>
        </div>
      </div>
    </footer>
  );
}
