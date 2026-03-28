import Image from "next/image";
import Link from "next/link";

import ProductCard, { type ProductCardItem } from "@/components/features/home/landing/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidArray } from "@/lib/global-helpers";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { homeLandingThemes } from "./home-theme";

type CategoryItem = {
  title: string;
  subtitle: string;
  href: string;
  image: (typeof IMAGE_CONSTANTS)[keyof typeof IMAGE_CONSTANTS];
};

type SpaceItem = {
  title: string;
  subtitle: string;
  href: string;
  image: (typeof IMAGE_CONSTANTS)[keyof typeof IMAGE_CONSTANTS];
};

type GalleryItem = {
  title: string;
  subtitle: string;
  href: string;
  image: (typeof IMAGE_CONSTANTS)[keyof typeof IMAGE_CONSTANTS];
};

const categories: readonly CategoryItem[] = [
  {
    title: "Living Room",
    subtitle: "Layered seating, sculpted tables, and calm textures",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_ONE,
  },
  {
    title: "Bedroom",
    subtitle: "Soft forms and restorative essentials for restful spaces",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_TWO,
  },
  {
    title: "Workspace",
    subtitle: "Quiet utility with pieces designed for focus",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_THREE,
  },
  {
    title: "Decor",
    subtitle: "Objects and accents that make a room feel considered",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
  },
  {
    title: "Lighting",
    subtitle: "Warm glows and statement silhouettes for every corner",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
  },
] as const;

const bestSellers: readonly ProductCardItem[] = [
  {
    title: "Aster Lounge Chair",
    price: "$289",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_ONE,
  },
  {
    title: "Halo Floor Lamp",
    price: "$148",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
  },
  {
    title: "Luma Side Table",
    price: "$176",
    rating: 4.7,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_TWO,
  },
  {
    title: "Serein Desk",
    price: "$324",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_THREE,
  },
  {
    title: "Kora Mirror Decor",
    price: "$96",
    rating: 4.6,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
  },
  {
    title: "Mori Accent Shelf",
    price: "$214",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_SIX,
  },
] as const;

const newArrivals: readonly ProductCardItem[] = [
  {
    title: "Solace Bedside Lamp",
    price: "$132",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
    badge: "New",
  },
  {
    title: "Noma Reading Chair",
    price: "$268",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_ONE,
    badge: "New",
  },
  {
    title: "Quiet Oak Console",
    price: "$356",
    rating: 4.7,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR,
    badge: "New",
  },
  {
    title: "Muse Ceramic Vase",
    price: "$84",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
    badge: "New",
  },
] as const;

const spaces: readonly SpaceItem[] = [
  {
    title: "Cozy Bedroom",
    subtitle: "Soft layers, warm light, and quieter night routines",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_TWO,
  },
  {
    title: "Modern Living Room",
    subtitle: "Balanced silhouettes for hosting, lounging, and everyday calm",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR,
  },
  {
    title: "Minimal Workspace",
    subtitle: "Focused corners shaped by utility, texture, and light",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_THREE,
  },
] as const;

const galleryItems: readonly GalleryItem[] = [
  {
    title: "Sunlit Reading Corner",
    subtitle: "Soft seating and warm ambient light",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR,
  },
  {
    title: "Layered Bedroom Styling",
    subtitle: "Quiet textures for restful spaces",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_TWO,
  },
  {
    title: "Modern Tabletop Decor",
    subtitle: "Simple objects with sculptural warmth",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
  },
  {
    title: "Workspace in Balance",
    subtitle: "Utility and calm in one focused setting",
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_THREE,
  },
] as const;

const HomeLanding = () => {
  const styles = homeLandingThemes.default;

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
              Calm, curated living
            </span>

            <div className="space-y-4">
              <h1
                className={cn(
                  "max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                  styles.heroTitle
                )}
              >
                Thoughtful furniture and decor for a slower, softer home.
              </h1>
              <p
                className={cn(
                  "max-w-xl text-base leading-7 sm:text-lg",
                  styles.heroCopy
                )}
              >
                Moon Ecommerce brings together timeless furniture, quiet accents,
                and living essentials designed to make everyday spaces feel more
                grounded, comfortable, and beautifully arranged.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className={cn("h-12 rounded-full px-6", styles.primaryButton)}>
                <Link href={APP_ROUTES.COLLECTIONS}>Explore Collections</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn("h-12 rounded-full px-6", styles.secondaryButton)}
              >
                <Link href={APP_ROUTES.ABOUT}>Explore Our Story</Link>
              </Button>
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
                alt="Curated interior lifestyle collection"
                width={720}
                height={720}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:max-w-2xl">
          <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.categoryMeta)}>
            Featured Categories
          </p>
          <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
            Essentials shaped around the way you live.
          </h2>
          <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
            Discover softly curated collections for rooms that feel settled,
            practical, and intentionally styled.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {isValidArray(categories) &&
            categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className={cn(
                  "group overflow-hidden rounded-[30px] p-4 sm:p-5",
                  styles.categoryCard
                )}
              >
                <div
                  className={cn(
                    "mb-5 overflow-hidden rounded-[24px] p-4",
                    styles.categoryImageShell
                  )}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={420}
                    height={320}
                    className="h-52 w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className={cn("text-xl font-semibold", styles.categoryTitle)}>
                    {category.title}
                  </h3>
                  <p className={cn("text-sm leading-6", styles.sectionCopy)}>
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:max-w-2xl">
          <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.categoryMeta)}>
            Best Sellers
          </p>
          <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
            Pieces our customers keep bringing home first.
          </h2>
          <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
            Best-loved furniture, decor, and lighting selected for comfort,
            versatility, and enduring appeal.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {isValidArray(bestSellers) &&
            bestSellers.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:max-w-2xl">
          <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.categoryMeta)}>
            New Arrivals
          </p>
          <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
            Fresh additions with a softer point of view.
          </h2>
          <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
            A light, airy edit of newly landed pieces with quiet details and a
            refined everyday feel.
          </p>
        </div>

        <div className={cn("flex gap-5 overflow-x-auto pb-2", styles.arrivalsRail)}>
          {isValidArray(newArrivals) &&
            newArrivals.map((product) => (
              <div key={product.title} className="min-w-[285px] max-w-[285px] flex-none sm:min-w-[320px] sm:max-w-[320px]">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:max-w-2xl">
          <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.categoryMeta)}>
            Collections by Space
          </p>
          <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
            Inspiration for rooms that feel lived in and beautifully resolved.
          </h2>
          <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
            Explore lifestyle-led settings built around comfort, clarity, and
            soft everyday luxury.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {isValidArray(spaces) &&
            spaces.map((space) => (
              <Link
                key={space.title}
                href={space.href}
                className={cn(
                  "group relative min-h-[420px] overflow-hidden rounded-[32px]",
                  styles.spaceCard
                )}
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  width={640}
                  height={720}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className={cn("absolute inset-0", styles.spaceOverlay)} />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-md">
                    <h3 className={cn("text-2xl font-semibold", styles.spaceTitle)}>
                      {space.title}
                    </h3>
                    <p className={cn("mt-2 text-sm leading-6", styles.spaceCopy)}>
                      {space.subtitle}
                    </p>
                    <span
                      className={cn(
                        "mt-4 inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        styles.spaceCta
                      )}
                    >
                      Explore Space
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div
          className={cn(
            "overflow-hidden rounded-[36px] border px-6 py-8 sm:px-8 sm:py-10 lg:px-10",
            styles.newsletterShell
          )}
        >
          <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
            <div className="space-y-3 lg:max-w-2xl">
              <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.newsletterEyebrow)}>
                Join the newsletter
              </p>
              <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.newsletterTitle)}>
                Weekly arrivals, styling notes, and exclusive access for calmer living.
              </h2>
              <p className={cn("text-base leading-7 sm:text-lg", styles.newsletterCopy)}>
                Subscribe for thoughtful product edits, seasonal inspiration, and early access to limited collections.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row xl:min-w-[420px]">
              <Input
                type="email"
                placeholder="Enter your email"
                className={cn("h-12 rounded-full px-5", styles.newsletterInput)}
              />
              <Button className={cn("h-12 rounded-full px-6", styles.newsletterButton)}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container pb-16 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:max-w-2xl">
          <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.categoryMeta)}>
            Social Gallery
          </p>
          <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.sectionTitle)}>
            Everyday corners styled with furniture, light, and slower details.
          </h2>
          <p className={cn("text-base leading-7 sm:text-lg", styles.sectionCopy)}>
            A glimpse of Moon pieces in lived-in settings, from quiet bedrooms to layered tabletop moments.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {isValidArray(galleryItems) &&
            galleryItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn("group overflow-hidden rounded-[30px] p-4", styles.galleryCard)}
              >
                <div
                  className={cn(
                    "mb-4 overflow-hidden rounded-[24px] p-3",
                    styles.galleryImageWrap
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={420}
                    height={420}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className={cn("text-lg font-semibold", styles.galleryTitle)}>
                    {item.title}
                  </h3>
                  <p className={cn("text-sm leading-6", styles.galleryMeta)}>
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section className="custom-container pb-18 sm:pb-24">
        <div
          className={cn(
            "overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10",
            styles.bannerShell
          )}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className={cn("text-sm font-semibold uppercase tracking-[0.2em]", styles.bannerEyebrow)}>
                Limited Seasonal Offer
              </p>
              <h2 className={cn("text-3xl font-semibold sm:text-4xl", styles.bannerTitle)}>
                Enjoy up to 30% off selected pieces designed for softer summer living.
              </h2>
              <p className={cn("text-base leading-7 sm:text-lg", styles.bannerCopy)}>
                A quiet edit of furniture, lighting, and home accents with a
                limited-time price drop for the season.
              </p>
            </div>

            <Button asChild className={cn("h-12 rounded-full px-6", styles.primaryButton)}>
              <Link href={APP_ROUTES.COLLECTIONS}>Explore Collections</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeLanding;
