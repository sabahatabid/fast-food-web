import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { locations } from "../data/products";

export default function LocationsPage() {
  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />

      <section className="pt-24 pb-10 bg-blazr-charcoal border-b border-blazr-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag mx-auto mb-3">📍 Find Us</div>
          <h1 className="section-title mb-3">Our Karachi Locations</h1>
          <p className="text-blazr-muted text-lg">3 branches across Karachi — always close to you.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {locations.map((loc, i) => (
              <div key={i} className="card-dark p-6 hover:-translate-y-1 transition-all group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-blazr-red/10 rounded-xl flex items-center justify-center border border-blazr-red/20 text-2xl group-hover:bg-blazr-red/20 transition-colors">📍</div>
                  <div>
                    <h2 className="font-black text-white text-lg uppercase tracking-wide">{loc.name}</h2>
                    <p className="text-blazr-red text-xs font-bold uppercase tracking-widest">Karachi, Sindh</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { icon:"📍", label:"Address",  val:loc.address },
                    { icon:"📞", label:"Phone",    val:loc.phone   },
                    { icon:"🕐", label:"Hours",    val:loc.hours   },
                    { icon:"🚴", label:"Delivery", val:loc.delivery },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <span className="text-blazr-red flex-shrink-0 text-sm">{row.icon}</span>
                      <div>
                        <div className="text-[9px] text-blazr-muted uppercase tracking-widest font-bold">{row.label}</div>
                        <div className="text-white text-sm">{row.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <a href={`tel:${loc.phone}`}
                    className="text-center text-[10px] font-black uppercase tracking-widest border border-blazr-border hover:border-blazr-red text-blazr-muted hover:text-blazr-red py-2.5 px-2 rounded-xl transition-all">
                    📞 Call
                  </a>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer"
                    className="text-center text-[10px] font-black uppercase tracking-widest border border-blazr-border hover:border-blazr-amber text-blazr-muted hover:text-blazr-amber py-2.5 px-2 rounded-xl transition-all">
                    🗺️ Map
                  </a>
                  <a href="/order"
                    className="text-center text-[10px] font-black uppercase tracking-widest bg-blazr-red text-white hover:bg-red-700 py-2.5 px-2 rounded-xl transition-all shadow-md shadow-blazr-red/20">
                    🔥 Order
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map section */}
          <div className="card-dark p-8 rounded-2xl text-center">
            <h3 className="font-black text-white text-xl uppercase tracking-wide mb-2">Find Us on Google Maps</h3>
            <p className="text-blazr-muted mb-6">Gulshan-e-Iqbal • DHA Phase 6 • Clifton — All in Karachi, Sindh</p>
            <div className="bg-blazr-charcoal rounded-2xl h-56 flex items-center justify-center border border-blazr-border mb-5">
              <div className="text-center">
                <div className="text-6xl mb-3">🗺️</div>
                <p className="text-blazr-muted text-sm">Interactive map coming soon</p>
                <p className="text-blazr-muted text-xs mt-1">Karachi, Sindh, Pakistan</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Karachi+Pakistan" target="_blank" rel="noopener noreferrer"
              className="btn-outline inline-block">Open in Google Maps →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
