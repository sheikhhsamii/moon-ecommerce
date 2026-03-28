export type NavbarThemeName = "default" | "contrast" | "soft";

export type NavbarTheme = {
  wrapper: string;
  shell: string;
  logoBadge: string;
  text: string;
  mutedText: string;
  navLink: string;
  navLinkActive: string;
  searchWrapper: string;
  searchInput: string;
  searchIcon: string;
  searchButton: string;
  utilityButton: string;
  utilityBadge: string;
  primaryButton: string;
  mobileTrigger: string;
  mobileDrawer: string;
  mobileCard: string;
  mobileNavLink: string;
  mobileUtilityItem: string;
};

export const navbarThemes: Record<NavbarThemeName, NavbarTheme> = {
  default: {
    wrapper:
      "border-b border-emerald-200/70 bg-[#fffefb]/95 text-slate-900 shadow-[0_1px_0_rgba(16,185,129,0.08)] backdrop-blur-xl",
    shell:
      "rounded-[28px] border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.9))] px-4 py-3 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:px-5",
    logoBadge: "bg-emerald-500 text-white",
    text: "text-slate-900",
    mutedText: "text-slate-500",
    navLink:
      "text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-700",
    navLinkActive: "text-emerald-700",
    searchWrapper:
      "border border-emerald-200/70 bg-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
    searchInput:
      "border-0 bg-transparent text-sm text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0",
    searchIcon: "text-emerald-600",
    searchButton:
      "border border-emerald-200/70 bg-emerald-50 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-900",
    utilityButton:
      "border border-emerald-200/70 bg-white text-slate-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
    utilityBadge: "bg-amber-400 text-slate-950",
    primaryButton:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-500",
    mobileTrigger:
      "border border-emerald-200/70 bg-white text-slate-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
    mobileDrawer: "border-l border-emerald-200/70 bg-[#fffefb] text-slate-950",
    mobileCard:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.92))]",
    mobileNavLink:
      "rounded-2xl border border-emerald-200/70 bg-white px-4 py-3 text-base font-medium text-slate-800 transition-colors hover:border-emerald-300 hover:text-emerald-700",
    mobileUtilityItem:
      "border border-emerald-200/70 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  },
  contrast: {
    wrapper:
      "border-b border-white/10 bg-slate-950/95 text-white shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl",
    shell:
      "rounded-[28px] border border-white/10 bg-slate-900 px-4 py-3 shadow-[0_24px_70px_rgba(2,6,23,0.45)] sm:px-5",
    logoBadge: "bg-lime-300 text-slate-950",
    text: "text-white",
    mutedText: "text-slate-400",
    navLink:
      "text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white",
    navLinkActive: "text-white",
    searchWrapper:
      "border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    searchInput:
      "border-0 bg-transparent text-sm text-white shadow-none placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0",
    searchIcon: "text-slate-500",
    searchButton:
      "border border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white",
    utilityButton:
      "border border-white/10 bg-white/5 text-slate-200 shadow-sm hover:border-white/20 hover:bg-white/10 hover:text-white",
    utilityBadge: "bg-lime-300 text-slate-950",
    primaryButton:
      "bg-lime-300 text-slate-950 shadow-lg shadow-lime-300/10 hover:bg-lime-200",
    mobileTrigger:
      "border border-white/10 bg-white/5 text-slate-200 shadow-sm hover:border-white/20 hover:bg-white/10 hover:text-white",
    mobileDrawer: "border-l border-white/10 bg-slate-950 text-white",
    mobileCard: "border border-white/10 bg-white/5",
    mobileNavLink:
      "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-slate-100 transition-colors hover:border-white/20 hover:text-white",
    mobileUtilityItem:
      "border border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white",
  },
  soft: {
    wrapper:
      "border-b border-amber-200/70 bg-[#fffaf2]/95 text-stone-900 shadow-[0_1px_0_rgba(120,53,15,0.06)] backdrop-blur-xl",
    shell:
      "rounded-[28px] border border-amber-200/80 bg-[#fffdf8] px-4 py-3 shadow-[0_24px_64px_rgba(146,64,14,0.08)] sm:px-5",
    logoBadge: "bg-amber-500 text-stone-950",
    text: "text-stone-900",
    mutedText: "text-stone-500",
    navLink:
      "text-sm font-medium text-stone-600 transition-colors duration-200 hover:text-stone-950",
    navLinkActive: "text-stone-950",
    searchWrapper:
      "border border-amber-200/80 bg-amber-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]",
    searchInput:
      "border-0 bg-transparent text-sm text-stone-900 shadow-none placeholder:text-stone-400 focus-visible:ring-0 focus-visible:ring-offset-0",
    searchIcon: "text-stone-400",
    searchButton:
      "border border-amber-200/80 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
    utilityButton:
      "border border-amber-200/80 bg-white text-stone-700 shadow-sm hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
    utilityBadge: "bg-amber-500 text-stone-950",
    primaryButton:
      "bg-stone-950 text-amber-50 shadow-lg shadow-stone-950/10 hover:bg-stone-800",
    mobileTrigger:
      "border border-amber-200/80 bg-white text-stone-700 shadow-sm hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
    mobileDrawer: "border-l border-amber-200/80 bg-[#fffdf8] text-stone-900",
    mobileCard: "border border-amber-200/80 bg-amber-50/70",
    mobileNavLink:
      "rounded-2xl border border-amber-200/80 bg-white px-4 py-3 text-base font-medium text-stone-800 transition-colors hover:border-amber-300 hover:text-stone-950",
    mobileUtilityItem:
      "border border-amber-200/80 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
  },
};
