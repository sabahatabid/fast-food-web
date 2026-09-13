const features = [
  { icon: "🔥", title: "Bold Flavours",        desc: "Every item is crafted with BLAZR's signature spice blends — flavours you&apos;ll crave again and again.",   color: "border-blazr-red/40   bg-blazr-red/5"   },
  { icon: "🧼", title: "Hygienic Preparation",  desc: "Clean kitchen, gloved hands, food-grade surfaces. Your safety is our top priority.",                           color: "border-blue-500/40    bg-blue-500/5"    },
  { icon: "🌿", title: "Fresh Ingredients",     desc: "We use fresh meat, vegetables and sauces — no compromises on quality, ever.",                                   color: "border-green-500/40   bg-green-500/5"   },
  { icon: "⚡", title: "Fast Delivery",          desc: "Hot food at your door in 25 minutes across Gulshan, DHA and Clifton.",                                          color: "border-blazr-amber/40 bg-blazr-amber/5" },
  { icon: "💰", title: "Value for Money",        desc: "Premium taste at real Karachi prices — because good food shouldn&apos;t cost a fortune.",                       color: "border-purple-500/40  bg-purple-500/5"  },
  { icon: "🏙️", title: "Karachi Made",           desc: "Built around Karachi&apos;s energetic street-food culture — bold, late-night and always satisfying.",          color: "border-blazr-orange/40 bg-blazr-orange/5"},
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-blazr-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto mb-3">💎 Why BLAZR?</div>
          <h2 className="section-title mb-3">Why Choose BLAZR</h2>
          <p className="text-blazr-muted text-lg max-w-xl mx-auto">
            We don&apos;t just serve food — we serve an experience built for Karachi&apos;s energy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${f.color} hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="font-black text-white text-base mb-2 uppercase tracking-wide">{f.title}</h3>
              <p className="text-blazr-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
