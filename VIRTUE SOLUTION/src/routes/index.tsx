import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  useInView,
} from "framer-motion";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  ArrowRight,
  Monitor,
  Cloud,
  LayoutGrid,
  MousePointerClick,
  Tv2,
  MousePointer2,
  UtensilsCrossed,
  Building2,
  Gem,
  ShoppingBag,
  Hotel,
  Hospital,
  GraduationCap,
  Home as HomeIcon,
  Building,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ConsultButton } from "@/components/ConsultButton";
import { CONTACT, MAILTO, TEL_CALL } from "@/lib/contact";

import heroImg from "@/assets/hero-display.jpg";
import showcaseImg from "@/assets/showcase.jpg";
import whyImg from "../assets/why-choose.jpg";
import pTanishq from "@/assets/p-tanishq.jpg";
import pPvr from "@/assets/p-pvr.jpg";
import pMcd from "@/assets/p-mcd.jpg";
import pHyatt from "@/assets/p-hyatt.jpg";
import pAdidas from "@/assets/p-adidas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virtue Solutions — Smart Digital Signage & LED Displays" },
      {
        name: "description",
        content:
          "Transform spaces with premium digital signage, LED screens, video walls and interactive kiosks.",
      },
      { property: "og:title", content: "Virtue Solutions — Smart Digital Signage" },
      {
        property: "og:description",
        content: "Premium LED screens, video walls and interactive kiosks.",
      },
    ],
  }),
  component: Index,
});

/* ------- Mouse Spotlight ------- */
function Spotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen blur-3xl"
    >
      <div
        className="h-full w-full rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,217,255,0.5), transparent 60%)" }}
      />
    </motion.div>
  );
}

/* ------- Magnetic Button ------- */
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className={className}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------- Hero ------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    let rafId = 0;
    let pos = 0;
    const step = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth - el.clientWidth) pos = 0;
      el.scrollLeft = pos;
      rafId = requestAnimationFrame(step);
    };
    const start = () => {
      if (window.innerWidth < 768) rafId = requestAnimationFrame(step);
    };
    const stop = () => cancelAnimationFrame(rafId);
    el.addEventListener("pointerenter", stop);
    el.addEventListener("pointerleave", start);
    start();
    return () => {
      stop();
      el.removeEventListener("pointerenter", stop);
      el.removeEventListener("pointerleave", start);
    };
  }, [mobileCarouselRef]);
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,217,255,0.6), transparent 70%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, 150]) }}
        className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(106,255,77,0.5), transparent 70%)" }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wider text-[var(--neon)] uppercase">
            <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse-glow" /> Smart
            Visual Solutions
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Transform Spaces
            <br />
            With Smart
            <br />
            <span className="neon-text">Digital Signage</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/70 md:text-lg">
            Engage your audience, elevate your brand and deliver immersive experiences with
            innovative digital signage solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                to="/products"
                className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>

          <div className="mt-8">
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Innovation, Quality &<br />
              <span className="neon-text">Service You Can Trust</span>
            </h2>

            <div className="mt-4">
              {/* Desktop: premium horizontal marquee */}
              <div className="hidden lg:block overflow-hidden">
                <div className="flex gap-12 animate-marquee whitespace-nowrap">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 pr-12">
                      {[
                        "Meta Big Bazaar",
                        "Mitraa Cafe & Couture",
                        "Fashion Swag",
                        "Kalyan Jewellers",
                        "Gold Palace",
                        "Raniwala Jeweller",
                        "Pro Ultimate Gym",
                        "New Me",
                      ].map((b) => (
                        <motion.span
                          key={b}
                          whileHover={{ scale: 1.02 }}
                          className="group font-display text-xl font-semibold text-white/40 transition-colors"
                          style={{ WebkitFontSmoothing: "antialiased" }}
                        >
                          <span className="transition-colors group-hover:neon-text group-hover:text-transparent">
                            {b}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet: two rows */}
              <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  ["Meta Big Bazaar", "Mitraa Cafe & Couture", "Fashion Swag", "Kalyan Jewellers"],
                  ["Gold Palace", "Raniwala Jeweller", "Pro Ultimate Gym", "New Me"],
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-center"
                  >
                    {row.map((b) => (
                      <div key={b} className="glass rounded-lg px-4 py-3">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="font-display text-base font-semibold text-white/40 group"
                        >
                          <span className="group-hover:neon-text group-hover:text-transparent">
                            {b}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Mobile: swipeable carousel with auto-scroll */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:hidden mt-4"
              >
                <div
                  ref={mobileCarouselRef}
                  className="-mx-4 overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 py-2 touch-pan-x scrollbar-none"
                >
                  {[
                    "Meta Big Bazaar",
                    "Mitraa Cafe & Couture",
                    "Fashion Swag",
                    "Kalyan Jewellers",
                    "Gold Palace",
                    "Raniwala Jeweller",
                    "Pro Ultimate Gym",
                    "New Me",
                  ].map((b) => (
                    <div
                      key={b}
                      className="snap-start min-w-[65%] sm:min-w-[45%] glass rounded-2xl px-4 py-6"
                    >
                      <div className="font-display text-lg font-semibold text-white/40 group-hover:neon-text group-hover:text-transparent">
                        {b}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-[680px] lg:max-w-none"
        >
          <div className="relative animate-float mx-auto w-full">
            <div
              className="absolute inset-0 -z-10 rounded-3xl blur-3xl"
              style={{ background: "var(--gradient-neon)", opacity: 0.3 }}
            />
            <div className="overflow-hidden rounded-3xl glass-strong p-2 shadow-2xl w-full">
              <img
                src={heroImg}
                alt="LED display"
                width={1280}
                height={1024}
                className="w-full max-w-full h-auto rounded-2xl object-cover"
              />
            </div>
            <div
              className="mx-auto mt-2 h-1 w-3/4 rounded-full"
              style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
            />
          </div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <div
              className="glass-strong space-y-4 rounded-2xl p-4 backdrop-blur-2xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {[
                { v: "150+", l: "Projects Completed" },
                { v: "2+", l: "Years Experience" },
                { v: "50+", l: "Happy Clients" },
                { v: "24×7", l: "Support" },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3 pr-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg glass border border-[var(--neon)]/30">
                    <Sparkles className="h-4 w-4 text-[var(--neon)]" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-display text-lg font-bold neon-text">{s.v}</div>
                    <div className="text-[10px] text-white/60">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------- Section Heading helper ------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] text-[var(--neon)] uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> {children}
    </span>
  );
}

/* ------- Solutions ------- */
const solutions = [
  {
    slug: "indoor-led-screens",
    icon: Monitor,
    title: "Indoor LED Screens",
    desc: "High resolution LED displays for indoor environments.",
  },
  {
    slug: "outdoor-led-screens",
    icon: Cloud,
    title: "Outdoor LED Screens",
    desc: "Weatherproof displays built for outdoor advertising.",
  },
  {
    slug: "video-walls",
    icon: LayoutGrid,
    title: "Video Walls",
    desc: "Seamless video walls for control rooms, lobbies and events.",
  },
  {
    slug: "digital-standee",
    icon: Tv2,
    title: "Digital Standee",
    desc: "Floor-standing digital standees for retail, hospitality and events.",
  },
  {
    slug: "interactive-standee",
    icon: MousePointer2,
    title: "Interactive Standee",
    desc: "Touch-enabled interactive standees for self-service and engagement.",
  },
  {
    slug: "smart-classroom-smart-board",
    icon: GraduationCap,
    title: "Smart Classroom & Board",
    desc: "Interactive smart displays for classrooms and boardrooms.",
  },
  {
    slug: "wall-mounted-displays",
    icon: Monitor,
    title: "Wall Mounted Displays",
    desc: "Space-efficient wall-mounted displays for professional use.",
  },
];

function Solutions() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Eyebrow>Our Products</Eyebrow>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl font-bold md:text-5xl">
            Digital Signage Products
            <br />
            For <span className="neon-text">Every Need</span>
          </h2>
          <p className="max-w-md text-white/60">
            From dynamic displays to interactive kiosks, we provide end-to-end solutions tailored to
            your business.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Link
              key={s.title}
              to="/products/$slug"
              params={{ slug: s.slug }}
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hover-glow relative overflow-hidden rounded-3xl glass p-7"
                aria-label={`View details for ${s.title}`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon)]/10 blur-2xl transition-all group-hover:bg-[var(--neon)]/30" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl glass border border-[var(--neon)]/40 shadow-inner">
                    <s.icon className="h-6 w-6 text-[var(--neon)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--neon)]">
                    Learn More{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------- Showcase ------- */
function Showcase() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] glass-strong"
        >
          <img
            src={showcaseImg}
            alt="Showcase"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,11,20,0.95), rgba(4,11,20,0.3) 60%, transparent)",
            }}
          />
          <div className="relative grid gap-8 p-10 md:p-16 lg:min-h-[520px] lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
                Stunning Visuals.
                <br />
                <span className="neon-text">Unlimited Possibilities.</span>
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Make every display an unforgettable experience.
              </p>
              {/* Video CTA removed per spec */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------- Industries ------- */
const industries = [
  { icon: Gem, name: "Jewellery Stores" },
  { icon: ShoppingBag, name: "Retail Shops" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Hotel, name: "Hotels" },
  { icon: Hospital, name: "Hospitals" },
  { icon: GraduationCap, name: "Schools" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: Building, name: "Corporate Offices" },
];

function Industries() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Eyebrow>Industries We Serve</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Solutions For Every Industry
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="hover-glow group flex flex-col items-center gap-3 rounded-2xl glass px-4 py-8 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[var(--neon)]/40 glass">
                <it.icon className="h-6 w-6 text-[var(--neon)]" strokeWidth={1.5} />
              </div>
              <div className="text-sm font-medium">{it.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------- Why Choose ------- */
function WhyChoose() {
  const items = [
    "Premium Quality Products",
    "Professional Installation",
    "Custom Content Solutions",
    "Nationwide Service Network",
    "Warranty & AMC Support",
    "Affordable Pricing",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] glass-strong aspect-square sm:aspect-[4/3]"
        >
          <img
            src={whyImg}
            alt="Virtue Solutions"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover object-center rounded-[2rem]"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(4,11,20,0.8), transparent 50%)" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Innovation, Quality &<br />
            <span className="neon-text">Service You Can Trust</span>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                <span
                  className="grid h-6 w-6 place-items-center rounded-full"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <Check className="h-3.5 w-3.5 text-[#04121A]" strokeWidth={3} />
                </span>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <Magnetic>
            <Link
              to="/about"
              className="btn-neon mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm cursor-pointer relative z-50"
            >
              Know More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

/* ------- Counter ------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 2, onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { v: 150, s: "+", l: "Projects Completed" },
    { v: 50, s: "+", l: "Happy Clients" },
    { v: 2, s: "+", l: "Years Experience" },
    { v: 25, s: "+", l: "Cities Covered" },
    { v: 100, s: "%", l: "Customer Satisfaction" },
  ];
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:grid-cols-3 lg:grid-cols-5 hover-glow">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl font-bold neon-text md:text-4xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------- Portfolio ------- */
const projects = [
  { img: pTanishq, name: "Tanishq Showroom", type: "LED Display Installation" },
  { img: pPvr, name: "PVR Cinema", type: "LED Screen Installation" },
  { img: pMcd, name: "McDonald's Restaurant", type: "Menu Board Installation" },
  { img: pHyatt, name: "Hyatt Hotel", type: "Video Wall Installation" },
  { img: pAdidas, name: "Adidas Store", type: "LED Display Installation" },
];

function Portfolio() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-center gap-6">
          <div className="text-center">
            <Eyebrow>Our Recent Projects</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Bringing Brands <span className="neon-text">to Life</span>
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="hover-glow group relative overflow-hidden rounded-3xl glass"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#040B14] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-display text-lg font-semibold">{p.name}</div>
                <div className="text-xs text-[var(--neon)]">{p.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------- CTA ------- */
function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-16"
        >
          <div
            className="absolute -top-32 -left-32 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(106,255,77,0.3)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "rgba(0,217,255,0.3)" }}
          />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                Ready to Transform Your Space With{" "}
                <span className="neon-text">Digital Signage?</span>
              </h2>
              <p className="mt-3 text-white/70">
                Let's create powerful visual experiences that engage, inform and inspire.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Magnetic>
                <ConsultButton className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </ConsultButton>
              </Magnetic>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-[#040B14]"
                      style={{
                        background: `linear-gradient(${i * 60}deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 80 + 40}, 70%, 50%))`,
                      }}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold neon-text">50+</span>{" "}
                  <span className="text-white/60">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Footer is now a shared component */

function Index() {
  return (
    <main className="relative">
      <Spotlight />
      <Hero />
      <Solutions />
      <Showcase />
      <Industries />
      <WhyChoose />
      <Stats />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
