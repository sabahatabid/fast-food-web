import { locations } from "../../data/products";
import Link from "next/link";

export default function Locations() {
  return (
    <section className="py-16 md:py-24 bg-blazr-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag mx-auto mb-3">📍 Find Us</div>
          <h2 className="section-title mb-3">Karachi Locations</h2>
          <p className="text-blazr-muted text-lg">3 branches across Karachi — BLAZR is always nearby.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {locations.map((loc, i) => (
            <div key={i} className="card-dark p-6 group">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blazr-red/10 rounded-xl flex items-center justify-center text-blazr-red text-lg border border-blazr-red/20">
                  {loc.emoji}
                </div>
                <h3 className="font-black text-white text-base uppercase tracking-wide">{loc.name}</h3>
              </div>
              <div className="space-y-2.5 mb-5">
                {[
                  { icon: "📍", val: loc.address },
                  { icon: "📞", val: loc.phone },
                  { icon: "🕐", val: loc.hours },
                  { icon: "🚴", val: `Delivery: ${loc.delivery}` },
                ].map((row, j) => (
                  <div key={j} className="flex gap-2 text-sm">
                    <span className="flex-shrink-0">{row.icon}</span>
                    <span className="text-blazr-muted">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={`tel:${loc.phone}`} className="flex-1 text-center border border-blazr-border hover:border-blazr-red text-blazr-muted hover:text-blazr-red text-xs font-bold py-2 px-3 rounded-xl transition-all uppercase tracking-wider">
                  Call
                </a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center border border-blazr-border hover:border-blazr-amber text-blazr-muted hover:text-blazr-amber text-xs font-bold py-2 px-3 rounded-xl transition-all uppercase tracking-wider">
                  Directions
                </a>
                <Link href="/order" className="flex-1 text-center btn-red py-2 px-3 text-xs">Order</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-blazr-card border border-blazr-border rounded-2xl p-6 text-center">
          <div className="text-5xl mb-3">🗺️</div>
          <p className="font-bold text-white text-lg">Karachi, Sindh, Pakistan</p>
          <p className="text-blazr-muted text-sm mb-4">Gulshan-e-Iqbal • DHA Phase 6 • Clifton</p>
          <a href="https://maps.google.com/?q=Karachi+Pakistan" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-block text-sm py-2 px-6">Open in Google Maps →</a>
        </div>
      </div>
    </section>
  );
}
