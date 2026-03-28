"use client";

import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidArray } from "@/lib/global-helpers";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { footerThemes, type FooterThemeName } from "./footer-theme";

type FooterProps = {
  theme?: FooterThemeName;
};

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterSocialItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type FooterContactItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const quickLinks: readonly FooterLinkItem[] = [
  { label: "Home", href: APP_ROUTES.HOME },
  { label: "Collections", href: APP_ROUTES.COLLECTIONS },
  { label: "About Us", href: APP_ROUTES.ABOUT },
  { label: "Contact", href: APP_ROUTES.CONTACT },
];

const customerServiceLinks: readonly FooterLinkItem[] = [
  { label: "Track Order", href: APP_ROUTES.HOME },
  { label: "Wishlist", href: APP_ROUTES.HOME },
  { label: "Gift Cards", href: APP_ROUTES.HOME },
  { label: "FAQ", href: APP_ROUTES.ABOUT },
];

const policyLinks: readonly FooterLinkItem[] = [
  { label: "Shipping Policy", href: APP_ROUTES.HOME },
  { label: "Returns & Exchanges", href: APP_ROUTES.HOME },
  { label: "Privacy Policy", href: APP_ROUTES.HOME },
  { label: "Terms & Conditions", href: APP_ROUTES.HOME },
];

const socialLinks: readonly FooterSocialItem[] = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const contactDetails: readonly FooterContactItem[] = [
  { label: "Email", value: "hello@mooncommerce.com", icon: Mail },
  { label: "Phone", value: "+1 (800) 555-0149", icon: Phone },
  { label: "Studio", value: "12 Mercer Street, New York, NY", icon: MapPin },
];

const Footer = ({ theme = "default" }: FooterProps) => {
  const styles = footerThemes[theme];
  const year = new Date().getFullYear();

  return (
    <footer className={cn("footer-container mt-20", styles.wrapper)}>
      <div className={cn("overflow-hidden rounded-[36px] border", styles.shell)}>
        <div className={cn("grid gap-10 px-6 py-8 lg:grid-cols-[1.15fr_2fr]", styles.heroPanel)}>
          <div className="flex flex-col gap-6">
            <Link href={APP_ROUTES.HOME} className="inline-flex items-center gap-4">
              <div className="space-y-2">
                <Image
                  className="h-auto w-36"
                  src={IMAGE_CONSTANTS.APP_LOGO}
                  alt="Moon Commerce"
                  width={220}
                  height={40}
                />
                <div className="flex flex-wrap gap-2">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-medium",
                      styles.brandPill
                    )}
                  >
                    Curated Living
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-medium",
                      styles.brandPillAlt
                    )}
                  >
                    Modern Decor
                  </span>
                </div>
              </div>
            </Link>

            <div className="space-y-3">
              <p className={cn("text-xl font-semibold sm:text-2xl", styles.text)}>
                Design-forward essentials for living rooms, workspaces, and restful corners.
              </p>
              <p className={cn("max-w-xl text-sm leading-6 sm:text-base", styles.mutedText)}>
                Build a home that feels collected, calm, and unmistakably yours with curated
                furniture, lighting, decor, and seasonal drops.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {isValidArray(contactDetails) &&
                contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className={cn("rounded-2xl border p-4", styles.contactCard)}>
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className={cn(
                            "flex size-9 items-center justify-center rounded-full",
                            styles.iconWrap
                          )}
                        >
                          <Icon className={cn("size-4", styles.icon)} />
                        </span>
                        <span className={cn("text-xs font-semibold uppercase tracking-[0.18em]", styles.mutedText)}>
                          {item.label}
                        </span>
                      </div>
                      <p className={cn("text-sm font-medium leading-6", styles.text)}>{item.value}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className={cn("rounded-[28px] border p-5 sm:p-6", styles.newsletterPanel)}>
            <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
              <div className="space-y-3">
                <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", styles.sectionEyebrow)}>
                  Join the newsletter
                </p>
                <h2 className={cn("text-2xl font-semibold sm:text-3xl", styles.text)}>
                  Weekly arrivals, styling notes, and exclusive launch access.
                </h2>
                <p className={cn("max-w-2xl text-sm leading-6 sm:text-base", styles.mutedText)}>
                  Subscribe for thoughtful product edits, home inspiration, and early access to
                  limited collections.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row xl:min-w-[420px]">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className={cn("h-12 rounded-full px-5", styles.newsletterInput)}
                />
                <Button className={cn("h-12 rounded-full px-6", styles.newsletterButton)}>
                  <Send className="size-4" />
                  Subscribe
                </Button>
              </div>
            </div>

            <div className={cn("my-8 h-px w-full", styles.divider)} />

            <div className="grid gap-8 md:grid-cols-3">
              <FooterLinkGroup
                title="Quick Links"
                links={quickLinks}
                styles={styles}
              />
              <FooterLinkGroup
                title="Customer Service"
                links={customerServiceLinks}
                styles={styles}
              />
              <FooterLinkGroup
                title="Policies"
                links={policyLinks}
                styles={styles}
              />
            </div>
          </div>
        </div>

        <div className={cn("h-px w-full", styles.divider)} />

        <div className="flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className={cn("text-sm", styles.mutedText)}>
              {`Copyright ${year} Moon Commerce. All rights reserved.`}
            </p>
            <div className="flex items-center gap-4">
              {isValidArray(policyLinks) &&
                policyLinks.slice(2, 4).map((item) => (
                  <Link key={item.label} href={item.href} className={styles.bottomLink}>
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isValidArray(socialLinks) &&
              socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full border transition-colors",
                      styles.socialLink
                    )}
                  >
                    <Icon className={cn("size-4", styles.icon)} />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkGroupProps = {
  title: string;
  links: readonly FooterLinkItem[];
  styles: (typeof footerThemes)[FooterThemeName];
};

const FooterLinkGroup = ({ title, links, styles }: FooterLinkGroupProps) => {
  return (
    <div className="space-y-4">
      <h3 className={cn("text-sm font-semibold uppercase tracking-[0.18em]", styles.sectionHeading)}>
        {title}
      </h3>
      <div className="space-y-3">
        {isValidArray(links) &&
          links.map((item) => (
            <Link key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Footer;
