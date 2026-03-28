export type AboutLandingThemeName = "default";

export type AboutLandingTheme = {
  page: string;
  heroShell: string;
  heroBadge: string;
  heroTitle: string;
  heroCopy: string;
  heroVisual: string;
  heroGlowPrimary: string;
  heroGlowSecondary: string;
  storyShell: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionCopy: string;
  valueCard: string;
  valueLabel: string;
  valueText: string;
  storyVisual: string;
};

export const aboutLandingThemes: Record<
  AboutLandingThemeName,
  AboutLandingTheme
> = {
  default: {
    page:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.14),transparent_22%),radial-gradient(circle_at_78%_18%,rgba(251,191,36,0.12),transparent_20%),linear-gradient(180deg,#fffefb_0%,#f8fafc_100%)]",
    heroShell:
      "border border-emerald-200/70 bg-white/82 shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    heroBadge: "bg-emerald-100 text-emerald-900",
    heroTitle: "text-slate-900",
    heroCopy: "text-slate-600",
    heroVisual:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.92))]",
    heroGlowPrimary: "bg-emerald-200/50",
    heroGlowSecondary: "bg-amber-200/50",
    storyShell:
      "border border-emerald-200/70 bg-white/86 shadow-[0_20px_60px_rgba(15,23,42,0.07)]",
    sectionEyebrow: "text-emerald-700",
    sectionTitle: "text-slate-900",
    sectionCopy: "text-slate-600",
    valueCard:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.9))]",
    valueLabel: "text-emerald-700",
    valueText: "text-slate-700",
    storyVisual:
      "border border-emerald-200/70 bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,251,235,0.92))]",
  },
};
