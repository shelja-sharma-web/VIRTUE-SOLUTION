import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  Plus,
  Minus,
  Monitor,
  Zap,
  Layers,
  Eye,
  Cloud,
  Clock,
  Shield,
  Maximize,
  Settings,
  Wifi,
  Tv,
  ShoppingBag,
  Building2,
  Building,
  GraduationCap,
  Hotel,
  Hospital,
  UtensilsCrossed,
  Plane,
  Train,
  Landmark,
  Radio,
  Camera,
  Calendar,
  Coffee,
  Cookie,
  Pizza,
  Briefcase,
  Users,
  MousePointerClick,
  Palette,
  Lock,
  Wrench,
  RefreshCw,
  Image as ImageIcon,
  Megaphone,
  Database,
  ShieldCheck,
  Activity,
  Volume2,
  Cpu,
  HardDrive,
  Power,
  Thermometer,
  Ruler,
  Weight,
  Battery,
  Presentation,
  Tv2,
  Sun,
  LayoutGrid,
  MousePointer2,
} from "lucide-react";
import Footer from "@/components/Footer";
import { CONTACT, MAILTO, TEL_CALL } from "@/lib/contact";

/* ============================== TYPES ============================== */

type IconType = React.ElementType;
type Feature = { icon: IconType; title: string; desc: string };
type Spec = { label: string; value: string; icon?: IconType };
type Faq = { q: string; a: string };
type Dimension = { name: string; rows: { label: string; value: string }[] };
type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  overviewBullets: string[];
  features: Feature[];
  benefits: string[];
  applications: { icon: IconType; label: string }[];
  specs: Spec[];
  dimensions?: Dimension[];
  performance: { value: number; suffix?: string; label: string }[];
  faqs: Faq[];
  stats: { value: number; suffix?: string; label: string }[];
};

/* ============================== DATA ============================== */

const SHARED_APPLICATIONS = [
  { icon: ShoppingBag, label: "Shopping Malls" },
  { icon: Building, label: "Retail Stores" },
  { icon: Plane, label: "Airports" },
  { icon: Hotel, label: "Hotels" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Landmark, label: "Banks" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Building2, label: "Corporate Offices" },
  { icon: Users, label: "Reception Areas" },
  { icon: Calendar, label: "Exhibition Centers" },
  { icon: Presentation, label: "Event Venues" },
];

const STANDARD_FEATURES: Feature[] = [
  { icon: Monitor, title: "Ultra HD Display", desc: "Crystal-clear Full HD visuals." },
  { icon: Sun, title: "350 NITS Brightness", desc: "Superior visibility and vibrant colors." },
  { icon: Eye, title: "178° Viewing Angle", desc: "Wide viewing experience from any side." },
  { icon: Volume2, title: "10W + 10W Speakers", desc: "Powerful built-in audio system." },
  { icon: Wifi, title: "USB & WiFi Connectivity", desc: "Easy content management anywhere." },
  { icon: Zap, title: "Energy Efficient", desc: "Less than 100W consumption." },
  { icon: Clock, title: "24/7 Operation", desc: "Built for continuous performance." },
  { icon: Cloud, title: "Remote CMS Support", desc: "Manage content remotely from anywhere." },
];

const STANDARD_SPECS: Spec[] = [
  { icon: Monitor, label: "Display Quality", value: "LED IPS Ultra HD Display" },
  { icon: Maximize, label: "Resolution", value: "1920 × 1080 @ 60Hz" },
  { icon: Sun, label: "Brightness", value: "350 NITS" },
  { icon: Eye, label: "Viewing Angle", value: "178°" },
  { icon: Palette, label: "Color Support", value: "16.7M Colors (8-bit)" },
  { icon: Volume2, label: "Audio", value: "10W + 10W Speakers" },
  { icon: Cpu, label: "RAM", value: "1GB / 2GB" },
  { icon: HardDrive, label: "Internal Storage", value: "8GB / 16GB" },
  { icon: Wifi, label: "Connectivity", value: "USB · WiFi · HDMI" },
  { icon: Power, label: "Power Supply", value: "100V – 240V AC, 50/60Hz" },
  { icon: Zap, label: "Power Consumption", value: "Less than 100W" },
  { icon: Battery, label: "Standby", value: "Less than 0.5W" },
];

const STANDARD_PERFORMANCE = [
  { value: 350, suffix: " NITS", label: "Brightness" },
  { value: 178, suffix: "°", label: "Viewing Angle" },
  { value: 16.7, suffix: "M", label: "Colors" },
  { value: 1080, suffix: "p", label: "Full HD" },
  { value: 24, suffix: "/7", label: "Operation" },
  { value: 100, suffix: "W", label: "Power Saving" },
];

const STANDEE_DIMENSIONS: Dimension[] = [
  {
    name: "Digital Walker",
    rows: [
      { label: "Structure", value: "550 × 340 mm" },
      { label: "Display Area", value: "500 × 290 mm" },
      { label: "Weight", value: "5.5 kg" },
      { label: "Battery Backup", value: "5–6 Hours" },
      { label: "RAM", value: "1GB" },
      { label: "Storage", value: "8GB" },
    ],
  },
  {
    name: "Wall Mount",
    rows: [
      { label: "Overall Size", value: "864 × 534 mm" },
      { label: "Viewing Area", value: "690 × 385 mm" },
      { label: "Weight", value: "18 kg" },
      { label: "RAM", value: "2GB" },
      { label: "Storage", value: "16GB" },
    ],
  },
  {
    name: "Wheel Standee",
    rows: [
      { label: "Overall Size", value: "1400 × 470 mm" },
      { label: "Viewing Area", value: "690 × 385 mm" },
      { label: "Weight", value: "23 kg" },
    ],
  },
  {
    name: "A-Type Standee",
    rows: [
      { label: "Size", value: "1380 × 470 mm" },
      { label: "Viewing Area", value: "690 × 385 mm" },
      { label: "Large Version", value: "1620 × 640 mm" },
      { label: "Large Viewing", value: "930 × 520 mm" },
      { label: "Weight", value: "25–28 kg" },
    ],
  },
  { name: "Horizontal Display", rows: [{ label: "Weight", value: "30 kg" }] },
  {
    name: "6ft Standee",
    rows: [
      { label: "Size", value: "1880 × 640 mm" },
      { label: "Weight", value: "35–45 kg" },
    ],
  },
  { name: "7ft Digital Standee", rows: [{ label: "Weight", value: "50–62 kg" }] },
];

const STANDARD_FAQS: Faq[] = [
  {
    q: "Can the content be updated remotely?",
    a: "Yes. USB, WiFi, LAN and optional 4G connectivity are available for centralized cloud-based remote content management.",
  },
  {
    q: "Is the display suitable for 24/7 operation?",
    a: "Yes. Every display is engineered for continuous 24/7 commercial-grade operation with industrial cooling.",
  },
  {
    q: "Are custom sizes available?",
    a: "Yes. We offer custom sizes and configurations to match unique project requirements.",
  },
  {
    q: "Is installation support provided?",
    a: "Yes. End-to-end professional installation, training, and ongoing technical support are included.",
  },
  {
    q: "Is remote CMS available?",
    a: "Yes. A cloud-based CMS lets you schedule playlists, push updates, and monitor screens from anywhere.",
  },
];

function buildStandardSolution(p: {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  applications?: { icon: IconType; label: string }[];
  features?: Feature[];
  specs?: Spec[];
  faqs?: Faq[];
  dimensions?: Dimension[];
  extraOverview?: string[];
}): Solution {
  return {
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description,
    overview: p.overview,
    overviewBullets: p.extraOverview ?? [
      "Commercial-grade display",
      "High durability",
      "Smart connectivity",
      "Professional advertising solution",
      "Continuous operation capability",
    ],
    features: p.features ?? STANDARD_FEATURES,
    benefits: [
      "Improved customer engagement.",
      "Enhanced brand visibility.",
      "Professional presentation quality.",
      "Cost-effective advertising.",
      "Flexible content management.",
      "Superior image clarity.",
    ],
    applications: p.applications ?? SHARED_APPLICATIONS,
    specs: p.specs ?? STANDARD_SPECS,
    dimensions: p.dimensions,
    performance: STANDARD_PERFORMANCE,
    faqs: p.faqs ?? STANDARD_FAQS,
    stats: [
      { value: 350, suffix: " NITS", label: "Brightness" },
      { value: 178, suffix: "°", label: "Viewing Angle" },
      { value: 24, suffix: "/7", label: "Operation" },
      { value: 100, suffix: "%", label: "Reliability" },
    ],
  };
}

export const SOLUTIONS: Record<string, Solution> = {
  /* ----- ORIGINAL 6 ----- */
  "indoor-led-screens": buildStandardSolution({
    slug: "indoor-led-screens",
    title: "Indoor LED Screens",
    subtitle:
      "High-resolution LED displays delivering vibrant visuals and seamless performance for indoor environments.",
    description:
      "Transform indoor spaces with premium LED display solutions providing exceptional image quality, energy efficiency, and reliable performance.",
    overview:
      "Indoor LED screens are ideal for retail, malls, conference rooms, corporate offices, hotels, education and entertainment venues — delivering bright, immersive experiences that captivate audiences and elevate any brand presence.",
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD / 4K LED" },
      { icon: Sun, label: "Brightness", value: "600 – 1500 NITS" },
      { icon: Layers, label: "Pixel Pitch", value: "P1.2 – P4" },
      { icon: RefreshCw, label: "Refresh Rate", value: "3840 Hz" },
      { icon: Eye, label: "Viewing Angle", value: "160°" },
      { icon: Clock, label: "Operating Life", value: "100,000 Hours" },
      { icon: Wifi, label: "Connectivity", value: "HDMI · USB · LAN" },
      { icon: Cloud, label: "CMS", value: "Cloud-Based" },
    ],
  }),
  "outdoor-led-screens": buildStandardSolution({
    slug: "outdoor-led-screens",
    title: "Outdoor LED Screens",
    subtitle:
      "Weatherproof, high-brightness LED displays for outdoor advertising and public communication.",
    description:
      "Built to withstand the elements while delivering unmatched brightness and clarity in any environment, day or night.",
    overview:
      "Outdoor LED screens are engineered for billboards, stadiums, transportation hubs and public spaces — with IP65 protection and a calibrated brightness range of 5500–6000 nits for crystal-clear visuals even in direct sunlight.",
    specs: [
      { icon: Sun, label: "Brightness", value: "5500 – 6000 NITS" },
      { icon: Shield, label: "IP Rating", value: "IP65" },
      { icon: RefreshCw, label: "Refresh Rate", value: "3840 Hz" },
      { icon: Eye, label: "Viewing Angle", value: "160°" },
      { icon: Clock, label: "Lifespan", value: "100,000 Hours" },
      { icon: Thermometer, label: "Operating Temp", value: "-30°C to 60°C" },
      { icon: Power, label: "Power", value: "AC 110–240V" },
      { icon: Cloud, label: "Remote CMS", value: "Supported" },
    ],
  }),
  "video-walls": buildStandardSolution({
    slug: "video-walls",
    title: "Video Walls",
    subtitle:
      "Seamless video wall solutions for control rooms, corporate lobbies, monitoring centers, and events.",
    description:
      "Create breathtaking visual experiences with ultra-narrow bezel video walls combining multiple displays into one massive, seamless canvas.",
    overview:
      "Video walls are designed for mission-critical environments — broadcast studios, command centers, retail flagships and corporate HQs — where every pixel matters.",
    specs: [
      { icon: Ruler, label: "Bezel Width", value: "0.88 mm" },
      { icon: Monitor, label: "Resolution", value: "4K / 8K" },
      { icon: Sun, label: "Brightness", value: "500 – 700 NITS" },
      { icon: Clock, label: "Operation", value: "24/7" },
      { icon: LayoutGrid, label: "Configuration", value: "Up to 10×10" },
      { icon: Cpu, label: "Lifespan", value: "60,000+ Hours" },
      { icon: Layers, label: "Inputs", value: "HDMI · DP · IP" },
      { icon: Settings, label: "Control", value: "Centralized" },
    ],
  }),
  "interactive-kiosks": buildStandardSolution({
    slug: "interactive-kiosks",
    title: "Interactive Kiosks",
    subtitle:
      "Touch-enabled self-service kiosks that improve interaction and information accessibility.",
    description:
      "Empower customers with intuitive, beautifully designed interactive kiosks that streamline operations and elevate the user experience.",
    overview:
      "From wayfinding to self-service ordering, interactive kiosks combine premium hardware with intelligent software for effortless, engaging experiences across any industry.",
    features: [
      {
        icon: MousePointerClick,
        title: "Multi-Touch Technology",
        desc: "Responsive capacitive touch with gestures.",
      },
      {
        icon: Sparkles,
        title: "User-Friendly Interface",
        desc: "Intuitive UI anyone can navigate.",
      },
      { icon: Palette, title: "Custom Branding", desc: "Fully customizable to match your brand." },
      {
        icon: Cloud,
        title: "Remote Management",
        desc: "Update content and monitor uptime remotely.",
      },
      { icon: Lock, title: "Secure Operations", desc: "Enterprise-grade security." },
      { icon: Wrench, title: "Flexible Installation", desc: "Wall, floor or counter mount." },
      { icon: Clock, title: "24/7 Operation", desc: "Built for continuous performance." },
      { icon: Wifi, title: "Smart Connectivity", desc: "Wi-Fi · 4G · LAN ready." },
    ],
    specs: [
      { icon: MousePointerClick, label: "Touch", value: "Capacitive Multi-Touch" },
      { icon: Maximize, label: "Display Size", value: '21" – 75"' },
      { icon: Monitor, label: "Resolution", value: "Full HD / 4K" },
      { icon: Cpu, label: "OS", value: "Android / Windows" },
      { icon: Wifi, label: "Connectivity", value: "Wi-Fi · 4G · LAN" },
      { icon: Shield, label: "Rating", value: "IP54 (optional)" },
      { icon: Power, label: "Power", value: "AC 110–240V" },
      { icon: Cloud, label: "CMS", value: "Cloud-Based" },
    ],
  }),
  "digital-menu-boards": buildStandardSolution({
    slug: "digital-menu-boards",
    title: "Digital Menu Boards",
    subtitle: "Dynamic digital menu solutions for restaurants, cafés and quick-service chains.",
    description:
      "Modernize your menu presentation with stunning digital displays that boost sales, simplify updates and create mouth-watering visual appeal.",
    overview:
      "Replace static menus with vibrant digital boards that showcase your food in HD, update instantly across locations, and adapt to dayparting, inventory and promotions.",
    applications: [
      { icon: UtensilsCrossed, label: "Restaurants" },
      { icon: Coffee, label: "Cafés" },
      { icon: Building, label: "Food Courts" },
      { icon: Cookie, label: "Bakeries" },
      { icon: Pizza, label: "Fast Food Chains" },
      { icon: Coffee, label: "Coffee Shops" },
    ],
  }),
  "corporate-signage": buildStandardSolution({
    slug: "corporate-signage",
    title: "Corporate Signage",
    subtitle:
      "Professional communication displays for offices, boardrooms, reception and enterprise environments.",
    description:
      "Elevate workplace communication with sleek, intelligent signage that informs, engages and reflects your brand's professionalism.",
    overview:
      "From welcoming visitors to broadcasting company updates, corporate signage solutions transform every screen into a strategic communication touchpoint.",
  }),

  /* ----- UNIFIED STANDEE ----- */
  "digital-standee": buildStandardSolution({
    slug: "digital-standee",
    title: "Digital Standee",
    subtitle: "Floor-standing digital standees for retail, hospitality and events.",
    description:
      "A versatile family of floor-standing digital standees — available as A-Type, I-Type, wheel-enabled and tall-format units — designed for high-impact branding and customer engagement.",
    overview:
      "Digital standees combine commercial-grade panels, built-in media players, optional touch interaction, and flexible mounting options. Perfect for retail aisles, hotel lobbies, exhibitions and reception areas.",
    extraOverview: [
      'Available in multiple sizes: 24"-65"',
      "Optional touch-enabled variants for interactive experiences",
      "Remote CMS for centralized content management",
      "Commercial-grade panels for 24/7 operation",
      "Multiple connectivity options: USB, LAN, Wi-Fi, optional 4G",
    ],
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD / 4K (depending on size)" },
      { icon: Cpu, label: "RAM", value: "1GB – 2GB" },
      { icon: HardDrive, label: "Storage", value: "8GB – 32GB" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi · LAN · Optional 4G" },
      { icon: Volume2, label: "Audio", value: "Built-in speakers (10W + 10W typical)" },
      { icon: Battery, label: "Battery", value: "Optional battery backup for portable variants" },
    ],
    dimensions: STANDEE_DIMENSIONS,
    applications: SHARED_APPLICATIONS,
    faqs: [
      {
        q: "Can I choose touch or non-touch?",
        a: "Yes — most standees are offered with optional capacitive touch for interactive use-cases.",
      },
      {
        q: "Do you offer custom branding?",
        a: "Yes — we provide custom skins, mounting and content templates to match your brand.",
      },
      {
        q: "What sizes are available?",
        a: 'Standard sizes range from 24" to 65" with custom sizes available on request.',
      },
    ],
  }),

  "interactive-standee": buildStandardSolution({
    slug: "interactive-standee",
    title: "Interactive Standee",
    subtitle: "Touch-enabled interactive standees for self-service and engagement.",
    description:
      "Interactive standees blend responsive multi-touch displays with robust players and secure enclosures — ideal for wayfinding, catalogs, self-checkout and interactive promotions.",
    overview:
      "Built with capacitive multi-touch, fast media players, and optional camera/sensor modules for enriched interactive experiences. Supports Android and Windows platforms with cloud CMS integration.",
    extraOverview: [
      "Capacitive multi-touch support",
      "High-brightness commercial panels for vivid visuals",
      "Secure enclosures with tamper protection",
      "Remote diagnostics and content updates",
    ],
    features: [
      {
        icon: MousePointerClick,
        title: "Multi-Touch",
        desc: "Responsive gesture and multi-finger support",
      },
      { icon: Lock, title: "Secure", desc: "Enterprise-grade locking and tamper protection" },
      { icon: Cloud, title: "Remote CMS", desc: "Centralized content scheduling and monitoring" },
      { icon: Wifi, title: "Multiple Connectivity", desc: "Wi‑Fi, LAN, optional 4G" },
    ],
    specs: [
      { icon: MousePointerClick, label: "Touch", value: "Capacitive Multi-Touch" },
      { icon: Maximize, label: "Display Size", value: '21"-55"' },
      { icon: Cpu, label: "OS", value: "Android / Windows" },
      { icon: Wifi, label: "Connectivity", value: "Wi‑Fi · LAN · USB" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(0, 4),
    faqs: [
      {
        q: "Can it run custom applications?",
        a: "Yes — we support custom Android/Windows apps and web-based experiences.",
      },
      {
        q: "Is the touch durable for public use?",
        a: "Yes — industrial-grade capacitive touch rated for heavy public usage.",
      },
    ],
  }),

  "smart-classroom-smart-board": buildStandardSolution({
    slug: "smart-classroom-smart-board",
    title: "Smart Classroom & Smart Board",
    subtitle: "Interactive displays for collaborative learning and meetings.",
    description:
      "A unified offering combining smart classroom displays and smart boardroom panels — interactive, collaborative, and designed for education and enterprise use-cases.",
    overview:
      "Includes multi-touch interactive displays, wireless screen sharing, annotation tools, and integrated audio/video features for modern learning and meeting spaces.",
    extraOverview: [
      "Multi-user annotation and whiteboarding",
      "Wireless casting and screen share",
      "Built-in Android with optional Windows support",
      "Integrated A/V for classroom and boardroom use",
    ],
    features: [
      {
        icon: MousePointerClick,
        title: "Multi-Touch",
        desc: "Multi-point touch with low-latency response",
      },
      { icon: Presentation, title: "Annotation", desc: "Built-in whiteboard and annotation tools" },
      { icon: Wifi, title: "Casting", desc: "Cast from laptops and mobile devices wirelessly" },
      {
        icon: Volume2,
        title: "A/V Integration",
        desc: "Built-in speakers and mic support for conferencing",
      },
    ],
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD / 4K" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi‑Fi · LAN" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(1, 3),
    faqs: [
      {
        q: "Can I connect video conferencing?",
        a: "Yes — compatible with common video-conferencing platforms via PC or built-in options.",
      },
      {
        q: "Do you offer training?",
        a: "Yes — we provide installation, training, and onboarding for educators and corporate users.",
      },
    ],
  }),

  /* ----- EXTENDED CATALOG ----- */
  "indoor-video-wall": buildStandardSolution({
    slug: "indoor-video-wall",
    title: "Indoor Video Wall",
    subtitle:
      "Premium indoor video walls with ultra-HD performance for corporate, retail, education and control rooms.",
    description:
      "Seamless visuals, vibrant colors, and 24/7 reliability in a fully scalable indoor video wall solution.",
    overview:
      "Ultra-HD performance with seamless panel integration and superior color accuracy — engineered for corporate offices, conference rooms, retail and broadcast studios.",
    specs: [
      { icon: Layers, label: "Pixel Pitch", value: "P1 · P2 · P2.5 · P3 · P4" },
      { icon: Monitor, label: "Resolution", value: "Ultra HD / 4K" },
      { icon: Sun, label: "Brightness", value: "600 – 1500 NITS" },
      { icon: RefreshCw, label: "Refresh Rate", value: "3840 Hz" },
      { icon: Eye, label: "Viewing Angle", value: "160°" },
      { icon: Clock, label: "Operation", value: "24/7 Continuous" },
      { icon: Cpu, label: "Lifespan", value: "100,000 Hours" },
      { icon: Cloud, label: "CMS", value: "Cloud-Based" },
    ],
  }),
  "outdoor-video-wall": buildStandardSolution({
    slug: "outdoor-video-wall",
    title: "Outdoor Video Wall",
    subtitle:
      "Weatherproof outdoor video walls engineered for visibility and reliable performance in any condition.",
    description:
      "High brightness (5500–6000 nits), dust and moisture protection, and remote monitoring — built for all-weather 24/7 advertising power.",
    overview:
      "Outdoor video walls deliver maximum visibility and reliability across billboards, stadiums, airports and commercial buildings — with IP-rated protection and a calibrated brightness range of 5500–6000 nits.",
    specs: [
      { icon: Layers, label: "Pixel Pitch", value: "P1 · P2 · P3 · P4 · P5 · P6" },
      { icon: Sun, label: "Brightness", value: "5500 – 6000 NITS" },
      { icon: Shield, label: "IP Rating", value: "IP65 / IP66" },
      { icon: RefreshCw, label: "Refresh Rate", value: "3840 Hz" },
      { icon: Eye, label: "Viewing Angle", value: "160°" },
      { icon: Thermometer, label: "Operating Temp", value: "-30°C to 60°C" },
      { icon: Power, label: "Power", value: "AC 110–240V" },
      { icon: Cloud, label: "Remote CMS", value: "Supported" },
    ],
  }),
  "a-type-digital-standee": buildStandardSolution({
    slug: "a-type-digital-standee",
    title: "A-Type Digital Standee",
    subtitle:
      "Modern, elegant, and portable digital standees ideal for promotions and customer communication.",
    description:
      "Commercial-grade A-type standees with Full HD displays, high brightness and remote content management.",
    overview:
      "A premium A-type digital standee built for shopping malls, hotels, restaurants and exhibition centers — engineered for 24/7 continuous operation with smart connectivity.",
    dimensions: STANDEE_DIMENSIONS,
  }),
  "i-type-digital-standee": buildStandardSolution({
    slug: "i-type-digital-standee",
    title: "I-Type Digital Standee",
    subtitle:
      "Premium I-type standees for professional commercial environments with optional touch interaction.",
    description:
      "Ultra-slim I-type design with Full HD resolution, built-in media player and multiple connectivity options.",
    overview:
      "Ideal for hospitals, airports, banks, educational institutions and corporate offices — with touch and non-touch variants and Android / Windows compatibility.",
    dimensions: STANDEE_DIMENSIONS,
  }),
  "wall-mounted-displays": buildStandardSolution({
    slug: "wall-mounted-displays",
    title: "Wall Mounted Displays",
    subtitle:
      "Space-efficient wall-mounted displays for professional advertising and information sharing.",
    description:
      "Slim design with Full HD / 4K resolution, high brightness and remote content management.",
    overview:
      "Designed for schools, offices, hospitals, restaurants and retail stores — with continuous operation and multiple input options.",
    dimensions: STANDEE_DIMENSIONS.slice(1, 2),
  }),
  "smart-classroom": buildStandardSolution({
    slug: "smart-classroom",
    title: "Smart Classroom Solutions",
    subtitle:
      "Interactive smart displays for engaging learning environments with collaboration and wireless sharing.",
    description:
      'Multi-touch technology, interactive whiteboard, wireless screen sharing and Ultra HD display from 43" upwards.',
    overview:
      "Built for schools, colleges, universities and training centers — with built-in Android, audio/video integration and seamless wireless sharing.",
    features: [
      {
        icon: MousePointerClick,
        title: "Multi-Touch Technology",
        desc: "Responsive multi-point touch.",
      },
      { icon: Presentation, title: "Interactive Whiteboard", desc: "Built-in annotation tools." },
      { icon: Wifi, title: "Wireless Screen Sharing", desc: "Cast from any device instantly." },
      { icon: Monitor, title: "Ultra HD Display", desc: "Crystal-clear 4K visuals." },
      { icon: Cpu, title: "Built-In Android", desc: "No external PC required." },
      { icon: Volume2, title: "A/V Integration", desc: "Powerful built-in speakers." },
      { icon: Cloud, title: "Remote CMS", desc: "Centralized device management." },
      { icon: Clock, title: "24/7 Reliability", desc: "Engineered for daily classroom use." },
    ],
  }),
  "smart-boardroom": buildStandardSolution({
    slug: "smart-boardroom",
    title: "Smart Boardroom Solutions",
    subtitle:
      "Intelligent meeting displays for advanced presentations, collaboration and productivity.",
    description:
      "4K Ultra-HD resolution, wireless presentation, interactive annotation and video conferencing in one premium display.",
    overview:
      "Built for corporate offices, boardrooms, conference rooms and government institutions — with multi-user collaboration and real-time sharing.",
  }),

  /* ----- OUTDOOR STANDEE ----- */
  "outdoor-standee": buildStandardSolution({
    slug: "outdoor-standee",
    title: "Outdoor Digital Standee",
    subtitle:
      "Weatherproof outdoor standees engineered for premium advertising in any environment.",
    description:
      "High-brightness outdoor standees with IP65/IP66 protection, multiple pixel pitch options and remote CMS support.",
    overview:
      "Built for outdoor public spaces, transportation hubs, retail entrances and event venues — with industrial-grade construction for -20°C to 50°C operation.",
    specs: [
      { icon: Layers, label: "Pixel Pitch", value: "P2 · P3 · P4 · P5 · P6 · P8 · P10" },
      { icon: Sun, label: "Brightness", value: "5000 – 7000 NITS" },
      { icon: Eye, label: "Viewing Angle", value: "178°" },
      { icon: HardDrive, label: "Storage", value: "32GB" },
      { icon: Power, label: "Power Supply", value: "AC 110–240V" },
      { icon: Shield, label: "Protection Rating", value: "IP65 / IP66" },
      { icon: Wrench, label: "Body Material", value: "Mild Steel / Aluminum" },
      { icon: Thermometer, label: "Operating Temp", value: "-20°C to 50°C" },
      { icon: Zap, label: "Energy Saving Mode", value: "Yes" },
      { icon: Cloud, label: "Remote CMS", value: "Optional" },
      { icon: Wifi, label: "Connectivity", value: "WiFi · LAN · 4G" },
      { icon: Clock, label: "Operation", value: "24/7" },
    ],
    faqs: [
      {
        q: "Which pixel pitch is best for outdoor standees?",
        a: "P5–P10 are ideal for medium-to-long viewing distance outdoor advertising. Closer viewing benefits from P2–P4.",
      },
      {
        q: "Is the display weatherproof?",
        a: "Yes — IP65/IP66 rated body with sealed cabinets handles rain, dust and extreme temperatures.",
      },
      {
        q: "Can content be updated remotely?",
        a: "Yes. WiFi, LAN and optional 4G plus a cloud CMS allow scheduling and updates from anywhere.",
      },
      {
        q: "Is installation support provided?",
        a: "Yes — end-to-end site survey, installation, training and 24/7 technical support.",
      },
      {
        q: "Are custom sizes available?",
        a: "Yes, custom cabinet sizes and pixel-pitch configurations are available on request.",
      },
    ],
  }),

  /* ----- DIGITAL STANDEE SOLUTIONS (NEW) ----- */
  "digital-walker": buildStandardSolution({
    slug: "digital-walker",
    title: "Digital Walker",
    subtitle: "Lightweight, intelligent advertising solution for promotions and events.",
    description:
      "The Digital Walker is designed for retail promotions, exhibitions, malls, events and customer engagement activities — offering portable, battery-backed, high-quality displays with easy remote management.",
    overview:
      "A nimble, portable standee optimized for close-range promotions, activations and temporary installations. Fast content updates and reliable battery backup make it ideal for dynamic retail environments.",
    specs: [
      { icon: Monitor, label: "Display Quality", value: "LED IPS Ultra HD Display" },
      { icon: Maximize, label: "Resolution", value: "1920 × 1080 @ 60Hz" },
      { icon: Sun, label: "Brightness", value: "350 NITS" },
      { icon: Eye, label: "Viewing Angle", value: "178°" },
      { icon: Palette, label: "Color Support", value: "16.7M Colors (8-bit)" },
      { icon: Volume2, label: "Audio System", value: "10W + 10W Speakers" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi" },
      { icon: Cpu, label: "RAM", value: "1GB" },
      { icon: HardDrive, label: "Storage", value: "8GB" },
      { icon: Battery, label: "Battery Backup", value: "12V / 7Ah (5–6 Hours)" },
      { icon: Power, label: "Power", value: "100–240V AC · ≤100W (Operating) · ≤0.5W (Standby)" },
      { icon: Weight, label: "Weight", value: "5.5 kg" },
    ],
    dimensions: [STANDEE_DIMENSIONS[0]],
    applications: SHARED_APPLICATIONS,
  }),

  "wheel-standee": buildStandardSolution({
    slug: "wheel-standee",
    title: "Wheel Standee",
    subtitle: "Portable digital signage with mobility support and premium display quality.",
    description:
      "A mobile, easy-to-deploy standee with high-brightness Full HD panels and remote management features. Built for venues that require frequent repositioning.",
    overview:
      "Portable digital signage solution with wheels for mobility and commercial-grade display performance.",
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD IPS" },
      { icon: Sun, label: "Brightness", value: "350 NITS" },
      { icon: Eye, label: "Viewing Angle", value: "178°" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Weight, label: "Weight", value: "25–28 kg" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(2, 3),
  }),

  "a-type-standee": buildStandardSolution({
    slug: "a-type-standee",
    title: "A-Type Standee",
    subtitle: "Elegant floor-standing display for retail branding and advertising.",
    description:
      "An elegant A-type floor standee with commercial-grade panel, remote CMS support and premium design for showroom and retail environments.",
    overview:
      "Floor-standing A-type solution optimized for high-impact visual branding in malls, showrooms and exhibition floors.",
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD IPS" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi" },
      { icon: Weight, label: "Weight", value: "25–28 kg" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(3, 4),
  }),

  "horizontal-standee": buildStandardSolution({
    slug: "horizontal-standee",
    title: "Horizontal Standee",
    subtitle: "Wide-format horizontal display for panoramic creative messaging.",
    description:
      "Horizontal standee with ultra HD panel, commercial components and remote update capability — ideal for wide-format promotions.",
    overview:
      "Wide-format horizontal standee optimized for panoramic content and creative installations, suitable for retail counters and promotional areas.",
    specs: [
      { icon: Monitor, label: "Display", value: "Ultra HD" },
      { icon: Sun, label: "Brightness", value: "350 NITS" },
      { icon: Eye, label: "Viewing Angle", value: "178°" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Volume2, label: "Audio", value: "10W + 10W" },
      { icon: Weight, label: "Weight", value: "30 kg" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(4, 5),
  }),

  "6ft-digital-standee": buildStandardSolution({
    slug: "6ft-digital-standee",
    title: "6 Feet Digital Standee",
    subtitle: "Large-format 6ft standee for high-visibility installations.",
    description:
      "Tall, commercial-grade standee suitable for malls, airports and corporate spaces where scale and presence matter.",
    overview:
      "A tall-format 6ft standee providing commanding presence for high-traffic areas, with commercial-grade panel and optional content scheduling via CMS.",
    specs: [
      { icon: Monitor, label: "Display", value: "Full HD / Commercial Panel" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi · LAN" },
      { icon: Weight, label: "Weight", value: "35–45 kg" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(5, 6),
  }),

  "7ft-digital-standee": buildStandardSolution({
    slug: "7ft-digital-standee",
    title: "7 Feet Digital Standee",
    subtitle: "Extra-large 7ft digital standee for maximum visibility.",
    description:
      "High-performance 7ft standee with powerful media player, large-format panel and robust construction for high-traffic locations.",
    overview:
      "Extra-large 7ft standee for maximum visibility and brand impact in airports, malls, and exhibition halls — built for continuous operation.",
    specs: [
      { icon: Monitor, label: "Display", value: "Ultra HD / Commercial Panel" },
      { icon: Cpu, label: "RAM", value: "2GB" },
      { icon: HardDrive, label: "Storage", value: "16GB" },
      { icon: Wifi, label: "Connectivity", value: "USB · Wi-Fi · LAN" },
      { icon: Weight, label: "Weight", value: "50–62 kg" },
    ],
    dimensions: STANDEE_DIMENSIONS.slice(6, 7),
  }),
};

const SLUG_LIST = Object.keys(SOLUTIONS);

/* ============================== ROUTE ============================== */

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const sol = SOLUTIONS[params.slug];
    if (!sol) throw notFound();
    return { sol };
  },
  head: ({ loaderData }) => {
    const sol = loaderData?.sol;
    const title = sol ? `${sol.title} — Virtue Solutions` : "Product — Virtue Solutions";
    const desc = sol?.subtitle ?? "Premium digital signage solutions.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: SolutionPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold neon-text">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block rounded-full btn-neon px-6 py-3">
          Back to products
        </Link>
      </div>
    </div>
  ),
});

/* ============================== HELPERS ============================== */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to]);
  const display = Number.isInteger(to) ? Math.round(val).toLocaleString() : val.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

/* ============================== PAGE ============================== */

export function SolutionPage() {
  const { sol } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen bg-[var(--bg-deep)] text-foreground overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0,217,255,0.25), transparent 60%)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(106,255,77,0.3), transparent 60%)" }} />
      </div>

      <main className="relative z-10">
        <Breadcrumbs title={sol.title} />
        <Hero sol={sol} />
        <TabsNav hasDimensions={!!sol.dimensions?.length} />
        <Overview sol={sol} />
        <Stats sol={sol} />
        <Features sol={sol} />
        <Specifications sol={sol} />
        {sol.dimensions?.length ? <Dimensions sol={sol} /> : null}
        <Applications sol={sol} />
        <Performance sol={sol} />
        <FaqSection sol={sol} />
        <FinalCta sol={sol} />
        <RelatedProducts current={sol.slug} />
        <Footer />
      </main>

      <StickyCta />
    </div>
  );
}

/* ============================== SECTIONS ============================== */

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-28 pb-2">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-[var(--neon)] transition">
            Home
          </Link>
        </li>
        <ChevronRight className="h-4 w-4 opacity-50" />
        <li>
          <Link to="/products" className="hover:text-[var(--neon)] transition">
            Products
          </Link>
        </li>
        <ChevronRight className="h-4 w-4 opacity-50" />
        <li className="text-foreground">{title}</li>
      </ol>
    </nav>
  );
}

function Hero({ sol }: { sol: Solution }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-pulse-glow" />
            PREMIUM PRODUCT
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="neon-text">{sol.title}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">{sol.subtitle}</p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground/80">{sol.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://forms.gle/3twNk4hPD8G8KLEA7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-neon px-6 py-3.5 text-sm font-semibold"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </a>
            {/* Brochure download removed */}
            <a
              href={`tel:${CONTACT.callAnytimeRaw}`}
              className="glass-strong hover-glow inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Contact Sales
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-strong relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(0,217,255,0.45), transparent 55%), radial-gradient(circle at 70% 70%, rgba(106,255,77,0.45), transparent 55%)",
              }}
            />
            <div className="absolute inset-6 rounded-2xl border border-white/10 grid-bg opacity-60" />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-28 w-28 place-items-center rounded-3xl"
                style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
              >
                <Monitor className="h-12 w-12 text-[#04121A]" />
              </motion.div>
            </div>
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full opacity-60 blur-3xl"
              style={{ background: "var(--neon)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TabsNav({ hasDimensions }: { hasDimensions: boolean }) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Specifications" },
    ...(hasDimensions ? [{ id: "dimensions", label: "Dimensions" }] : []),
    { id: "applications", label: "Applications" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <div className="sticky top-20 z-30 mx-auto max-w-7xl px-4">
      <div className="glass-strong rounded-full p-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-[var(--neon)] hover:bg-white/5 transition"
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Overview({ sol }: { sol: Solution }) {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-4 py-14 scroll-mt-32">
      <SectionHeader eyebrow="PRODUCT OVERVIEW" title="Designed for impact" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong mt-10 rounded-3xl p-8 md:p-12"
      >
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{sol.overview}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sol.overviewBullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl glass p-4">
              <div
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
                style={{ background: "var(--gradient-neon)" }}
              >
                <Check className="h-4 w-4 text-[#04121A]" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Stats({ sol }: { sol: Solution }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {sol.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass hover-glow rounded-2xl p-6 text-center"
          >
            <div className="font-display text-3xl font-bold neon-text md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Features({ sol }: { sol: Solution }) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-32">
      <SectionHeader
        eyebrow="KEY FEATURES"
        title="Built for performance"
        desc="Premium engineering meets intelligent design."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sol.features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass hover-glow group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "var(--neon)" }}
              />
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{
                  background: "var(--gradient-neon)",
                  boxShadow: "0 8px 24px rgba(106,255,77,0.25)",
                }}
              >
                <Icon className="h-6 w-6 text-[#04121A]" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Specifications({ sol }: { sol: Solution }) {
  return (
    <section id="specifications" className="mx-auto max-w-6xl px-4 py-20 scroll-mt-32">
      <SectionHeader eyebrow="TECHNICAL SPECIFICATIONS" title="Engineered to perform" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong mt-12 overflow-hidden rounded-3xl border border-white/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="divide-y divide-white/10">
            {sol.specs.slice(0, Math.ceil(sol.specs.length / 2)).map((s, i) => (
              <SpecRow key={i} s={s} />
            ))}
          </div>
          <div className="divide-y divide-white/10">
            {sol.specs.slice(Math.ceil(sol.specs.length / 2)).map((s, i) => (
              <SpecRow key={i} s={s} />
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 bg-white/[0.02] px-6 py-4 text-center text-xs text-muted-foreground">
          Warranty: Standard Manufacturer Warranty
        </div>
      </motion.div>
    </section>
  );
}

function SpecRow({ s }: { s: Spec }) {
  const Icon = s.icon ?? Settings;
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-white/[0.04]">
      <div className="flex items-center gap-3 min-w-0">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg glass">
          <Icon className="h-4 w-4 text-[var(--neon)]" />
        </div>
        <span className="text-sm text-muted-foreground truncate">{s.label}</span>
      </div>
      <span className="text-sm font-semibold text-foreground text-right">{s.value}</span>
    </div>
  );
}

function Dimensions({ sol }: { sol: Solution }) {
  return (
    <section id="dimensions" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-32">
      <SectionHeader
        eyebrow="DIMENSIONS"
        title="Engineering at a glance"
        desc="Form factors crafted for premium advertising."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sol.dimensions!.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-strong hover-glow group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--cyan-glow)]/10 blur-3xl group-hover:bg-[var(--neon)]/20 transition-colors" />
            <div className="relative flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--gradient-neon)" }}
              >
                <Ruler className="h-5 w-5 text-[#04121A]" />
              </div>
              <h3 className="font-display text-lg font-semibold">{d.name}</h3>
            </div>
            <ul className="relative mt-5 space-y-2.5">
              {d.rows.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between gap-3 border-b border-white/5 pb-2 text-sm"
                >
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-semibold text-[var(--neon)]">{r.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Applications({ sol }: { sol: Solution }) {
  return (
    <section id="applications" className="mx-auto max-w-7xl px-4 py-20 scroll-mt-32">
      <SectionHeader
        eyebrow="APPLICATIONS"
        title="Where it shines"
        desc="Industries that trust our solutions every day."
      />
      <div className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {sol.applications.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="glass hover-glow flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl glass-strong border border-[var(--neon)]/20">
                <Icon className="h-6 w-6 text-[var(--neon)]" />
              </div>
              <span className="text-sm font-medium">{a.label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Performance({ sol }: { sol: Solution }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionHeader eyebrow="PERFORMANCE" title="Numbers that matter" />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sol.performance.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-strong hover-glow rounded-2xl p-6 text-center"
          >
            <div className="font-display text-2xl md:text-3xl font-bold neon-text">
              <Counter to={p.value} suffix={p.suffix} />
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
              {p.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Brochure component removed

function FaqSection({ sol }: { sol: Solution }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 scroll-mt-32">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mt-12 space-y-3">
        {sol.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.03]"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium md:text-lg">{f.q}</span>
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full glass-strong">
                  {isOpen ? (
                    <Minus className="h-4 w-4 text-[var(--neon)]" />
                  ) : (
                    <Plus className="h-4 w-4 text-[var(--neon)]" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta({ sol }: { sol: Solution }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center md:p-16"
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(106,255,77,0.3), transparent 60%)",
          }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to deploy your <span className="neon-text">{sol.title}</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Speak with our experts to find the perfect configuration for your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/3twNk4hPD8G8KLEA7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full btn-neon px-7 py-3.5 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Request Quote
            </a>
            <a
              href={`tel:${CONTACT.callAnytimeRaw}`}
              className="glass hover-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Contact Sales
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function RelatedProducts({ current }: { current: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const others = SLUG_LIST.filter((s) => s !== current).map((s) => SOLUTIONS[s]);
  const scroll = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-[var(--neon)]">
            RELATED PRODUCTS
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
            Explore <span className="neon-text">more</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="glass-strong grid h-11 w-11 place-items-center rounded-full hover:bg-white/10 transition"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="glass-strong grid h-11 w-11 place-items-center rounded-full hover:bg-white/10 transition"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
      >
        {others.map((s) => (
          <Link
            key={s.slug}
            to="/solutions/$slug"
            params={{ slug: s.slug }}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] glass hover-glow rounded-2xl p-6 group flex flex-col"
          >
            <div
              className="grid h-12 w-12 place-items-center rounded-xl"
              style={{ background: "var(--gradient-neon)" }}
            >
              <Monitor className="h-6 w-6 text-[#04121A]" />
            </div>
            <div className="mt-5 font-display text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.subtitle}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--neon)] group-hover:gap-2.5 transition-all">
              View product <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Footer replaced by shared component in src/components/Footer.tsx

function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      initial={false}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
    >
      <a
        href="https://forms.gle/3twNk4hPD8G8KLEA7"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-strong flex items-center gap-3 rounded-full px-5 py-3 shadow-2xl"
      >
        <span className="text-sm font-medium">Need a quote?</span>
        <span className="inline-flex items-center gap-1.5 rounded-full btn-neon px-4 py-1.5 text-xs font-semibold">
          Request Quote <ArrowRight className="h-3 w-3" />
        </span>
      </a>
    </motion.div>
  );
}
