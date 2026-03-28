"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type ProductCardItem } from "@/components/features/home/landing/ProductCard";

export type CartItem = ProductCardItem & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: ProductCardItem) => void;
  removeFromCart: (productTitle: string) => void;
  updateQuantity: (productTitle: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("moon_cart");
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse cart from local storage", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moon_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: ProductCardItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.title === product.title);
      if (existingItem) {
        return prev.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto-open drawer when adding
  };

  const removeFromCart = (productTitle: string) => {
    setCartItems((prev) => prev.filter((item) => item.title !== productTitle));
  };

  const updateQuantity = (productTitle: string, quantity: number) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.title !== productTitle);
      return prev.map((item) =>
        item.title === productTitle ? { ...item, quantity } : item
      );
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = cartItems.reduce((total, item) => {
    const priceStr = item.price.replace(/[^0-9.]/g, ''); 
    const price = parseFloat(priceStr) || 0;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        isCartOpen, 
        setIsCartOpen, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        cartCount, 
        cartTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
