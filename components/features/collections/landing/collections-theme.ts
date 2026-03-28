export type CollectionsLandingThemeName = "default";

export type CollectionsLandingTheme = {
  page: string;
  heroShell: string;
  heroBadge: string;
  heroTitle: string;
  heroCopy: string;
  
  tabList: string;
  tabItem: string;
  tabActive: string;
  tabInactive: string;

  gridShell: string;
};

export const collectionsLandingThemes: Record<
  CollectionsLandingThemeName,
  CollectionsLandingTheme
> = {
  default: {
    page:
      "bg-[radial-gradient(circle_at_top_right,rgba(185,255,102,0.14),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.12),transparent_20%),linear-gradient(180deg,#fffefb_0%,#f8fafc_100%)]",
    heroShell:
      "border border-emerald-200/70 bg-white/82 shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    heroBadge: "bg-emerald-100 text-emerald-900",
    heroTitle: "text-slate-900",
    heroCopy: "text-slate-600",
    
    tabList: "flex flex-wrap items-center justify-center gap-2 mb-10 pb-2 overflow-x-auto",
    tabItem: "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
    tabActive: "bg-emerald-900 text-white shadow-md",
    tabInactive: "bg-white/60 text-emerald-900 hover:bg-emerald-100 hover:text-emerald-950 border border-emerald-200/50",

    gridShell:
      "pt-6 pb-12",
  },
};
