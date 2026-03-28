"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type ProductCardItem } from "@/components/features/home/landing/ProductCard";

type FavoritesContextType = {
  favorites: ProductCardItem[];
  addFavorite: (product: ProductCardItem) => void;
  removeFavorite: (productTitle: string) => void;
  isFavorite: (productTitle: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<ProductCardItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("moon_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse favorites from local storage", e);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("moon_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product: ProductCardItem) => {
    setFavorites((prev) => {
      // Prevent duplicates
      if (prev.some((p) => p.title === product.title)) return prev;
      return [...prev, product];
    });
  };

  const removeFavorite = (productTitle: string) => {
    setFavorites((prev) => prev.filter((p) => p.title !== productTitle));
  };

  const isFavorite = (productTitle: string) => {
    return favorites.some((p) => p.title === productTitle);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
