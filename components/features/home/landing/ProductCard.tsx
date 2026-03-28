"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Plus } from "lucide-react";

import { useFavorites } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { homeLandingThemes } from "./home-theme";

export type ProductCardItem = {
  title: string;
  price: string;
  rating: number;
  href: string;
  image: any;
  badge?: string;
};

type ProductCardProps = {
  product: ProductCardItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const styles = homeLandingThemes.default;
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorited = isFavorite(product.title);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (favorited) {
      removeFavorite(product.title);
    } else {
      addFavorite(product);
    }
  };

  return (
    <article className={cn("relative overflow-hidden rounded-[30px] p-4 sm:p-5", styles.productCard)}>
      <div
        className={cn(
          "relative mb-5 overflow-hidden rounded-[24px] p-4",
          styles.productImageShell
        )}
      >
          {product.badge ? (
            <span
              className={cn(
                "absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                styles.productBadge
              )}
            >
              {product.badge}
            </span>
          ) : null}
          <button
            onClick={toggleFavorite}
            className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-white/50 text-slate-700 shadow-[0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all hover:bg-white hover:scale-105"
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("size-4", favorited && "fill-red-500 text-red-500")} />
          </button>
          
          <Link href={product.href} className="block">
            <Image
              src={product.image}
              alt={product.title}
              width={420}
              height={320}
              className="h-56 w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </Link>
        </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="space-y-1.5">
          <Link href={product.href} className="block group/link">
            <h3 className={cn("text-lg font-semibold transition-colors group-hover/link:text-emerald-700", styles.productTitle)}>
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2.5">
            <p className={cn("text-base font-medium text-slate-700", styles.productPrice)}>
              {product.price}
            </p>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1 text-slate-500">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              <span className="text-[13px] font-medium">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <Button 
          onClick={(e: React.MouseEvent) => { 
            e.preventDefault(); 
            e.stopPropagation();
            alert(`${product.title} added to cart!`);
          }}
          className={cn("relative z-10 h-9 rounded-full px-4 text-xs transition-all hover:scale-105 active:scale-95", styles.productAction)}
          aria-label="Add to cart"
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
