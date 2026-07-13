const dealItems = [
  {
    label: "2x Smash Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    label: "Large Fries",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
  },
  {
    label: "2x Drinks",
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&h=300&fit=crop",
  },
  {
    label: "Onion Rings",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
  },
];

export default function MegaDeal() {
  return (
    <section id="deals" className="py-16 sm:py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">
                — Limited Time Offer
              </p>
              <h2 className="section-title leading-tight">
                Mega Meal
                <br />
                <span className="text-brand-red">Deal</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Feed the crew without burning a hole in your pocket. Our Mega Meal
              Deal packs everything you love into one unstoppable combo.
            </p>

            {/* What&apos;s included */}
            <ul className="space-y-2">
              {dealItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-red flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#1f1f1f]">
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">Regular</div>
                <div className="text-gray-500 line-through text-lg font-semibold">Rs. 2,599</div>
              </div>
              <div className="w-px h-12 bg-[#1f1f1f]" />
              <div>
                <div className="text-brand-red text-xs uppercase tracking-wide mb-1 font-semibold">
                  Deal Price
                </div>
                <div className="text-white text-3xl font-black">Rs. 1,999</div>
              </div>
              <div className="bg-brand-red text-white text-xs font-black px-3 py-2 uppercase">
                Save
                <br />
                23%
              </div>
            </div>

            <button className="btn-red px-8 py-3.5">Grab This Deal</button>
          </div>

          {/* Right – Deal items grid */}
          <div className="grid grid-cols-2 gap-3">
            {dealItems.map((item) => (
              <div key={item.label} className="relative overflow-hidden group card-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
