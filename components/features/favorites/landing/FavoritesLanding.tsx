"use client";

import Link from "next/link";
import ProductCard from "@/components/features/home/landing/ProductCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import { isValidArray } from "@/lib/global-helpers";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { collectionsLandingThemes } from "@/components/features/collections/landing/collections-theme";

const FavoritesLanding = () => {
  const styles = collectionsLandingThemes.default; // Reusing collections theme for consistency
  const { favorites } = useFavorites();

  return (
    <main className={styles.page}>
      <section className="custom-container pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-18">
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[36px] px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 text-center",
            styles.heroShell
          )}
        >
          <span
            className={cn(
              "inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
              styles.heroBadge
            )}
          >
            Your Wishlist
          </span>

          <div className="space-y-4">
            <h1
              className={cn(
                "max-w-3xl mx-auto text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                styles.heroTitle
              )}
            >
              Pieces you love.
            </h1>
            <p
              className={cn(
                "max-w-xl mx-auto text-base leading-7 sm:text-lg",
                styles.heroCopy
              )}
            >
              A personalized collection of your favorite furniture, decor, and intentional living essentials.
            </p>
          </div>
        </div>
      </section>

      <section className="custom-container pb-18 sm:pb-24">
        <div className={styles.gridShell}>
          {isValidArray(favorites) ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {favorites.map((product, index) => (
                <ProductCard key={`${product.title}-${index}`} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 py-20 text-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-900 border border-emerald-100">
                <svg
                  className="size-10 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Your wishlist is empty</h3>
                <p className="text-slate-600 max-w-sm mb-6">
                  Save your favorite items here while you browse our collections, making it easy to find them later.
                </p>
                <Link
                  href={APP_ROUTES.COLLECTIONS}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                >
                  Explore Collections
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default FavoritesLanding;
