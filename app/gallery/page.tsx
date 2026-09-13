"use client";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const allImages = [
  { src:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop", alt:"Classic BLAZR Burger",    cat:"burgers"  },
  { src:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=800&fit=crop", alt:"Zinger Burger",            cat:"burgers"  },
  { src:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=800&fit=crop",alt:"Double Beef Burger",      cat:"burgers"  },
  { src:"https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&h=800&fit=crop",alt:"Crispy Chicken Burger",   cat:"burgers"  },
  { src:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=800&fit=crop",alt:"Spicy Pepperoni Pizza",   cat:"pizza"    },
  { src:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop",alt:"BBQ Chicken Pizza",       cat:"pizza"    },
  { src:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=800&fit=crop",alt:"Desi Tikka Pizza",        cat:"pizza"    },
  { src:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&h=800&fit=crop",alt:"Crispy Broast",           cat:"broast"   },
  { src:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=800&fit=crop",alt:"4 Pieces Broast",         cat:"broast"   },
  { src:"https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&h=800&fit=crop",   alt:"Broast Family Platter",   cat:"broast"   },
  { src:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=800&fit=crop",alt:"Club Sandwich",           cat:"sandwiches"},
  { src:"https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=800&fit=crop",alt:"Crispy Chicken Sub",      cat:"sandwiches"},
  { src:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=800&fit=crop",alt:"Chicken Wings",           cat:"chicken"  },
  { src:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=800&fit=crop",alt:"Loaded Fries",            cat:"sides"    },
  { src:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&h=800&fit=crop",alt:"Regular Fries",           cat:"sides"    },
  { src:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=800&fit=crop",   alt:"Mega Meal Deal",          cat:"deals"    },
];

const filters = ["all","burgers","pizza","broast","sandwiches","chicken","sides","deals"];

export default function GalleryPage() {
  const [active, setActive]   = useState("all");
  const [lightbox, setLightbox] = useState<{src:string;alt:string}|null>(null);

  const visible = active === "all" ? allImages : allImages.filter((i) => i.cat === active);

  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-10 bg-blazr-charcoal border-b border-blazr-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag mx-auto mb-3">📸 Gallery</div>
          <h1 className="section-title mb-3">BLAZR Food Gallery</h1>
          <p className="text-blazr-muted text-lg">Every photo tells a story of flavour, crunch and Karachi vibes.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-blazr-dark border-b border-blazr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all capitalize ${
                  active === f ? "bg-blazr-red text-white shadow-md shadow-blazr-red/30" : "border border-blazr-border text-blazr-muted hover:border-blazr-red/50 hover:text-white"
                }`}>
                {f === "all" ? "All Photos" : f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
            {visible.map((img, i) => (
              <div key={i} onClick={() => setLightbox(img)}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer border border-blazr-border hover:border-blazr-red/40 transition-all shadow-md hover:shadow-xl hover:shadow-blazr-red/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold">{img.alt}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-2.5 border border-white/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 backdrop-blur-sm rounded-full p-2 transition-colors" onClick={() => setLightbox(null)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.src} alt={lightbox.alt}
            className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-5 text-white/60 text-sm">{lightbox.alt}</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
