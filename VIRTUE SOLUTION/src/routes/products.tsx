import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Phone,
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
  Sparkles,
  Zap,
  Settings,
  Leaf,
  Headphones,
  Maximize,
  CheckCircle2,
  Plus,
  Minus,
  Presentation,
  Tv2,
  Projector,
  Layers,
  Wifi,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { ConsultButton } from "@/components/ConsultButton";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Virtue Solutions | Premium Digital Signage" },
      {
        name: "description",
        content:
          "Explore Virtue Solutions' digital signage products: Indoor & Outdoor Video Walls, Digital Standees, Smart Classroom & Boardroom Displays, Interactive Kiosks, Digital Menu Boards, and Corporate Signage.",
      },
      { property: "og:title", content: "Digital Signage Products — Virtue Solutions" },
      {
        property: "og:description",
        content:
          "Premium display solutions designed to enhance communication and elevate your brand.",
      },
    ],
  }),
  component: ProductsPage,
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

const products = [
  {
    icon: Monitor,
    slug: "indoor-led-screens",
    title: "Indoor LED Screens",
    desc: "Deliver vibrant and immersive visual experiences with high-resolution indoor LED displays designed for retail stores, conference rooms, shopping malls, and entertainment venues.",
    features: [
      "Full HD & 4K Resolution",
      "Seamless Panel Design",
      "Energy Efficient Technology",
      "Wide Viewing Angles",
      "Remote Content Management",
      "Long Operational Life",
    ],
    applications:
      "Retail Stores • Shopping Malls • Corporate Offices • Conference Rooms • Educational Institutions",
  },
  {
    icon: Sun,
    slug: "outdoor-led-screens",
    title: "Outdoor LED Screens",
    desc: "Weather-resistant outdoor LED displays engineered to provide maximum visibility and durability for advertising and public communication.",
    features: [
      "IP65 Waterproof Protection",
      "Ultra-High Brightness (5500–6000 nits)",
      "Durable Construction",
      "Remote Monitoring",
      "Energy Efficient Performance",
      "24/7 Operation",
    ],
    applications: "Billboards • Stadiums • Airports • Public Spaces • Commercial Buildings",
  },
  {
    icon: LayoutGrid,
    slug: "video-walls",
    title: "Video Walls",
    desc: "Create impactful and immersive visual experiences with seamless video wall solutions for control rooms, corporate lobbies, and large-scale events.",
    features: [
      "Ultra-Narrow Bezels",
      "Multiple Input Support",
      "24/7 Continuous Operation",
      "Scalable Configurations",
      "High Resolution Display",
      "Advanced Control Systems",
    ],
    applications:
      "Control Rooms • Broadcast Studios • Security Centers • Corporate Lobbies • Event Venues",
  },
  {
    icon: MousePointer2,
    slug: "interactive-kiosks",
    title: "Interactive Kiosks",
    desc: "Enhance customer interaction and self-service experiences with modern touch-enabled interactive kiosk solutions.",
    features: [
      "Multi-Touch Display",
      "User-Friendly Interface",
      "Custom Branding",
      "Secure Operations",
      "Remote Management",
      "Flexible Installation",
    ],
    applications:
      "Shopping Malls • Airports • Hospitals • Hotels • Banks • Educational Institutions",
  },
  {
    icon: UtensilsCrossed,
    slug: "digital-menu-boards",
    title: "Digital Menu Boards",
    desc: "Dynamic menu display systems that help restaurants and cafés showcase menus, promotions, and offers effectively.",
    features: [
      "Real-Time Content Updates",
      "Full HD Display",
      "Attractive Visual Presentation",
      "Centralized Management",
      "Schedule-Based Promotions",
      "Easy Integration",
    ],
    applications: "Restaurants • Cafés • Bakeries • Fast Food Chains • Food Courts",
  },
  {
    icon: Building2,
    slug: "corporate-signage",
    title: "Corporate Signage",
    desc: "Professional digital communication solutions for offices, boardrooms, reception areas, and enterprise environments.",
    features: [
      "Meeting Room Displays",
      "Visitor Information Systems",
      "Company Announcements",
      "Remote Content Management",
      "24/7 Reliability",
      "High Performance Displays",
    ],
    applications:
      "Corporate Offices • Reception Areas • Boardrooms • Healthcare Facilities • Educational Campuses",
  },
];

const whyChoose = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "High-performance products designed for reliability and long-term operation.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    desc: "Equipped with the latest display technologies and smart management systems.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    desc: "Products tailored to meet the unique requirements of every business.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    desc: "Optimized for lower power consumption and maximum performance.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Professional consultation, installation, and after-sales assistance.",
  },
  {
    icon: Maximize,
    title: "Scalable Systems",
    desc: "Solutions suitable for businesses of all sizes.",
  },
];

const industries = [
  { icon: ShoppingBag, name: "Retail" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Coffee, name: "Restaurants & Cafés" },
  { icon: Briefcase, name: "Corporate Offices" },
  { icon: GraduationCap, name: "Education" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Landmark, name: "Banking" },
  { icon: Plane, name: "Transportation" },
  { icon: ShoppingCart, name: "Shopping Malls" },
  { icon: Film, name: "Entertainment" },
  { icon: ScrollText, name: "Government" },
  { icon: CalendarDays, name: "Events & Exhibitions" },
];

const advantages = [
  "High Brightness and Clarity",
  "Energy Efficient Design",
  "Long Lifespan",
  "Easy Content Management",
  "Reliable Performance",
  "Seamless Integration",
  "Flexible Configurations",
  "Professional Installation Support",
];

const stats = [
  { n: 500, suffix: "+", label: "Projects Completed" },
  { n: 200, suffix: "+", label: "Happy Clients" },
  { n: 15, suffix: "+", label: "Industries Served" },
  { n: 99, suffix: "%", label: "Customer Satisfaction" },
  { n: 24, suffix: "/7", label: "Technical Support" },
];

const faqs = [
  {
    q: "Which digital signage product is right for my business?",
    a: "Our experts assess your space, audience, and goals to recommend the ideal mix — Indoor or Outdoor LEDs, Video Walls, Kiosks, or Menu Boards — tailored to your industry.",
  },
  {
    q: "What pixel pitches are available for Video Walls?",
    a: "Indoor Video Walls are available in P1, P2, P2.5, P3, and P4, while Outdoor Video Walls are available in P1, P2, P3, P4, P5, and P6.",
  },
  {
    q: "What sizes are available for Digital Standees?",
    a: 'Digital Standees are available in 24", 32", 43", 50", 55", 60", and 65", with custom sizes also available on request.',
  },
  {
    q: "Do you provide touch-enabled displays?",
    a: "Yes. Interactive touch displays are available for Digital Standees, Smart Classrooms, and Smart Boardroom solutions.",
  },
  {
    q: "Can display sizes be customized?",
    a: "Yes. Most products can be customized according to project requirements — from compact standees to large-format video walls.",
  },
  {
    q: "Do you provide installation and ongoing support?",
    a: "Yes. We deliver end-to-end service: site survey, professional installation, content setup, training, and 24/7 technical support.",
  },
  {
    q: "Can content be managed remotely?",
    a: "All our displays support centralized cloud-based content management, allowing you to schedule and update content from anywhere.",
  },
  {
    q: "Are outdoor displays weatherproof?",
    a: "Our outdoor LED screens are IP65-rated, ensuring durability against rain, dust, and extreme temperatures for 24/7 outdoor operation.",
  },
];

// Extended product catalog (Video Walls, Standees, Smart Classroom, Smart Boardroom)
const videoWalls = [
  {
    slug: "indoor-video-wall",
    icon: LayoutGrid,
    title: "Indoor Video Wall",
    desc: "Premium indoor video walls delivering seamless visuals, vibrant colors, and ultra-HD performance for control rooms, conference halls, retail, and corporate spaces.",
    pitches: ["P1", "P2", "P2.5", "P3", "P4"],
    features: [
      "Ultra-HD Visual Performance",
      "Seamless Panel Integration",
      "High Refresh Rate",
      "Wide Viewing Angles",
      "Low Power Consumption",
      "Flicker-Free Display",
      "Superior Color Accuracy",
      "24/7 Continuous Operation",
    ],
    benefits: [
      "Exceptional Image Quality",
      "Enhanced Customer Engagement",
      "Professional Presentation",
      "Reliable Performance",
      "Energy Efficiency",
      "Long Operational Life",
    ],
    applications: [
      "Corporate Offices",
      "Conference Rooms",
      "Retail Stores",
      "Shopping Malls",
      "Educational Institutions",
      "Control Rooms",
      "Broadcast Studios",
      "Exhibition Centers",
    ],
  },
  {
    slug: "outdoor-video-wall",
    icon: Sun,
    title: "Outdoor Video Wall",
    desc: "Weatherproof outdoor video walls engineered for high brightness, visibility, and reliable performance in harsh environmental conditions.",
    pitches: ["P1", "P2", "P3", "P4", "P5", "P6"],
    features: [
      "High Brightness Technology (5500–6000 nits)",
      "Weatherproof Design",
      "Dust & Moisture Protection",
      "Energy Efficient Performance",
      "Remote Monitoring",
      "High Refresh Rate",
      "Long Lifespan",
      "Stable Performance",
    ],
    benefits: [
      "Maximum Outdoor Visibility",
      "All-Weather Reliability",
      "24/7 Advertising Power",
      "Low Maintenance",
      "Long-Term ROI",
      "Brand Impact",
    ],
    applications: [
      "Billboards",
      "Stadiums",
      "Airports",
      "Commercial Buildings",
      "Public Spaces",
      "Transportation Hubs",
      "Event Venues",
    ],
  },
];

const standees = [
  {
    slug: "a-type-digital-standee",
    icon: Tv2,
    title: "A-Type Digital Standee",
    desc: "Modern, elegant, and portable digital standees ideal for promotions, branding, and customer communication across commercial environments.",
    features: [
      "Full HD Display",
      "Android OS",
      "High Brightness",
      "USB & HDMI Support",
      "Remote Content Management",
      "Elegant Slim Body",
    ],
    applications: [
      "Shopping Malls",
      "Hotels",
      "Restaurants",
      "Retail Stores",
      "Exhibition Centers",
      "Reception Areas",
    ],
  },
  {
    slug: "i-type-digital-standee",
    icon: Presentation,
    title: "I-Type Digital Standee",
    desc: "Premium standees for professional commercial environments with optional touch interaction and excellent visual quality.",
    features: [
      "Touch & Non-Touch Options",
      "Ultra-Slim Design",
      "Full HD Resolution",
      "Built-In Media Player",
      "Android & Windows Compatible",
      "Multiple Connectivity",
    ],
    applications: [
      "Hospitals",
      "Airports",
      "Banks",
      "Educational Institutions",
      "Corporate Offices",
      "Commercial Buildings",
    ],
  },
  {
    slug: "wall-mounted-displays",
    icon: Monitor,
    title: "Wall Mounted Displays",
    desc: "Space-efficient wall-mounted displays for professional advertising, announcements, and information sharing.",
    features: [
      "Slim Design",
      "Full HD & 4K Resolution",
      "High Brightness",
      "Remote Content Management",
      "Continuous Operation",
      "Multiple Input Options",
    ],
    applications: [
      "Schools",
      "Offices",
      "Hospitals",
      "Restaurants",
      "Retail Stores",
      "Waiting Areas",
    ],
  },
];

const smartRooms = [
  {
    slug: "smart-classroom",
    icon: GraduationCap,
    title: "Smart Classroom Solutions",
    desc: "Interactive smart displays designed to create engaging learning environments with collaboration, annotation, and wireless sharing.",
    startingSize: "43 Inch",
    features: [
      "Multi-Touch Technology",
      "Interactive Whiteboard",
      "Wireless Screen Sharing",
      "Ultra HD Display",
      "Built-In Android Platform",
      "Audio & Video Integration",
    ],
    applications: [
      "Schools",
      "Colleges",
      "Universities",
      "Coaching Institutes",
      "Training Centers",
    ],
  },
  {
    slug: "smart-boardroom",
    icon: Briefcase,
    title: "Smart Boardroom Solutions",
    desc: "Intelligent meeting displays for advanced presentations, collaboration, and productivity in modern workplaces.",
    startingSize: "43 Inch",
    features: [
      "4K Ultra-HD Resolution",
      "Wireless Presentation",
      "Interactive Annotation",
      "Video Conferencing Compatible",
      "Multi-User Collaboration",
      "Smart Connectivity",
      "Touch Technology",
      "Real-Time Sharing",
    ],
    applications: [
      "Corporate Offices",
      "Boardrooms",
      "Conference Rooms",
      "Government Institutions",
      "Meeting Spaces",
    ],
  },
];

const standeeSizes = ['24"', '32"', '43"', '50"', '55"', '60"', '65"'];

const techAdvantages = [
  {
    icon: Sparkles,
    title: "High Resolution Displays",
    desc: "Crystal-clear visuals with superior color reproduction.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient Technology",
    desc: "Lower power consumption with maximum performance.",
  },
  {
    icon: Zap,
    title: "24/7 Reliability",
    desc: "Designed for continuous, around-the-clock operation.",
  },
  {
    icon: Wifi,
    title: "Seamless Connectivity",
    desc: "Compatible with multiple devices and platforms.",
  },
  {
    icon: Cpu,
    title: "Remote Content Management",
    desc: "Manage and schedule content from anywhere.",
  },
  {
    icon: Layers,
    title: "Long Operational Life",
    desc: "Engineered for durability and long-term use.",
  },
];

type ProductCard = {
  icon: React.ElementType;
  slug?: string;
  title: string;
  desc: string;
  features?: string[];
  pitches?: string[];
  startingSize?: string;
  applications?: string | string[];
  benefits?: string[];
};

function ExpandableProductCard({
  p,
  i,
  kind,
}: {
  p: ProductCard;
  i: number;
  kind: "video" | "standee" | "smart";
}) {
  const [open, setOpen] = useState(false);
  const Icon = p.icon;
  return (
    <motion.div
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
        <Icon className="h-7 w-7 text-[#04121A]" />
      </div>
      <h3 className="relative mt-5 text-2xl font-bold">{p.title}</h3>
      <p className="relative mt-3 text-white/65 leading-relaxed text-sm">{p.desc}</p>

      {p.pitches && (
        <div className="relative mt-5">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--neon)]/90">
            Available Pixel Pitch
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.pitches.map((px: string) => (
              <span key={px} className="rounded-full glass px-3 py-1 text-xs font-semibold">
                {px}
              </span>
            ))}
          </div>
        </div>
      )}

      {p.startingSize && (
        <div className="relative mt-5 rounded-xl glass p-4">
          <div className="text-[11px] tracking-[0.18em] uppercase text-white/60">Starting Size</div>
          <p className="mt-1 text-base font-semibold text-[var(--neon)]">
            {p.startingSize}{" "}
            <span className="text-white/60 text-xs font-normal">• Custom sizes available</span>
          </p>
        </div>
      )}

      <div className="relative mt-5">
        <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--neon)]/90">
          Key Features
        </div>
        <ul className="mt-3 grid grid-cols-1 gap-2">
          {(() => {
            const featuresArr = p.features ?? [];
            return featuresArr.slice(0, open ? featuresArr.length : 4).map((f: string) => f);
          })().map((f: any, idx: number) => (
            <li key={f} className="flex items-start gap-2 text-sm text-white/75">
              <CheckCircle2 className="h-4 w-4 text-[var(--neon)] shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative"
          >
            {p.benefits && (
              <div className="mt-5">
                <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--neon)]/90">
                  Benefits
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-2">
                  {p.benefits.map((b: string) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                      <ChevronRight className="h-4 w-4 text-[var(--neon)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-5 rounded-xl glass p-4">
              <div className="text-[11px] tracking-[0.18em] uppercase text-white/60">
                Applications
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {(() => {
                  const apps = Array.isArray(p.applications)
                    ? p.applications
                    : typeof p.applications === "string"
                      ? p.applications.split(" • ").map((s) => s.trim())
                      : [];
                  return apps.map((a: string) => (
                    <span
                      key={a}
                      className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-white/75"
                    >
                      {a}
                    </span>
                  ));
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mt-6 flex items-center justify-between gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--neon)] hover:gap-3 transition-all"
        >
          {open ? "Show less" : "View full specs"}{" "}
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
        <Link
          to="/solutions/$slug"
          params={{ slug: String(p.slug) }}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-[var(--neon)] transition-colors"
        >
          Details <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

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

function ProductsPage() {
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
            <Eyebrow>Our Products</Eyebrow>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Innovative <span className="neon-text">Digital Signage Products</span> for Every
            Business
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/70"
          >
            Premium display solutions designed to enhance communication, engage audiences, and
            elevate your brand presence.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-base text-white/60"
          >
            From Indoor LED Screens and Outdoor Displays to Interactive Kiosks and Video Walls — our
            products are built to deliver exceptional quality, reliability, and performance.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </a>
            <ConsultButton className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium">
              <Phone className="h-4 w-4" /> Get Free Consultation
            </ConsultButton>
          </motion.div>
        </div>
      </section>

      {/* VIDEO WALL SOLUTIONS */}
      <Section id="video-walls">
        <div className="text-center mb-14">
          <Eyebrow>Video Wall Solutions</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            High-impact <span className="neon-text">visual communication</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/65">
            Premium video walls engineered for commercial, corporate, retail, education, and public
            applications — delivering crystal-clear quality and reliable 24/7 performance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {videoWalls.map((p, i) => (
            <ExpandableProductCard key={p.slug} p={p} i={i} kind="video" />
          ))}
        </div>
      </Section>

      {/* DIGITAL STANDEE SOLUTIONS */}
      <Section id="digital-standees">
        <div className="text-center mb-14">
          <Eyebrow>Digital Standee Solutions</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Elegant displays for <span className="neon-text">brand storytelling</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/65">
            Powerful platforms for advertising, information sharing, and customer engagement across
            retail, hospitality, healthcare, and commercial environments.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {standeeSizes.map((s) => (
              <span
                key={s}
                className="rounded-full glass-strong px-4 py-1.5 text-xs font-semibold text-[var(--neon)]"
              >
                {s}
              </span>
            ))}
            <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs text-white/70">
              Custom sizes available
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standees.map((p, i) => (
            <ExpandableProductCard key={p.slug} p={p} i={i} kind="standee" />
          ))}
        </div>
      </Section>

      {/* SMART CLASSROOM & BOARDROOM */}
      <Section id="smart-displays">
        <div className="text-center mb-14">
          <Eyebrow>Smart Classroom & Boardroom</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Interactive intelligence for <span className="neon-text">modern spaces</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/65">
            Smart display systems that elevate learning, collaboration, and presentations — with
            multi-touch, wireless sharing, and 4K visuals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {smartRooms.map((p, i) => (
            <ExpandableProductCard key={p.slug} p={p} i={i} kind="smart" />
          ))}
        </div>
      </Section>

      {/* TECHNICAL ADVANTAGES */}
      <Section id="technical-advantages">
        <div className="text-center mb-14">
          <Eyebrow>Technical Advantages</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Engineered for <span className="neon-text">excellence</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techAdvantages.map((t, i) => (
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

      {/* WHY CHOOSE */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Why Choose Our Products</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Built for <span className="neon-text">performance</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((w, i) => (
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

      {/* ADVANTAGES */}
      <Section>
        <div className="text-center mb-14">
          <Eyebrow>Product Advantages</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            The <span className="neon-text">Virtue edge</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((a, i) => (
            <motion.div
              key={a}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass-strong hover-glow rounded-2xl p-5 flex items-start gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-[var(--neon)] shrink-0 mt-0.5" />
              <span className="text-sm font-medium">{a}</span>
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
              Ready to Upgrade Your <span className="neon-text">Business Communication?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              Discover innovative digital signage products designed to captivate audiences and
              enhance customer experiences. Our experts are here to help you find the perfect
              solution.
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
      <Footer />
    </main>
  );
}
