"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen} direction="right">
      <DrawerContent className="mt-0 right-0 left-auto top-0 w-full sm:w-[400px] h-screen rounded-none outline-none flex flex-col pt-safe bg-white">
        <DrawerHeader className="border-b px-5 py-5 flex items-center justify-between">
          <DrawerTitle className="text-xl font-semibold">Your Cart</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full size-10">
              <X className="size-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                <svg className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-slate-900">Your cart is empty</p>
                <p className="text-sm text-slate-500 mt-1">Looks like you haven't added anything yet.</p>
              </div>
              <DrawerClose asChild>
                <Button className="mt-4 rounded-full px-6">Continue Shopping</Button>
              </DrawerClose>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.title} className="flex gap-4 items-center">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[16px] bg-slate-50 relative p-2 border border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1 py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-slate-900 text-[15px] leading-tight pr-4">{item.title}</h4>
                      <button 
                        onClick={() => removeFromCart(item.title)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="text-emerald-900 font-medium">{item.price}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.title, item.quantity - 1)}
                          className="size-6 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm border border-slate-200 hover:text-slate-950 transition-colors"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.title, item.quantity + 1)}
                          className="size-6 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm border border-slate-200 hover:text-slate-950 transition-colors"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t bg-slate-50 p-5 mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-medium text-slate-600">Subtotal</span>
              <span className="text-xl font-semibold text-slate-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-slate-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full h-12 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
