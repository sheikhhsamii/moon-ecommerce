import Image from "next/image";

import { isValidArray } from "@/lib/global-helpers";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { cn } from "@/lib/utils";

import { aboutLandingThemes } from "./about-theme";

type BrandValue = {
  label: string;
  text: string;
};

const brandValues: readonly BrandValue[] = [
  {
    label: "Curated living",
    text: "We select furniture, decor, and essentials that help rooms feel quieter, warmer, and more intentional.",
  },
  {
    label: "Minimal by nature",
    text: "Our collections favor clean silhouettes, tactile materials, and pieces that age gracefully inside real homes.",
  },
  {
    label: "Comfort with aesthetics",
    text: "Every product is chosen to balance visual calm with everyday usability, so beauty never feels impractical.",
  },
] as const;

const AboutLanding = () => {
  const styles = aboutLandingThemes.default;

  return (
    <main className={styles.page}>
      <section className="custom-container pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
        <div
          className={cn(
            "grid items-center gap-10 overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12",
            styles.heroShell
          )}
        >
          <div className="space-y-6">
            <span
              className={cn(
                "inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
                styles.heroBadge
              )}
            >
              About Moon
            </span>

            <div className="space-y-4">
              <h1
                className={cn(
                  "max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                  styles.heroTitle
                )}
              >
                A softer approach to furniture, decor, and everyday living.
              </h1>
              <p
                className={cn(
                  "max-w-xl text-base leading-7 sm:text-lg",
                  styles.heroCopy
                )}
              >
                Moon Ecommerce was created for homes that value calm over clutter,
                comfort over noise, and thoughtful details that make daily living
                feel a little more grounded.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className={cn(
                "absolute -left-4 top-6 size-28 rounded-full blur-3xl sm:size-36",
                styles.heroGlowPrimary
              )}
            />
            <div
              className={cn(
                "absolute -right-3 bottom-6 size-28 rounded-full blur-3xl sm:size-36",
                styles.heroGlowSecondary
              )}
            />
            <div
              className={cn(
                "relative overflow-hidden rounded-[32px] p-5 sm:p-6",
                styles.heroVisual
              )}
            >
              <Image
                src={IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR}
                alt="Moon interior lifestyle"
                width={720}
                height={720}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container pb-18 sm:pb-24">
        <div
          className={cn(
            "grid items-center gap-10 overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12",
            styles.storyShell
          )}
        >
          <div className="space-y-5 lg:order-1">
            <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.sectionEyebrow)}>
              Our Story
            </p>
            <h2 className={cn("max-w-2xl text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
              Moon began with a simple idea: homes should feel edited, lived in, and deeply comforting.
            </h2>
            <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
              We built Moon Ecommerce around the belief that good interiors are not about excess. They are about
              selecting the right pieces, giving them room to breathe, and creating an atmosphere that supports
              slower, more intentional living.
            </p>
            <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
              From tactile furniture to softly expressive decor, our collections are shaped by minimal design
              principles and a lasting focus on both comfort and aesthetics. Every item is chosen to help spaces
              feel useful, elegant, and easy to return to every day.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {isValidArray(brandValues) &&
                brandValues.map((item) => (
                  <div key={item.label} className={cn("rounded-[28px] p-5", styles.valueCard)}>
                    <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.2em]", styles.valueLabel)}>
                      {item.label}
                    </p>
                    <p className={cn("text-sm leading-6", styles.valueText)}>{item.text}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="lg:order-2">
            <div className={cn("overflow-hidden rounded-[32px] p-5 sm:p-6", styles.storyVisual)}>
              <Image
                src={IMAGE_CONSTANTS.HERO_ILLUSTRATOR}
                alt="Minimal Moon living space"
                width={720}
                height={720}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutLanding;
