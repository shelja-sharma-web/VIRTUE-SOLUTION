import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  Award,
  Users,
  Wrench,
  Cpu,
  Heart,
  Settings,
  Monitor,
  Sun,
  LayoutGrid,
  MousePointer2,
  UtensilsCrossed,
  Building2,
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
  ScrollText,
  CalendarDays,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Handshake,
  TrendingUp,
  Phone,
  MessageSquare,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { ConsultButton } from "@/components/ConsultButton";
import { TEL_CALL } from "@/lib/contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Virtue Solutions | Digital Signage Experts" },
      {
        name: "description",
        content:
          "Virtue Solutions delivers premium digital signage — Indoor & Outdoor LED, Video Walls, Interactive Kiosks, Digital Menu Boards & Corporate Signage.",
      },
      { property: "og:title", content: "About Virtue Solutions — Digital Signage Innovators" },
      {
        property: "og:description",
        content: "Transforming businesses through innovative digital signage solutions.",
      },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative mx-auto max-w-7xl px-4 py-20 md:py-28 ${className}`}>
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

const whyUs = [
  {
    icon: Settings,
    title: "Customized Solutions",
    desc: "Tailored digital signage systems designed around your business requirements.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "High-performance products built for reliability and long-term value.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced professionals dedicated to delivering excellence.",
  },
  {
    icon: Wrench,
    title: "End-to-End Support",
    desc: "From consultation and installation to maintenance and technical assistance.",
  },
  {
    icon: Cpu,
    title: "Innovative Technology",
    desc: "Latest display technologies and intelligent content management systems.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    desc: "Committed to building long-term relationships through outstanding service.",
  },
];

const services = [
  {
    icon: Monitor,
    title: "Indoor LED Screens",
    desc: "High-resolution displays designed for indoor environments.",
    slug: "indoor-led-screens",
  },
  {
    icon: Sun,
    title: "Outdoor LED Screens",
    desc: "Weatherproof solutions for impactful outdoor advertising.",
    slug: "outdoor-led-screens",
  },
  {
    icon: LayoutGrid,
    title: "Video Walls",
    desc: "Immersive display systems for control rooms and commercial spaces.",
    slug: "video-walls",
  },
  {
    icon: MousePointer2,
    title: "Interactive Kiosks",
    desc: "Touch-enabled experiences for customer engagement.",
    slug: "interactive-kiosks",
  },
  {
    icon: UtensilsCrossed,
    title: "Digital Menu Boards",
    desc: "Dynamic and attractive menu solutions for restaurants and cafés.",
    slug: "digital-menu-boards",
  },
  {
    icon: Building2,
    title: "Corporate Signage",
    desc: "Professional communication displays for offices and enterprises.",
    slug: "corporate-signage",
  },
];

const industries = [
  { icon: ShoppingBag, name: "Retail" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Coffee, name: "Restaurants & Cafés" },
  { icon: Briefcase, name: "Corporate Offices" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Banking" },
  { icon: Plane, name: "Airports & Transport" },
  { icon: ShoppingCart, name: "Shopping Malls" },
  { icon: Film, name: "Entertainment" },
  { icon: ScrollText, name: "Government" },
  { icon: CalendarDays, name: "Events & Exhibitions" },
];

const coreValues = [
  { icon: Lightbulb, title: "Innovation", desc: "Continuously embracing the latest technologies." },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Building trust through transparency and reliability.",
  },
  { icon: Trophy, title: "Excellence", desc: "Delivering superior quality and performance." },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Putting customer success at the center of everything we do.",
  },
  {
    icon: Handshake,
    title: "Commitment",
    desc: "Dedicated to long-term partnerships and support.",
  },
  { icon: TrendingUp, title: "Growth", desc: "Helping businesses achieve sustainable success." },
];

const stats = [
  { n: 500, suffix: "+", label: "Successful Projects" },
  { n: 200, suffix: "+", label: "Happy Clients" },
  { n: 15, suffix: "+", label: "Industries Served" },
  { n: 24, suffix: "/7", label: "Technical Support" },
  { n: 99, suffix: "%", label: "Customer Satisfaction" },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understanding your requirements and business goals.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Planning",
    desc: "Designing customized solutions and strategies.",
    icon: ScrollText,
  },
  {
    step: "03",
    title: "Installation",
    desc: "Professional deployment and system setup.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Integration",
    desc: "Seamless content and software configuration.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Support",
    desc: "Ongoing maintenance and technical assistance.",
    icon: ShieldCheck,
  },
];

function AboutPage() {
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
            <Eyebrow>About Virtue Solutions</Eyebrow>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Transforming Businesses Through{" "}
            <span className="neon-text">Innovative Digital Signage</span> Solutions
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/70"
          >
            Empowering brands with cutting-edge display technology, interactive experiences, and
            intelligent communication solutions.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-base text-white/60"
          >
            Virtue Solutions specializes in delivering advanced digital signage systems — from
            Indoor LED Screens and Outdoor Displays to Video Walls and Interactive Kiosks — tailored
            to every industry.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ConsultButton className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </ConsultButton>
            <a
              href={TEL_CALL}
              className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW + MISSION + VISION */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Visual communication is the <span className="neon-text">future of engagement</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              At Virtue Solutions, we believe that visual communication is the future of business
              engagement. With a commitment to innovation, quality, and customer satisfaction, we
              provide state-of-the-art digital signage solutions that enable organizations to
              captivate audiences and deliver impactful messages.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Our expertise spans Indoor LED Screens, Outdoor LED Displays, Video Walls, Interactive
              Kiosks, Digital Menu Boards, and Corporate Signage Systems. We work closely with
              businesses to deliver customized solutions that drive measurable results.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To empower businesses with innovative digital display technologies that enhance communication, strengthen brand visibility, and create meaningful customer experiences.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become a trusted leader in digital signage solutions by delivering exceptional products, innovative technologies, and unmatched customer support.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass-strong hover-glow rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl" />
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ background: "var(--gradient-neon)" }}
                >
                  <c.icon className="h-7 w-7 text-[#04121A]" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            The <span className="neon-text">Virtue advantage</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-2xl p-7 group"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl glass group-hover:scale-110 transition-transform">
                <w.icon className="h-6 w-6 text-[var(--neon)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            End-to-end <span className="neon-text">signage solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[var(--cyan-glow)]/10 blur-3xl group-hover:bg-[var(--neon)]/15 transition-colors" />
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl"
                style={{ background: "var(--gradient-neon)" }}
              >
                <s.icon className="h-7 w-7 text-[#04121A]" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{s.desc}</p>
              <Link
                to="/solutions/$slug"
                params={{ slug: s.slug }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--neon)] group-hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Industries We Serve</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Trusted across <span className="neon-text">every sector</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i * 0.5}
              variants={fadeUp}
              className="glass hover-glow rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg glass">
                <ind.icon className="h-5 w-5 text-[var(--neon)]" />
              </div>
              <span className="text-sm font-medium">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Our Core Values</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            What we <span className="neon-text">stand for</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-2xl p-7 border-t-2 border-t-transparent hover:border-t-[var(--neon)] transition-colors"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "var(--gradient-neon)" }}
              >
                <v.icon className="h-6 w-6 text-[#04121A]" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COUNTERS */}
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

      {/* PROCESS TIMELINE */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            From idea to <span className="neon-text">impact</span>
          </h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent" />
          <div className="space-y-8">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-6 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="glass-strong hover-glow rounded-2xl p-7 inline-block w-full text-left">
                    <div className="flex items-center gap-4">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-xl"
                        style={{ background: "var(--gradient-neon)" }}
                      >
                        <p.icon className="h-6 w-6 text-[#04121A]" />
                      </div>
                      <div className="font-display text-3xl font-bold neon-text">{p.step}</div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-white/65">{p.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:grid place-items-center">
                  <div
                    className="h-4 w-4 rounded-full bg-[var(--neon)]"
                    style={{ boxShadow: "var(--shadow-neon)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TRUST */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <div
              className="mx-auto grid h-16 w-16 place-items-center rounded-2xl"
              style={{ background: "var(--gradient-neon)" }}
            >
              <CheckCircle2 className="h-8 w-8 text-[#04121A]" />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Why Businesses Trust <span className="neon-text">Virtue Solutions</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-white/70 leading-relaxed">
              Businesses trust Virtue Solutions because we combine innovative technology,
              premium-quality products, and exceptional customer service. Our commitment to
              delivering reliable and customized digital signage solutions has helped organizations
              across various industries strengthen their brand presence and improve audience
              engagement.
            </p>
          </div>
        </motion.div>
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
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl glass-strong">
              <Rocket className="h-7 w-7 text-[var(--neon)]" />
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold">
              Ready to Elevate Your <span className="neon-text">Business Communication?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              Partner with Virtue Solutions and discover how innovative digital signage solutions
              can transform the way you engage your audience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ConsultButton className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </ConsultButton>
              <a
                href={TEL_CALL}
                className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
      <Footer />
    </main>
  );
}
