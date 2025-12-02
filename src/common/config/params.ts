import type { IconType } from "react-icons";
import {
  FaCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { LuMoveRight } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";

export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  href: string;
  orderLabel: string;
};

export type ServiceItem = {
  id: number;
  image: string;
  title: string;
  href: string;
  buttonLabel: string;
  icon: IconType;
};

export type CounterItem = {
  id: number;
  shape?: string;
  value: number;
  suffix: string;
  description: string;
};

export type WorkItem = {
  id: number;
  step: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  iconComponent: IconType;
};

export type PricingPlan = {
  id: number;
  title: string;
  audience: string;
  price: number;
  icon: string;
  features: string[];
};

export type LatestWorkItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  href: string;
  icon: IconType;
};

export type TeamMember = {
  id: number;
  image: string;
  name: string;
  role: string;
  socials: SocialLink[];
};

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  quoteIcon: IconType;
  ratingIcon: IconType;
};

export type BlogPost = {
  id: number;
  image: string;
  date: string;
  category: string;
  href: string;
  title: string;
  icon: IconType;
  actionIcon: IconType;
};

export const siteCopy = {
  siteName: "Consalt",
  description:
    "Business consultation provides expert advice to improve performance.",
  tagline: "Freely Consultations Available 24/7",
  phone: "+123 (45678) 000",
  email: "example@gmail.com",
  address: "Old Westbury 256, New York 11201, United States",
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home 01", href: "/" },
      { label: "Home 02", href: "/home2" },
      { label: "Home 03", href: "/home3" },
      { label: "Home 04", href: "/home4" },
      { label: "Home 05", href: "/home5" },
      { label: "Home 06", href: "/home6" },
      { label: "Home 07", href: "/home7" },
      { label: "Home 08", href: "/home8" },
      { label: "Home 09", href: "/home9" },
      { label: "Home 10", href: "/home10" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [{ label: "About One", href: "/about" }],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "Service", href: "/service" },
      { label: "Service Details", href: "/service_details" },
    ],
  },
  {
    label: "Pages",
    href: "/",
    children: [
      { label: "About", href: "/about" },
      { label: "Service", href: "/service" },
      { label: "Service Details", href: "/service_details" },
      { label: "Team Member", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Portfolio Details", href: "/portfolio_details" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Portfolio Details", href: "/portfolio_details" },
    ],
  },
  {
    label: "Blog",
    href: "/blog_grid",
    children: [
      { label: "Blog Grid", href: "/blog_grid" },
      { label: "Blog Details", href: "/blog_details" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const headerSocials: SocialLink[] = [
  { label: "Facebook", href: "/", icon: FaFacebookF },
  { label: "Twitter", href: "/", icon: FaXTwitter },
  { label: "LinkedIn", href: "/", icon: FaLinkedinIn },
  { label: "Pinterest", href: "/", icon: FaPinterestP },
];

export const heroContent = {
  title: "Crafting the Digital Solutions for your Business",
  highlight: "Business",
  description:
    "Continually plagiarize virtual web services with resource maximizing action items. Globally build front-end innovation for consult.",
  videoUrl: "https://youtu.be/NKJ-6zCSk2E?si=VRPrxnY6DI0NY9II",
  image: "/images/banner-thumb.png",
  shape: "/images/hero_shape.png",
  background: "/images/banner.png",
  primaryCta: { label: "Get Started now", href: "/contact" },
  phoneLabel: "CALL : +123 (45678) 000",
  phoneHref: "tel:+12345678000",
};

export const brandStat = {
  prefix: "Worldwide",
  value: 1500,
  suffix: "+",
  label: "Trusted Clients with Consalt",
};

export const brandLogos = [
  "/images/brand_1.png",
  "/images/brand_2.png",
  "/images/brand_3.png",
  "/images/brand_4.png",
  "/images/brand_5.png",
  "/images/brand_1.png",
];

export const featureList: FeatureItem[] = [
  {
    id: 1,
    icon: "/images/feature_icon01.png",
    title: "Business Planning and Technologist",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/",
    orderLabel: "01",
  },
  {
    id: 2,
    icon: "/images/feature_icon02.png",
    title: "Human Home Ones and Consulting",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/",
    orderLabel: "02",
  },
  {
    id: 3,
    icon: "/images/feature_icon03.png",
    title: "Opportunity Global Business Service",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/",
    orderLabel: "03",
  },
  {
    id: 4,
    icon: "/images/feature_icon04.png",
    title: "Insurance for Family Consulting",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/",
    orderLabel: "04",
  },
];

export const services: ServiceItem[] = [
  {
    id: 1,
    image: "/images/service_thumb01.jpg",
    title: "Globally Enable Accurate System Sustainable",
    href: "/service_details",
    buttonLabel: "Read More",
    icon: LuMoveRight,
  },
  {
    id: 2,
    image: "/images/service_thumb02.jpg",
    title: "Cultivate Exceptional Net Works Markets",
    href: "/service_details",
    buttonLabel: "Read More",
    icon: LuMoveRight,
  },
  {
    id: 3,
    image: "/images/service_thumb03.jpg",
    title: "Communication is with World Infrastructure",
    href: "/service_details",
    buttonLabel: "Read More",
    icon: LuMoveRight,
  },
];

export const sliderWords = ["Business", "Consulting", "Marketing"];

export const aboutContent = {
  heading:
    "Perform Market Research to gain Insights into Industry Trends",
  title:
    "Since 2007, We're working consulting agency group of more than 120+ talented peoples helps companies",
  description:
    "Globally engage cross-media leadership skills before cross-media innovation develop standardized platforms without robust applications. Conveniently go forward collaboration and idea-sharing.",
  bullets: [
    "Professional Team Member",
    "Any Problem Solving",
    "Implement Business",
  ],
  image: "/images/about_thumb.png",
  shape: "/images/about_shape.png",
  textRing: "* Business Consultant * Marketing * Visions",
  primaryCta: { label: "Discover More", href: "/about" },
  secondaryCta: { label: "example@gmail.com", href: "mailto:example@gmail.com" },
};

export const counterStats: CounterItem[] = [
  {
    id: 1,
    shape: "/images/star_icon.png",
    value: 12,
    suffix: "K+",
    description: "Total Projects Completed",
  },
  {
    id: 2,
    shape: "/images/star_icon.png",
    value: 950,
    suffix: "+",
    description: "Satisfied Active Customers",
  },
  {
    id: 3,
    value: 4,
    suffix: ".7*",
    description: "Average Clients Ratings",
  },
];

export const workSteps: WorkItem[] = [
  {
    id: 1,
    step: "01",
    icon: "/images/steps_1.png",
    title: "Strategic Work Planning",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/service_details",
    iconComponent: LuMoveRight,
  },
  {
    id: 2,
    step: "02",
    icon: "/images/steps_2.png",
    title: "Monitoring and Evaluation",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/service_details",
    iconComponent: LuMoveRight,
  },
  {
    id: 3,
    step: "03",
    icon: "/images/steps_3.png",
    title: "Completed Works",
    description:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    href: "/service_details",
    iconComponent: LuMoveRight,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Starter Plan",
    audience: "Individual",
    price: 119,
    icon: "/images/price_icon_01.png",
    features: [
      "Unlimited Websites",
      "10+ Paid Plugin",
      "Woocommerce Support",
      "50+ WP theme",
    ],
  },
  {
    id: 2,
    title: "Premium Plan",
    audience: "Individual",
    price: 149,
    icon: "/images/price_icon_02.png",
    features: [
      "Unlimited Websites",
      "10+ Paid Plugin",
      "Woocommerce Support",
      "50+ WP theme",
    ],
  },
];

export const latestWorks: LatestWorkItem[] = [
  {
    id: 1,
    image: "/images/work-1.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
  {
    id: 2,
    image: "/images/work-2.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
  {
    id: 3,
    image: "/images/work-3.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
  {
    id: 4,
    image: "/images/work-4.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
  {
    id: 5,
    image: "/images/work-2.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
  {
    id: 6,
    image: "/images/work-1.jpg",
    title: "Business Implement",
    category: "Technology",
    href: "/portfolio_details",
    icon: HiMiniArrowUpRight,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: "/images/team3.jpg",
    name: "Connie Diaz",
    role: "Lead Developer",
    socials: headerSocials,
  },
  {
    id: 2,
    image: "/images/team1.jpg",
    name: "Jone D. Alexon",
    role: "CEO & Founder",
    socials: headerSocials,
  },
  {
    id: 3,
    image: "/images/team2.jpg",
    name: "James E. Huey",
    role: "IT Expert",
    socials: headerSocials,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Conveniently transform error-free architectures whereas maximizing collaboration and idea-sharing. Intrinsically team driven web-readiness vis-a-vis equity invested applications.",
    name: "Jhon D. Alexon",
    role: "Web Developer",
    avatar: "/images/testi_author.png",
    quoteIcon: RiDoubleQuotesR,
    ratingIcon: MdOutlineStarPurple500,
  },
  {
    id: 2,
    quote:
      "Conveniently transform error-free architectures whereas maximizing collaboration and idea-sharing. Intrinsically team driven web-readiness vis-a-vis equity invested applications.",
    name: "Jhon D. Alexon",
    role: "Web Developer",
    avatar: "/images/testi_author.png",
    quoteIcon: RiDoubleQuotesR,
    ratingIcon: MdOutlineStarPurple500,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog_01.png",
    date: "04 Mar, 2024",
    category: "Technology",
    href: "/blog_details",
    title: "Globally disintermediate extend services planning",
    icon: FaCircle,
    actionIcon: BsArrowRight,
  },
  {
    id: 2,
    image: "/images/blog_02.png",
    date: "14 Mar, 2024",
    category: "Business",
    href: "/blog_details",
    title: "Sustainability consulting for business planning",
    icon: FaCircle,
    actionIcon: BsArrowRight,
  },
  {
    id: 3,
    image: "/images/blog_03.png",
    date: "24 Mar, 2024",
    category: "Consulting",
    href: "/blog_details",
    title: "Consulting industry changing business landscape",
    icon: FaCircle,
    actionIcon: BsArrowRight,
  },
  {
    id: 4,
    image: "/images/blog_02.png",
    date: "24 Mar, 2024",
    category: "Consulting",
    href: "/blog_details",
    title: "Consulting industry changing business landscape",
    icon: FaCircle,
    actionIcon: BsArrowRight,
  },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/" },
      { label: "Our Team", href: "/" },
      { label: "Pricing Plan", href: "/" },
      { label: "Latest Blog", href: "/" },
      { label: "Our Careers", href: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "/" },
      { label: "App Development", href: "/" },
      { label: "Cyber Security", href: "/" },
      { label: "Digital Marketing", href: "/" },
      { label: "Brand Identity", href: "/" },
      { label: "SEO Marketing", href: "/" },
    ],
  },
];

export const footerSocials = ["Facebook", "Pinterest", "LinkedIn"];
