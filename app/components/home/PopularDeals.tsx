import { deals } from "../../data/products";
import Link from "next/link";

export default function PopularDeals() {
  return (
    <section className="py-16 md:py-24 bg-blazr-dark relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blazr-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag mx-auto mb-3">💥 Limited Deals</div>
          <h2 className="section-title mb-3">Popular Deals</h2>
          <p className="text-blazr-muted text-lg">Big flavour. Bigger savings. Built for Karachi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => {
            const savings = deal.originalPrice ? deal.originalPrice - deal.price : 0;
            return (
              <div key={deal.id} className="card-dark relative overflow-hidden group">
                {/* Savings ribbon */}
                {savings > 0 && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-blazr-gold text-blazr-dark font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      SAVE Rs. {savings.toLocaleString()}
                    </div>
                  </div>
                )}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={deal.image} alt={deal.name}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />

                <div className="p-5">
                  <h3 className="font-black text-white text-lg uppercase tracking-tight">{deal.name}</h3>
                  <p className="text-blazr-muted text-xs mt-1 leading-relaxed line-clamp-2">{deal.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-blazr-amber font-black text-2xl">Rs. {deal.price.toLocaleString()}</div>
                      {deal.originalPrice && (
                        <div className="text-blazr-muted text-xs line-through">Rs. {deal.originalPrice.toLocaleString()}</div>
                      )}
                    </div>
                    <Link href="/order" className="btn-red py-2 px-5 text-xs">Order Now</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
