export type PageNotFoundThemeName = "default" | "contrast" | "soft";

export type PageNotFoundTheme = {
  section: string;
  shell: string;
  badge: string;
  title: string;
  description: string;
  card: string;
  cardLabel: string;
  cardValue: string;
  primaryButton: string;
  secondaryButton: string;
  orbPrimary: string;
  orbSecondary: string;
};

export const pageNotFoundThemes: Record<
  PageNotFoundThemeName,
  PageNotFoundTheme
> = {
  default: {
    section:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_28%),linear-gradient(180deg,#fffefb_0%,#f8fafc_100%)]",
    shell:
      "border border-emerald-200/70 bg-white/85 shadow-[0_30px_90px_rgba(15,23,42,0.08)]",
    badge: "bg-emerald-100 text-emerald-900",
    title: "text-slate-900",
    description: "text-slate-600",
    card: "border border-emerald-200/70 bg-white/80",
    cardLabel: "text-emerald-700",
    cardValue: "text-slate-800",
    primaryButton:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-500",
    secondaryButton:
      "border border-emerald-200/70 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
    orbPrimary: "bg-emerald-200/50",
    orbSecondary: "bg-amber-200/50",
  },
  contrast: {
    section:
      "bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.12),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]",
    shell:
      "border border-white/10 bg-slate-950/80 shadow-[0_30px_90px_rgba(2,6,23,0.45)]",
    badge: "bg-lime-300/15 text-lime-200",
    title: "text-white",
    description: "text-slate-400",
    card: "border border-white/10 bg-white/5",
    cardLabel: "text-lime-200",
    cardValue: "text-slate-100",
    primaryButton:
      "bg-lime-300 text-slate-950 shadow-lg shadow-lime-300/10 hover:bg-lime-200",
    secondaryButton:
      "border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
    orbPrimary: "bg-lime-300/15",
    orbSecondary: "bg-sky-300/15",
  },
  soft: {
    section:
      "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_24%),linear-gradient(180deg,#fffdf9_0%,#fff7ed_100%)]",
    shell:
      "border border-amber-200/80 bg-white/85 shadow-[0_24px_70px_rgba(146,64,14,0.08)]",
    badge: "bg-amber-100 text-amber-900",
    title: "text-stone-900",
    description: "text-stone-600",
    card: "border border-amber-200/80 bg-white/85",
    cardLabel: "text-amber-800",
    cardValue: "text-stone-800",
    primaryButton:
      "bg-stone-950 text-amber-50 shadow-lg shadow-stone-950/10 hover:bg-stone-800",
    secondaryButton:
      "border border-amber-200/80 bg-white text-stone-700 hover:border-amber-300 hover:bg-amber-50 hover:text-stone-950",
    orbPrimary: "bg-amber-200/50",
    orbSecondary: "bg-rose-200/45",
  },
};
