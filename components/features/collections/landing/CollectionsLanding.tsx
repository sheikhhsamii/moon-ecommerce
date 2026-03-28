"use client";

import { useState } from "react";
import ProductCard, { type ProductCardItem } from "@/components/features/home/landing/ProductCard";
import { isValidArray } from "@/lib/global-helpers";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { collectionsLandingThemes } from "./collections-theme";

type CollectionProductItem = ProductCardItem & {
  category: string;
};

const allProducts: readonly CollectionProductItem[] = [
  {
    title: "Aster Lounge Chair",
    price: "$289",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_ONE,
    category: "Living Room",
  },
  {
    title: "Halo Floor Lamp",
    price: "$148",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
    category: "Lighting",
  },
  {
    title: "Luma Side Table",
    price: "$176",
    rating: 4.7,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_TWO,
    category: "Bedroom",
  },
  {
    title: "Serein Desk",
    price: "$324",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_THREE,
    category: "Workspace",
  },
  {
    title: "Kora Mirror Decor",
    price: "$96",
    rating: 4.6,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
    category: "Decor",
  },
  {
    title: "Mori Accent Shelf",
    price: "$214",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_SIX,
    category: "Decor",
  },
  {
    title: "Solace Bedside Lamp",
    price: "$132",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FIVE,
    badge: "New",
    category: "Lighting",
  },
  {
    title: "Noma Reading Chair",
    price: "$268",
    rating: 4.9,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_ONE,
    badge: "New",
    category: "Workspace",
  },
  {
    title: "Quiet Oak Console",
    price: "$356",
    rating: 4.7,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR,
    badge: "New",
    category: "Living Room",
  },
  {
    title: "Muse Ceramic Vase",
    price: "$84",
    rating: 4.8,
    href: APP_ROUTES.COLLECTIONS,
    image: IMAGE_CONSTANTS.SERVICES_FOUR,
    badge: "New",
    category: "Decor",
  },
] as const;

const CATEGORIES = ["All", "Living Room", "Bedroom", "Workspace", "Decor", "Lighting"];

const CollectionsLanding = () => {
  const styles = collectionsLandingThemes.default;
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? allProducts 
    : allProducts.filter((product) => product.category === activeTab);

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
            All Collections
          </span>

          <div className="space-y-4">
            <h1
              className={cn(
                "max-w-3xl mx-auto text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
                styles.heroTitle
              )}
            >
              Thoughtful pieces for every room.
            </h1>
            <p
              className={cn(
                "max-w-2xl mx-auto text-base leading-7 sm:text-lg",
                styles.heroCopy
              )}
            >
              Explore our curated selection of furniture, lighting, and decor. Designed for slow living and everyday calm, each item is crafted to age gracefully in your home.
            </p>
          </div>
        </div>
      </section>

      <section className="custom-container pb-18 sm:pb-24">
        <div className={styles.gridShell}>
          {/* Category Tabs */}
          <div className={styles.tabList}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={cn(
                  styles.tabItem,
                  activeTab === category ? styles.tabActive : styles.tabInactive
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {isValidArray(filteredProducts) ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={`${product.title}-${index}`} product={product} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-slate-500">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionsLanding;
