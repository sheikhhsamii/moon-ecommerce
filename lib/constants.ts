import { IMAGE_CONSTANTS } from "./img-constants";
import { APP_ROUTES } from "./routes";

// NAVIGATION MENUS
export const NAVIGATION_MENU = [
  {
    name: "Home",
    href: APP_ROUTES.HOME,
  },
  {
    name: "Collections",
    href: APP_ROUTES.COLLECTIONS,
  },
  {
    name: "About",
    href: APP_ROUTES.ABOUT,
  },
 {
    name: "Contact",
    href: APP_ROUTES.CONTACT,
  },
];

// BRANDS
export const BRANDS = [
  {
    name: "Company One",
    image: IMAGE_CONSTANTS.COMPANY_ONE,
  },
  {
    name: "Company Two",
    image: IMAGE_CONSTANTS.COMPANY_TWO,
  },
  {
    name: "Company Three",
    image: IMAGE_CONSTANTS.COMPANY_THREE,
  },
  {
    name: "Company Four",
    image: IMAGE_CONSTANTS.COMPANY_FOUR,
  },
  {
    name: "Company Five",
    image: IMAGE_CONSTANTS.COMPANY_FIVE,
  },
  {
    name: "Company Six",
    image: IMAGE_CONSTANTS.COMPANY_SIX,
  },
];

// SERVICES
export const SERVICES = [
  {
    title: "Search engine",
    subtitle: "optimization",
    image: IMAGE_CONSTANTS.SERVICES_ONE,
    href: APP_ROUTES.HOME,
    bgColor: "bg-gray",
    learnMoreTextWhite: false,
  },
  {
    title: "Pay-per-click",
    subtitle: "advertising",
    image: IMAGE_CONSTANTS.SERVICES_TWO,
    href: APP_ROUTES.HOME,
    bgColor: "bg-green",
    learnMoreTextWhite: false,
  },
  {
    title: "Social Media",
    subtitle: "Marketing",
    image: IMAGE_CONSTANTS.SERVICES_THREE,
    href: APP_ROUTES.HOME,
    bgColor: "bg-dark",
    learnMoreTextWhite: true,
  },
  {
    title: "Email",
    subtitle: "Marketing",
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
    href: APP_ROUTES.HOME,
    bgColor: "bg-gray",
    learnMoreTextWhite: false,
  },
  {
    title: "Content",
    subtitle: "Creation",
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
    href: APP_ROUTES.HOME,
    bgColor: "bg-green",
    learnMoreTextWhite: false,
  },
  {
    title: "Analytics and",
    subtitle: "Tracking",
    image: IMAGE_CONSTANTS.SERVICES_SIX,
    href: APP_ROUTES.HOME,
    bgColor: "bg-dark",
    learnMoreTextWhite: true,
  },
];

//CASE STUDIES
export const CASE_STUDIES = [
  {
    title: "Case Study One",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    href: APP_ROUTES.HOME,
  },
  {
    title: "Case Study Two",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    href: APP_ROUTES.HOME,
  },
  {
    title: "Case Study Three",
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    href: APP_ROUTES.HOME,
  },
];

//TEAMS
export const TEAMS = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    image: IMAGE_CONSTANTS.TEAM_ONE,
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    image: IMAGE_CONSTANTS.TEAM_TWO,
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    image: IMAGE_CONSTANTS.TEAM_THREE,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    image: IMAGE_CONSTANTS.TEAM_FOUR,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    role: "Senior SEO Specialist",
    image: IMAGE_CONSTANTS.TEAM_FIVE,
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    image: IMAGE_CONSTANTS.TEAM_SIX,
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const EVENTS = {
  SCROLL: "scroll",
};

export const FOOTER_LINKS = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Case Studies",
    href: "#case-studies",
  },
  {
    name: "Process",
    href: "#process",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Contact",
    href: APP_ROUTES.CONTACT,
  },
];

export const FOOTER_SOCIALS = [
  {
    name: "Facebook",
    icon: IMAGE_CONSTANTS.SOCIAL_TWO,
    href: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    icon: IMAGE_CONSTANTS.SOCIAL_ONE,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: IMAGE_CONSTANTS.SOCIAL_THREE,
    href: "https://twitter.com",
  },
];