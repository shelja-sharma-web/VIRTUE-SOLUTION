import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Phone,
  Plus,
  Minus,
  Sparkles,
  ShoppingBag,
  Hotel,
  Coffee,
  Briefcase,
  Stethoscope,
  GraduationCap,
  Landmark,
  Plane,
  ShoppingCart,
  Film,
  Building2,
  CheckCircle2,
  Settings,
  Zap,
  ShieldCheck,
  Headphones,
  Maximize,
  Heart,
} from "lucide-react";
import { ConsultButton } from "@/components/ConsultButton";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Virtue Solutions | Digital Signage for Every Sector" },
      {
        name: "description",
        content:
          "Discover how Virtue Solutions delivers tailored digital signage for retail, hospitality, healthcare, education, corporate, banking, airports, and more.",
      },
      { property: "og:title", content: "Industries We Serve — Virtue Solutions" },
      {
        property: "og:description",
        content: "Custom digital signage solutions designed for every industry.",
      },
    ],
  }),
  component: IndustriesPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06 } }),
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-4 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-pulse-glow" />
      {children}
    </div>
  );
}

function Counter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setVal(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Transform shopping experiences with engaging digital displays, promotional screens, and interactive solutions that increase customer engagement and boost sales.",
    solutions: [
      "Indoor LED Screens",
      "Video Walls",
      "Interactive Kiosks",
      "Digital Signage Displays",
    ],
    benefits: [
      "Enhanced Customer Experience",
      "Increased Foot Traffic",
      "Real-Time Promotions",
      "Improved Brand Visibility",
    ],
  },
  {
    icon: Hotel,
    name: "Hospitality",
    desc: "Deliver exceptional guest experiences with digital communication systems for hotels, resorts, and hospitality businesses.",
    solutions: [
      "Lobby Video Walls",
      "Information Displays",
      "Interactive Kiosks",
      "Corporate Signage",
    ],
    benefits: [
      "Improved Guest Communication",
      "Modern Brand Image",
      "Efficient Information Delivery",
      "Enhanced Customer Satisfaction",
    ],
  },
  {
    icon: Coffee,
    name: "Restaurants & Cafés",
    desc: "Modern digital menu solutions that simplify content management and enhance customer engagement.",
    solutions: ["Digital Menu Boards", "Indoor LED Displays", "Promotional Screens"],
    benefits: [
      "Instant Menu Updates",
      "Better Customer Experience",
      "Increased Sales",
      "Attractive Visual Presentation",
    ],
  },
  {
    icon: Briefcase,
    name: "Corporate Offices",
    desc: "Professional communication displays that streamline internal communications and strengthen corporate branding.",
    solutions: ["Corporate Signage", "Meeting Room Displays", "Video Walls", "Reception Displays"],
    benefits: [
      "Improved Internal Communication",
      "Professional Appearance",
      "Real-Time Information Sharing",
      "Better Collaboration",
    ],
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "Enhance patient communication and improve operational efficiency with intelligent digital display systems.",
    solutions: [
      "Information Displays",
      "Interactive Kiosks",
      "Queue Management Systems",
      "Reception Displays",
    ],
    benefits: [
      "Reduced Waiting Time",
      "Improved Patient Experience",
      "Efficient Communication",
      "Better Navigation",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Empower educational institutions with interactive and engaging digital learning environments.",
    solutions: [
      "Indoor LED Screens",
      "Interactive Displays",
      "Information Boards",
      "Digital Notice Boards",
    ],
    benefits: [
      "Enhanced Learning Experience",
      "Better Campus Communication",
      "Real-Time Announcements",
      "Interactive Engagement",
    ],
  },
  {
    icon: Landmark,
    name: "Banking & Financial Services",
    desc: "Modern communication solutions that improve customer interaction and create a premium banking experience.",
    solutions: [
      "Queue Displays",
      "Interactive Kiosks",
      "Corporate Signage",
      "Information Displays",
    ],
    benefits: [
      "Faster Customer Service",
      "Professional Environment",
      "Better Information Management",
      "Enhanced Customer Satisfaction",
    ],
  },
  {
    icon: Plane,
    name: "Airports & Transportation",
    desc: "Reliable digital signage systems that provide passengers with real-time updates and navigation assistance.",
    solutions: ["Information Displays", "Outdoor LED Screens", "Interactive Kiosks", "Video Walls"],
    benefits: [
      "Real-Time Information",
      "Improved Passenger Experience",
      "Better Crowd Management",
      "Efficient Communication",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Shopping Malls",
    desc: "Create immersive experiences with promotional displays, wayfinding kiosks, and dynamic digital advertising.",
    solutions: ["Indoor LED Screens", "Video Walls", "Interactive Kiosks", "Advertising Displays"],
    benefits: [
      "Increased Visitor Engagement",
      "Higher Advertising Revenue",
      "Improved Navigation",
      "Enhanced Brand Presence",
    ],
  },
  {
    icon: Film,
    name: "Entertainment & Events",
    desc: "Deliver unforgettable visual experiences for concerts, exhibitions, sports events, and entertainment venues.",
    solutions: [
      "Outdoor LED Screens",
      "Video Walls",
      "Event Displays",
      "Interactive Installations",
    ],
    benefits: [
      "High Audience Engagement",
      "Immersive Experiences",
      "Dynamic Content Delivery",
      "Maximum Visibility",
    ],
  },
  {
    icon: Building2,
    name: "Government Institutions",
    desc: "Enable efficient public communication through reliable and high-performance digital signage systems.",
    solutions: [
      "Information Displays",
      "Queue Management Systems",
      "Corporate Signage",
      "Video Walls",
    ],
    benefits: [
      "Better Public Communication",
      "Increased Efficiency",
      "Improved Visitor Experience",
      "Real-Time Information Updates",
    ],
  },
];

const trustFactors = [
  {
    icon: Settings,
    title: "Customized Solutions",
    desc: "Tailored systems designed according to industry-specific requirements.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    desc: "State-of-the-art display solutions with intelligent content management.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Performance",
    desc: "High-quality products built for long-term operation.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    desc: "From consultation and installation to maintenance and technical assistance.",
  },
  {
    icon: Maximize,
    title: "Scalable Solutions",
    desc: "Suitable for small businesses, enterprises, and large organizations.",
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    desc: "Focused on delivering exceptional experiences and long-term partnerships.",
  },
];

const stats = [
  { n: 500, suffix: "+", label: "Successful Projects" },
  { n: 200, suffix: "+", label: "Happy Clients" },
  { n: 15, suffix: "+", label: "Industries Served" },
  { n: 99, suffix: "%", label: "Customer Satisfaction" },
  { n: 24, suffix: "/7", label: "Technical Support" },
];

const faqs = [
  {
    q: "Which digital signage solution is right for my industry?",
    a: "Our team conducts a thorough assessment of your space, audience, goals, and industry standards to recommend the ideal digital signage mix — whether LED screens, video walls, kiosks, or menu boards — fully tailored to your sector.",
  },
  {
    q: "Can digital signage be customized for my specific business needs?",
    a: "Absolutely. Every solution we provide is customized to match your branding, layout, content strategy, and operational requirements, ensuring a perfect fit for your business.",
  },
  {
    q: "Do you provide installation and training for industry-specific setups?",
    a: "Yes. We handle complete installation, content configuration, staff training, and handover — ensuring your team can operate the system confidently from day one.",
  },
  {
    q: "How does digital signage improve customer engagement?",
    a: "Digital signage captures attention with vibrant visuals, real-time updates, and interactive features — driving higher engagement, longer dwell times, and improved conversion rates across all industries.",
  },
  {
    q: "What kind of support do you offer after installation?",
    a: "We provide 24/7 technical support, remote monitoring, regular maintenance, software updates, and dedicated account management to ensure long-term system reliability.",
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={i}
      variants={fadeUp}
      className="glass-strong rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-lg">{q}</span>
        <div className="grid h-9 w-9 place-items-center rounded-full glass shrink-0">
          {open ? (
            <Minus className="h-4 w-4 text-[var(--neon)]" />
          ) : (
            <Plus className="h-4 w-4 text-[var(--neon)]" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-white/65 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 glass-strong border-t border-white/10 px-4 py-3"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm text-white/80">
          <span className="font-semibold text-white">Ready to transform your industry?</span> Talk
          to our experts today.
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/products"
            className="btn-neon inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            Explore Solutions <ArrowRight className="h-4 w-4" />
          </Link>
          <ConsultButton className="glass hover-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
            <Phone className="h-4 w-4" /> Get Free Consultation
          </ConsultButton>
        </div>
      </div>
    </motion.div>
  );
}

function IndustriesPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--neon)]/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[var(--cyan-glow)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Eyebrow>Industries We Serve</Eyebrow>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Digital Signage Solutions for <span className="neon-text">Every Industry</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/70"
          >
            Empowering businesses with innovative display technologies that enhance communication,
            engagement, and brand visibility.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-base text-white/60"
          >
            At Virtue Solutions, we deliver customized digital signage solutions designed to meet
            the unique requirements of various industries. From retail and hospitality to healthcare
            and education, our technology helps organizations communicate effectively and create
            exceptional customer experiences.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm"
            >
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <ConsultButton className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium">
              <Phone className="h-4 w-4" /> Get Free Consultation
            </ConsultButton>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <Section id="industries">
        <div className="text-center mb-14">
          <Eyebrow>Industries We Serve</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Tailored solutions for <span className="neon-text">every sector</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-3xl p-7 relative overflow-hidden group flex flex-col"
            >
              <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-[var(--cyan-glow)]/10 blur-3xl group-hover:bg-[var(--neon)]/15 transition-colors" />
              <div
                className="relative grid h-14 w-14 place-items-center rounded-2xl"
                style={{ background: "var(--gradient-neon)" }}
              >
                <ind.icon className="h-7 w-7 text-[#04121A]" />
              </div>
              <h3 className="relative mt-5 text-2xl font-bold">{ind.name}</h3>
              <p className="relative mt-3 text-white/65 leading-relaxed text-sm">{ind.desc}</p>

              <div className="relative mt-5">
                <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--neon)]/90">
                  Solutions
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-2">
                  {ind.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-white/75">
                      <CheckCircle2 className="h-4 w-4 text-[var(--neon)] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-5 rounded-xl glass p-4">
                <div className="text-[11px] tracking-[0.18em] uppercase text-white/60">
                  Benefits
                </div>
                <ul className="mt-2 grid grid-cols-1 gap-1.5">
                  {ind.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHY TRUST US */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Why Industries Trust Us</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            The <span className="neon-text">Virtue advantage</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((t, i) => (
            <motion.div
              key={t.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-2xl p-7 group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl glass group-hover:scale-110 transition-transform">
                <t.icon className="h-6 w-6 text-[var(--neon)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <section className="relative py-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--neon)]/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[var(--cyan-glow)]/15 blur-3xl" />
            <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                >
                  <div className="font-display text-4xl md:text-5xl font-bold neon-text">
                    <Counter end={s.n} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Frequently <span className="neon-text">asked questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(106,255,77,0.12), rgba(0,217,255,0.12))",
          }}
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--neon)]/20 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--cyan-glow)]/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform Your Industry with{" "}
              <span className="neon-text">Smart Digital Signage?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              Partner with Virtue Solutions and discover innovative display solutions tailored to
              your business requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://forms.gle/3twNk4hPD8G8KLEA7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <ConsultButton className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium">
                <Phone className="h-4 w-4" /> Contact Our Experts
              </ConsultButton>
            </div>
          </div>
        </motion.div>
      </Section>

      <StickyCTA />
      <Footer />
    </main>
  );
}
