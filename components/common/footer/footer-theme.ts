export type FooterThemeName = "default" | "contrast" | "soft";

export type FooterTheme = {
  wrapper: string;
  shell: string;
  heroPanel: string;
  newsletterPanel: string;
  brandPill: string;
  brandPillAlt: string;
  text: string;
  mutedText: string;
  sectionEyebrow: string;
  sectionHeading: string;
  contactCard: string;
  newsletterInput: string;
  newsletterButton: string;
  link: string;
  bottomLink: string;
  divider: string;
  iconWrap: string;
  icon: string;
  socialLink: string;
};

export const footerThemes: Record<FooterThemeName, FooterTheme> = {
  default: {
    wrapper: "",
    shell: "border-emerald-200/70 bg-[#fffefb] shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    heroPanel:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_28%),linear-gradient(135deg,rgba(248,250,252,0.95),rgba(255,251,235,0.92))]",
    newsletterPanel: "border-emerald-200/70 bg-white/75",
    brandPill: "bg-emerald-100 text-emerald-900",
    brandPillAlt: "bg-amber-100 text-amber-900",
    text: "text-slate-900",
    mutedText: "text-slate-600",
    sectionEyebrow: "text-emerald-700",
    sectionHeading: "text-slate-700",
    contactCard: "border-emerald-100 bg-white/85",
    newsletterInput:
      "border-emerald-200/70 bg-white text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0",
    newsletterButton: "bg-emerald-600 text-white hover:bg-emerald-500",
    link: "block text-sm text-slate-600 transition-colors hover:text-emerald-700",
    bottomLink: "text-sm text-slate-600 transition-colors hover:text-emerald-700",
    divider: "bg-emerald-100",
    iconWrap: "bg-emerald-100 text-emerald-800",
    icon: "text-current",
    socialLink:
      "border-emerald-200/70 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  },
  contrast: {
    wrapper: "",
    shell: "border-white/10 bg-slate-950 shadow-[0_30px_90px_rgba(2,6,23,0.45)]",
    heroPanel: "bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.1),transparent_35%),linear-gradient(135deg,#020617,#0f172a)]",
    newsletterPanel: "border-white/10 bg-white/5",
    brandPill: "bg-lime-300/15 text-lime-200",
    brandPillAlt: "bg-sky-400/15 text-sky-200",
    text: "text-white",
    mutedText: "text-slate-400",
    sectionEyebrow: "text-slate-400",
    sectionHeading: "text-slate-200",
    contactCard: "border-white/10 bg-white/5",
    newsletterInput:
      "border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0",
    newsletterButton: "bg-lime-300 text-slate-950 hover:bg-lime-200",
    link: "block text-sm text-slate-400 transition-colors hover:text-white",
    bottomLink: "text-sm text-slate-400 transition-colors hover:text-white",
    divider: "bg-white/10",
    iconWrap: "bg-white/8 text-white",
    icon: "text-current",
    socialLink:
      "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
  },
  soft: {
    wrapper: "",
    shell: "border-amber-200/80 bg-[#fffdf9] shadow-[0_24px_70px_rgba(146,64,14,0.08)]",
    heroPanel: "bg-[linear-gradient(135deg,rgba(255,251,235,0.92),rgba(255,255,255,1))]",
    newsletterPanel: "border-amber-200/80 bg-amber-50/70",
    brandPill: "bg-amber-100 text-amber-900",
    brandPillAlt: "bg-rose-100 text-rose-900",
    text: "text-stone-900",
    mutedText: "text-stone-600",
    sectionEyebrow: "text-stone-500",
    sectionHeading: "text-stone-700",
    contactCard: "border-amber-200/80 bg-white/90",
    newsletterInput:
      "border-amber-200/80 bg-white text-stone-900 placeholder:text-stone-400 focus-visible:ring-0 focus-visible:ring-offset-0",
    newsletterButton: "bg-stone-950 text-amber-50 hover:bg-stone-800",
    link: "block text-sm text-stone-600 transition-colors hover:text-stone-950",
    bottomLink: "text-sm text-stone-600 transition-colors hover:text-stone-950",
    divider: "bg-amber-200/80",
    iconWrap: "bg-amber-100 text-stone-900",
    icon: "text-current",
    socialLink:
      "border-amber-200/80 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
  },
};
