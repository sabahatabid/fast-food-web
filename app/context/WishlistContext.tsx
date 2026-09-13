"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface WishlistContextType {
  items: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const toggle = useCallback((id: string) =>
    setItems((p) => p.includes(id) ? p.filter((i) => i !== id) : [...p, id]), []);
  const has = useCallback((id: string) => items.includes(id), [items]);
  return <WishlistContext.Provider value={{ items, toggle, has }}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
