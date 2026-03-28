export type HomeLandingThemeName = "default";

export type HomeLandingTheme = {
  page: string;
  heroShell: string;
  heroBadge: string;
  heroTitle: string;
  heroCopy: string;
  primaryButton: string;
  secondaryButton: string;
  heroVisual: string;
  heroGlowPrimary: string;
  heroGlowSecondary: string;
  sectionTitle: string;
  sectionCopy: string;
  categoryCard: string;
  categoryTitle: string;
  categoryMeta: string;
  categoryImageShell: string;
  productCard: string;
  productImageShell: string;
  productTitle: string;
  productPrice: string;
  productRating: string;
  productMeta: string;
  productBadge: string;
  productAction: string;
  arrivalsRail: string;
  newsletterShell: string;
  newsletterEyebrow: string;
  newsletterTitle: string;
  newsletterCopy: string;
  newsletterInput: string;
  newsletterButton: string;
  galleryCard: string;
  galleryImageWrap: string;
  galleryTitle: string;
  galleryMeta: string;
  spaceCard: string;
  spaceOverlay: string;
  spaceTitle: string;
  spaceCopy: string;
  spaceCta: string;
  bannerShell: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerCopy: string;
};

export const homeLandingThemes: Record<
  HomeLandingThemeName,
  HomeLandingTheme
> = {
  default: {
    page:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.14),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.14),transparent_20%),linear-gradient(180deg,#fffefb_0%,#f8fafc_100%)]",
    heroShell:
      "border border-emerald-200/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    heroBadge: "bg-emerald-100 text-emerald-900",
    heroTitle: "text-slate-900",
    heroCopy: "text-slate-600",
    primaryButton:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-500",
    secondaryButton:
      "border border-emerald-200/70 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
    heroVisual:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.92))]",
    heroGlowPrimary: "bg-emerald-200/50",
    heroGlowSecondary: "bg-amber-200/50",
    sectionTitle: "text-slate-900",
    sectionCopy: "text-slate-600",
    categoryCard:
      "border border-emerald-200/70 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)]",
    categoryTitle: "text-slate-900",
    categoryMeta: "text-emerald-700",
    categoryImageShell:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,251,235,0.9))]",
    productCard:
      "border border-emerald-200/70 bg-white/88 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_55px_rgba(16,185,129,0.12)]",
    productImageShell:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.16),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,251,235,0.92))]",
    productTitle: "text-slate-900",
    productPrice: "text-slate-900",
    productRating: "text-amber-500",
    productMeta: "text-slate-500",
    productBadge: "bg-emerald-100 text-emerald-900",
    productAction:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-500",
    arrivalsRail: "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    newsletterShell:
      "border border-emerald-200/70 bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,251,235,0.92))] shadow-[0_24px_70px_rgba(15,23,42,0.07)]",
    newsletterEyebrow: "text-emerald-700",
    newsletterTitle: "text-slate-900",
    newsletterCopy: "text-slate-600",
    newsletterInput:
      "border-emerald-200/70 bg-white text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0",
    newsletterButton:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-500",
    galleryCard:
      "border border-emerald-200/70 bg-white/86 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_24px_55px_rgba(16,185,129,0.12)]",
    galleryImageWrap:
      "bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,251,235,0.9))]",
    galleryTitle: "text-slate-900",
    galleryMeta: "text-slate-600",
    spaceCard:
      "border border-emerald-200/70 bg-white/85 shadow-[0_20px_55px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(16,185,129,0.14)]",
    spaceOverlay:
      "bg-[linear-gradient(180deg,rgba(15,23,42,0.03)_0%,rgba(15,23,42,0.12)_100%)]",
    spaceTitle: "text-white",
    spaceCopy: "text-white/80",
    spaceCta:
      "border border-white/25 bg-white/12 text-white hover:border-white/40 hover:bg-white/18",
    bannerShell:
      "border border-emerald-200/70 bg-[radial-gradient(circle_at_top_left,rgba(185,255,102,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,251,235,0.92))] shadow-[0_24px_70px_rgba(15,23,42,0.07)]",
    bannerEyebrow: "text-emerald-700",
    bannerTitle: "text-slate-900",
    bannerCopy: "text-slate-600",
  },
};
