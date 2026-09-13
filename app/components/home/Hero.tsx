import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blazr-dark">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=900&fit=crop"
          alt="BLAZR Fast Food Hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blazr-dark via-blazr-dark/90 to-blazr-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-blazr-dark via-transparent to-transparent" />
      </div>

      {/* Red glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blazr-red/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blazr-orange/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* Left */}
          <div className="space-y-6 animate-slide-up">
            {/* Badge */}
            <div className="section-tag w-fit">
              <span className="w-1.5 h-1.5 bg-blazr-red rounded-full animate-pulse" />
              Karachi&apos;s #1 Fast Food
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                <span className="text-white block">Flavour</span>
                <span className="gradient-text block text-glow">That Hits</span>
                <span className="text-white block">Hard.</span>
              </h1>
            </div>

            <p className="text-blazr-muted text-lg max-w-md leading-relaxed">
              Bold flavours, crispy bites and Karachi&apos;s favourite fast food —
              delivered hot and fresh to your door.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/order" className="btn-red text-base px-8 py-4 text-center">🔥 Order Now</Link>
              <Link href="/menu" className="btn-ghost text-base px-8 py-4 text-center">View Menu →</Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-blazr-border">
              {[
                { val: "3",     label: "Karachi Branches" },
                { val: "4.9★",  label: "Customer Rating"  },
                { val: "25min", label: "Avg. Delivery"     },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-blazr-muted uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – featured card */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="absolute w-80 h-80 bg-blazr-red/15 rounded-full blur-3xl" />
            <div className="relative z-10 animate-float">
              {/* Hero food image */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=560&h=560&fit=crop&crop=center"
                  alt="BLAZR Zinger Burger"
                  className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] object-cover rounded-full border-4 border-blazr-red/30 shadow-2xl glow-red"
                />

                {/* Floating product card */}
                <div className="absolute -bottom-4 -left-6 glass-dark px-4 py-3 rounded-2xl shadow-2xl border border-blazr-red/20 z-20 min-w-[160px]">
                  <div className="text-[10px] text-blazr-muted uppercase tracking-widest">Best Seller</div>
                  <div className="text-white font-bold text-sm">Zinger Burger</div>
                  <div className="text-blazr-amber font-black">Rs. 690</div>
                  <div className="mt-1">
                    <span className="text-[10px] bg-blazr-red/20 text-blazr-red px-2 py-0.5 rounded-full font-semibold">🔥 Hot Pick</span>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="absolute -top-2 -right-4 glass-dark px-3 py-2 rounded-2xl border border-blazr-amber/20 z-20">
                  <div className="flex items-center gap-1">
                    <span className="text-blazr-amber text-lg">★</span>
                    <div>
                      <div className="text-white font-black text-sm leading-none">4.9</div>
                      <div className="text-[9px] text-blazr-muted">1.2K+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blazr-dark to-transparent pointer-events-none" />
    </section>
  );
}
