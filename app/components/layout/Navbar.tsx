"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Menu",      href: "/menu" },
  { label: "Deals",     href: "/menu?cat=deals" },
  { label: "Gallery",   href: "/gallery" },
  { label: "About",     href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-blazr-dark/97 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-blazr-border" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 bg-blazr-gradient rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-sm tracking-widest">B</span>
                </div>
                <div className="absolute -inset-0.5 bg-blazr-gradient rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="leading-none">
                <div className="font-black text-white text-xl tracking-[0.15em] group-hover:text-blazr-red transition-colors">BLAZR</div>
                <div className="text-[8px] text-blazr-muted tracking-[0.3em] uppercase font-semibold">Fast Food</div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((l) => (
                <Link key={l.label} href={l.href}
                  className="text-[11px] font-bold text-blazr-muted hover:text-white uppercase tracking-widest transition-colors duration-150 relative group">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blazr-red group-hover:w-full transition-all duration-200" />
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(true)} aria-label="Cart"
                className="relative p-2 text-blazr-muted hover:text-white hover:bg-white/5 rounded-xl transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-blazr-red text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
              <Link href="/order" className="hidden md:block btn-red py-2 px-4 text-[11px]">Order Now</Link>
              <button onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-blazr-muted hover:text-white hover:bg-white/5 rounded-xl transition-all" aria-label="Menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-blazr-card border-t border-blazr-border px-4 py-4 space-y-1 shadow-xl animate-fade-in">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-blazr-muted hover:text-white hover:bg-white/5 uppercase tracking-widest py-2.5 px-3 rounded-xl transition-all">
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/order" onClick={() => setOpen(false)} className="btn-red w-full text-center block">Order Now</Link>
            </div>
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  );
}
