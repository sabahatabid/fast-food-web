"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/menu/ProductCard";
import { products, categories } from "../data/products";

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch]       = useState("");
  const [sortBy, setSortBy]       = useState("default");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat  = activeCat === "all" || p.category === activeCat;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
    if (sortBy === "price-asc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "popular")    list = [...list].filter((p) => p.tag === "bestseller" || p.tag === "popular").concat(
      list.filter((p) => p.tag !== "bestseller" && p.tag !== "popular")
    );
    return list;
  }, [activeCat, search, sortBy]);

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-10 bg-blazr-charcoal border-b border-blazr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="section-tag mx-auto mb-3">🍔 Our Menu</div>
            <h1 className="section-title mb-3">BLAZR Full Menu</h1>
            <p className="text-blazr-muted text-lg">Burgers. Pizza. Broast. Everything Karachi craves.</p>
          </div>
          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blazr-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search menu items..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="input-dark pl-11 py-3.5" />
              {search && <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-blazr-muted hover:text-white transition-colors text-sm">✕</button>}
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-dark sm:w-44">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low→High</option>
              <option value="price-desc">Price: High→Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-16 z-30 bg-blazr-dark/95 backdrop-blur-xl border-b border-blazr-border py-3 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActiveCat(c.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeCat === c.id
                    ? "bg-blazr-red text-white shadow-md shadow-blazr-red/30"
                    : "border border-blazr-border text-blazr-muted hover:border-blazr-red/50 hover:text-white"
                }`}>
                <span>{c.emoji}</span>{c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-blazr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-blazr-muted text-lg mb-2">No items found</p>
              <button onClick={() => { setSearch(""); setActiveCat("all"); }} className="btn-red mt-3 text-sm py-2 px-5">Clear Filters</button>
            </div>
          ) : (
            <>
              <p className="text-blazr-muted text-sm mb-6">
                Showing <span className="text-white font-bold">{filtered.length}</span> items
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function MenuPage() {
  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />
      <Suspense fallback={<div className="pt-24 text-center text-blazr-muted">Loading menu...</div>}>
        <MenuContent />
      </Suspense>
      <Footer />
    </div>
  );
}
