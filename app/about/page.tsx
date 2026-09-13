import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const values = [
  { icon:"🌿", title:"Fresh Ingredients",     desc:"We use fresh meat, quality bread and locally sourced vegetables — every single day. No compromises." },
  { icon:"✨", title:"Premium Quality",        desc:"Consistent taste, generous portions and a standard of quality that Karachi has come to expect from BLAZR." },
  { icon:"🍟", title:"Crispy & Fresh",         desc:"Every order is prepared fresh to order — hot, crispy and ready to hit. Never pre-cooked, never stale." },
  { icon:"🧼", title:"Hygienic Preparation",   desc:"Food-grade surfaces, gloved staff and strict kitchen hygiene so every bite is as safe as it is delicious." },
  { icon:"⚡", title:"Fast Delivery",           desc:"We deliver hot food across Gulshan, DHA and Clifton in under 30 minutes. Your late-night Karachi fix, fast." },
  { icon:"🏙️", title:"Karachi Made",            desc:"Born in Karachi, built for Karachi. BLAZR celebrates the city's bold, energetic and flavour-first street food culture." },
];

export default function AboutPage() {
  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-blazr-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blazr-dark to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag mb-4">🔥 Our Story</div>
              <h1 className="section-title mb-6 leading-tight">
                Karachi&apos;s <span className="gradient-text">Boldest</span> Fast Food Brand
              </h1>
              <p className="text-blazr-muted text-lg leading-relaxed mb-4">
                BLAZR Fast Food brings bold, satisfying fast-food flavours to Karachi with a focus on
                quality ingredients, generous portions and freshly prepared meals.
              </p>
              <p className="text-blazr-muted leading-relaxed">
                We started with a simple mission: give Karachi a fast food brand that actually hits hard —
                not just in taste, but in quality, speed and value. Three branches, thousands of happy
                customers and one unstoppable fire later, BLAZR is just getting started.
              </p>
              <div className="mt-6 inline-block">
                <span className="text-blazr-red font-black text-xl italic">&quot;Flavour That Hits Hard&quot;</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blazr-red/10 rounded-3xl blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=500&fit=crop"
                alt="BLAZR Story" className="relative rounded-2xl shadow-2xl border border-blazr-border w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-blazr-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[["3","Karachi Branches"],["10K+","Happy Customers"],["30+","Menu Items"],["4.9★","Avg. Rating"]].map(([v,l],i)=>(
              <div key={i}>
                <div className="text-4xl font-black text-white">{v}</div>
                <div className="text-white/70 text-sm mt-1 uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-blazr-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto mb-3">💎 Our Values</div>
            <h2 className="section-title mb-3">What BLAZR Stands For</h2>
            <p className="text-blazr-muted text-lg max-w-xl mx-auto">Six pillars that shape every burger, every pizza and every delivery we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-dark p-6 group hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-black text-white text-base uppercase tracking-wide mb-2">{v.title}</h3>
                <p className="text-blazr-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Karachi section */}
      <section className="py-14 bg-blazr-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">🏙️</div>
          <h2 className="section-title mb-4">Your Late-Night Karachi Food Fix</h2>
          <p className="text-blazr-muted text-lg leading-relaxed mb-4">
            Karachi never sleeps — and neither does BLAZR. Whether it&apos;s a quick lunch, a family dinner
            or that 1am craving that only a Zinger can fix, we&apos;re here for it all.
          </p>
          <p className="text-blazr-muted leading-relaxed">
            From late-night Clifton drives to family gatherings in Gulshan, BLAZR has become the go-to
            for anyone who wants food that&apos;s bold, fresh and unapologetically Karachi.
          </p>
          <div className="flex gap-3 justify-center mt-8 flex-wrap">
            <a href="/menu" className="btn-red">Explore Menu</a>
            <a href="/order" className="btn-ghost">Order Now</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
