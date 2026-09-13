"use client";
import { useState } from "react";
import { Product, tagConfig } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useToast } from "../../context/ToastContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const { showToast } = useToast();
  const [adding, setAdding] = useState(false);
  const wishlisted = has(product.id);
  const tag = product.tag ? tagConfig[product.tag] : null;
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  const handleAdd = () => {
    setAdding(true);
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category });
    showToast(`${product.name} added to cart 🔥`, "success");
    setTimeout(() => setAdding(false), 700);
  };

  return (
    <div className="card-product group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-blazr-charcoal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop";
          }}
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-blazr-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tag badge */}
        {tag && (
          <span className={`absolute top-3 left-3 ${tag.bg} ${tag.text} text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md`}>
            {tag.label}
          </span>
        )}

        {/* Savings badge */}
        {savings > 0 && (
          <span className="absolute top-3 right-10 bg-blazr-gold text-blazr-dark text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-md">
            SAVE Rs.{savings}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => {
            toggle(product.id);
            showToast(wishlisted ? "Removed from wishlist" : "Added to wishlist ❤️", wishlisted ? "info" : "success");
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${wishlisted ? "bg-blazr-red text-white" : "bg-black/50 text-blazr-muted hover:text-blazr-red backdrop-blur-sm"}`}
          aria-label="Toggle wishlist"
        >
          <svg className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Category badge */}
        <span className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest">{product.category}</span>

        <h3 className="font-black text-white text-sm leading-tight group-hover:text-blazr-red transition-colors">
          {product.name}
        </h3>
        <p className="text-blazr-muted text-xs leading-relaxed flex-1 line-clamp-2">{product.description}</p>

        {/* Price row */}
        <div className="flex items-center justify-between mt-2 gap-2">
          <div>
            <span className="text-blazr-amber font-black text-lg">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-blazr-muted text-xs line-through ml-2">Rs. {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            disabled={adding}
            className={`btn-red py-2 px-4 text-[11px] flex-shrink-0 transition-all ${adding ? "scale-95 bg-green-600" : ""}`}
          >
            {adding ? "✓ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
