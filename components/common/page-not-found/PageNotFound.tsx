import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isValidArray } from "@/lib/global-helpers";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import {
  pageNotFoundThemes,
  type PageNotFoundThemeName,
} from "./page-not-found-theme";

type PageNotFoundProps = {
  theme?: PageNotFoundThemeName;
};

type SupportCard = {
  label: string;
  value: string;
};

const supportCards: readonly SupportCard[] = [
  {
    label: "Popular destination",
    value: "Browse fresh collections and new arrivals",
  },
  {
    label: "Need help?",
    value: "Reach our support team for order and delivery questions",
  },
  {
    label: "Fast recovery",
    value: "Use the links below to get back into the catalog",
  },
];

const PageNotFound = ({ theme = "default" }: PageNotFoundProps) => {
  const styles = pageNotFoundThemes[theme];

  return (
    <main className={cn("relative overflow-hidden", styles.section)}>
      <div className="custom-container py-14 sm:py-20">
        <div
          className={cn(
            "relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12",
            styles.shell
          )}
        >
          <div
            className={cn(
              "absolute -left-16 top-10 size-44 rounded-full blur-3xl",
              styles.orbPrimary
            )}
          />
          <div
            className={cn(
              "absolute -right-10 bottom-8 size-40 rounded-full blur-3xl",
              styles.orbSecondary
            )}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span
                className={cn(
                  "inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
                  styles.badge
                )}
              >
                Error 404
              </span>

              <div className="space-y-4">
                <Image
                  className="h-auto w-36"
                  src={IMAGE_CONSTANTS.APP_LOGO}
                  alt="Moon Commerce"
                  width={220}
                  height={40}
                />
                <h1
                  className={cn(
                    "max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                    styles.title
                  )}
                >
                  The page you are looking for has moved out of this showroom.
                </h1>
                <p
                  className={cn(
                    "max-w-2xl text-base leading-7 sm:text-lg",
                    styles.description
                  )}
                >
                  The link may be outdated, the product might be unavailable,
                  or the address may be incorrect. Let&apos;s get you back to
                  the right collection.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className={cn("h-12 rounded-full px-6", styles.primaryButton)}>
                  <Link href={APP_ROUTES.HOME}>Back to Home</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("h-12 rounded-full px-6", styles.secondaryButton)}
                >
                  <Link href={APP_ROUTES.COLLECTIONS}>Explore Collections</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {isValidArray(supportCards) &&
                supportCards.map((item) => (
                  <div
                    key={item.label}
                    className={cn("rounded-[28px] p-5 sm:p-6", styles.card)}
                  >
                    <p
                      className={cn(
                        "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
                        styles.cardLabel
                      )}
                    >
                      {item.label}
                    </p>
                    <p className={cn("text-base font-medium leading-7", styles.cardValue)}>
                      {item.value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
