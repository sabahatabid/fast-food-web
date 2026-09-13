import Link from "next/link";

const cats = [
  { emoji:"🍔", label:"Burgers",     desc:"4 Bold Options",         href:"/menu?cat=burgers",    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop" },
  { emoji:"🍗", label:"Chicken",     desc:"Crispy & Spicy",         href:"/menu?cat=chicken",    img:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop" },
  { emoji:"🍕", label:"Pizza",       desc:"3 Signature Pizzas",     href:"/menu?cat=pizza",      img:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&h=300&fit=crop" },
  { emoji:"🥪", label:"Sandwiches",  desc:"Fresh & Loaded",         href:"/menu?cat=sandwiches", img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=300&fit=crop" },
  { emoji:"🍖", label:"Broast",      desc:"Karachi Signature",      href:"/menu?cat=broast",     img:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=300&fit=crop" },
  { emoji:"💥", label:"Deals",       desc:"Save Big",               href:"/menu?cat=deals",      img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=300&fit=crop" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24 bg-blazr-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag mx-auto mb-4">What We Serve</div>
          <h2 className="section-title mb-3">Featured Categories</h2>
          <p className="text-blazr-muted text-lg">From crispy broast to loaded burgers — Karachi&apos;s best, all in one place.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((c, i) => (
            <Link key={i} href={c.href}
              className="group relative overflow-hidden rounded-2xl border border-blazr-border hover:border-blazr-red/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blazr-red/20">
              {/* Background image */}
              <div className="aspect-square relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 text-center">
                  <div className="text-3xl mb-1 group-hover:scale-125 transition-transform duration-300">{c.emoji}</div>
                  <div className="font-black text-white text-sm uppercase tracking-wider">{c.label}</div>
                  <div className="text-[10px] text-blazr-muted mt-0.5">{c.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
