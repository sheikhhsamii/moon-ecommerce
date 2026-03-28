export type ContactLandingThemeName = "default";

export type ContactLandingTheme = {
  page: string;
  heroShell: string;
  heroBadge: string;
  heroTitle: string;
  heroCopy: string;
  
  contactShell: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionCopy: string;
  
  formCard: string;
  inputWrapper: string;
  inputLabel: string;
  inputField: string;
  submitButton: string;

  infoCard: string;
  infoIcon: string;
  infoTitle: string;
  infoText: string;
};

export const contactLandingThemes: Record<
  ContactLandingThemeName,
  ContactLandingTheme
> = {
  default: {
    page:
      "bg-[radial-gradient(circle_at_top_right,rgba(185,255,102,0.14),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.12),transparent_20%),linear-gradient(180deg,#fffefb_0%,#f8fafc_100%)]",
    heroShell:
      "border border-emerald-200/70 bg-white/82 shadow-[0_24px_80px_rgba(15,23,42,0.08)]",
    heroBadge: "bg-emerald-100 text-emerald-900",
    heroTitle: "text-slate-900",
    heroCopy: "text-slate-600",
    
    contactShell:
      "border border-emerald-200/70 bg-white/86 shadow-[0_20px_60px_rgba(15,23,42,0.07)]",
    sectionEyebrow: "text-emerald-700",
    sectionTitle: "text-slate-900",
    sectionCopy: "text-slate-600",
    
    formCard:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.9))]",
    inputWrapper: "flex flex-col gap-1.5",
    inputLabel: "text-sm font-medium text-slate-700",
    inputField:
      "flex h-11 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400",
    submitButton:
      "mt-2 inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",

    infoCard:
      "border border-emerald-200/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(255,251,235,0.9))] p-6 sm:p-8 rounded-[28px]",
    infoIcon: "text-emerald-700 mb-4",
    infoTitle: "text-base font-semibold text-slate-900",
    infoText: "text-sm text-slate-600 leading-relaxed",
  },
};
