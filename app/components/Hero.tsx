export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-16">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#111111]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #e8201a 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">
                Now Ordering Online
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight uppercase">
                <span className="text-white block">Flavour</span>
                <span className="text-brand-red block">That</span>
                <span className="text-white block">Hits Hard</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
              Bold burgers, loaded wraps, and fiery flavours crafted for those
              who refuse to settle. Every bite is built to blow your mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-red px-8 py-3.5 text-sm">Order Now</button>
              <button className="btn-outline px-8 py-3.5 text-sm">View Menu</button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-[#1f1f1f]">
              <div>
                <div className="text-2xl font-black text-white">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Locations</div>
              </div>
              <div className="w-px h-10 bg-[#1f1f1f]" />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white">4.8</span>
                  <svg className="w-5 h-5 text-brand-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Rating</div>
              </div>
              <div className="w-px h-10 bg-[#1f1f1f]" />
              <div>
                <div className="text-2xl font-black text-white">25min</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right – Hero Image */}
          <div className="relative flex justify-center items-center">
            {/* Glow */}
            <div className="absolute w-80 h-80 bg-brand-red/20 rounded-full blur-3xl" />

            {/* Main burger image */}
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop&crop=center"
                alt="Signature Blaze Burger"
                width={520}
                height={520}
                className="object-contain drop-shadow-2xl rounded-full w-[380px] h-[380px] sm:w-[460px] sm:h-[460px]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-4 sm:right-8 bg-brand-red text-white px-4 py-3 shadow-xl z-20">
              <div className="text-xs uppercase tracking-widest font-semibold">Double Smash</div>
              <div className="text-xl font-black">BURGER</div>
              <div className="text-xs text-white/70 mt-1">Rs. 1,099</div>
            </div>

            {/* Top badge */}
            <div className="absolute top-10 left-4 sm:left-8 bg-[#111111] border border-[#1f1f1f] text-white px-3 py-2 z-20">
              <div className="flex items-center gap-2">
                <span className="text-brand-red text-lg font-black">🔥</span>
                <div>
                  <div className="text-xs font-bold uppercase">Best Seller</div>
                  <div className="text-[10px] text-gray-400">This week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
