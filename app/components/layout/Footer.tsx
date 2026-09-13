import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blazr-border">
      {/* Order CTA banner */}
      <div className="bg-blazr-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
            Karachi&apos;s cravings. BLAZR&apos;s flavour.
          </h3>
          <p className="text-white/80 mb-6 text-lg">Hot. Crispy. Loaded. Delivered.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/order" className="bg-white text-blazr-red font-black px-8 py-3 rounded-full hover:bg-blazr-light transition-colors uppercase tracking-widest text-sm">
              Order Now
            </Link>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-black px-8 py-3 rounded-full hover:bg-white hover:text-blazr-red transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blazr-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">B</span>
              </div>
              <div>
                <div className="font-black text-white text-xl tracking-widest">BLAZR</div>
                <div className="text-[9px] text-blazr-muted tracking-widest uppercase">Fast Food • Karachi</div>
              </div>
            </div>
            <p className="text-blazr-muted text-sm leading-relaxed max-w-xs">
              Bold flavours, crispy bites and Karachi&apos;s favourite fast food —
              delivered hot and fresh to your door.
            </p>
            <p className="text-blazr-red font-bold text-sm italic">&quot;Flavour That Hits Hard&quot;</p>
            <div className="flex gap-3">
              {[
                { label: "FB",  href: "#", color: "hover:border-blue-500  hover:text-blue-500"  },
                { label: "IG",  href: "#", color: "hover:border-pink-500  hover:text-pink-500"  },
                { label: "TT",  href: "#", color: "hover:border-white     hover:text-white"     },
                { label: "WA",  href: "https://wa.me/923001234567", color: "hover:border-green-500 hover:text-green-500" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className={`w-9 h-9 rounded-full border border-blazr-border text-blazr-muted ${s.color} flex items-center justify-center text-[10px] font-bold transition-all`}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Home","/"],["Menu","/menu"],["Deals","/menu?cat=deals"],["Gallery","/gallery"],["About","/about"],["Contact","/contact"]].map(([l,h]) => (
                <li key={l}><Link href={h} className="text-blazr-muted hover:text-blazr-red text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {["Burgers","Pizza","Sandwiches","Broast","Chicken","Sides","Deals"].map((c) => (
                <li key={c}><Link href={`/menu?cat=${c.toLowerCase()}`} className="text-blazr-muted hover:text-blazr-red text-sm transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations + Contact */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Karachi Locations</h4>
            <ul className="space-y-2 mb-5">
              {["Gulshan-e-Iqbal","DHA Phase 6","Clifton"].map((l) => (
                <li key={l} className="text-blazr-muted text-sm flex items-center gap-1.5">
                  <span className="text-blazr-red">📍</span>{l}
                </li>
              ))}
            </ul>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-blazr-muted">
              <div className="flex gap-2"><span>📞</span><a href="tel:021XXXXXXX" className="hover:text-blazr-red transition-colors">021-XXXXXXX</a></div>
              <div className="flex gap-2"><span>💬</span><a href="https://wa.me/923001234567" className="hover:text-blazr-red transition-colors">WhatsApp Us</a></div>
              <div className="flex gap-2"><span>✉️</span><a href="mailto:hello@blazrfood.pk" className="hover:text-blazr-red transition-colors">hello@blazrfood.pk</a></div>
              <div className="flex gap-2"><span>🕐</span><span>12 PM – 2 AM Daily</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-blazr-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blazr-muted text-xs">© 2026 BLAZR Fast Food. All Rights Reserved. | Karachi, Sindh, Pakistan</p>
          <div className="flex gap-4">
            <Link href="#" className="text-blazr-muted hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-blazr-muted hover:text-white text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
