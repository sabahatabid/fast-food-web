import { bestSellers } from "../../data/products";
import ProductCard from "../menu/ProductCard";
import Link from "next/link";

export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-blazr-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-tag mb-3">🏆 Customer Favourites</div>
            <h2 className="section-title">Best Sellers</h2>
            <p className="text-blazr-muted mt-2 max-w-md">The most-ordered items on BLAZR — picked by Karachi every single day.</p>
          </div>
          <Link href="/menu" className="btn-outline py-2 px-5 text-sm flex-shrink-0">View All Menu →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
