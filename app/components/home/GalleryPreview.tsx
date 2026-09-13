import Link from "next/link";

const imgs = [
  { src:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",  alt:"BLAZR Burger"     },
  { src:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&h=500&fit=crop",  alt:"Spicy Pepperoni"  },
  { src:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&h=500&fit=crop",  alt:"Crispy Broast"    },
  { src:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=500&fit=crop",  alt:"Club Sandwich"    },
  { src:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=500&fit=crop",  alt:"Loaded Fries"     },
  { src:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&h=500&fit=crop",     alt:"Mega Meal Deal"   },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-blazr-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-tag mx-auto mb-3">📸 Gallery</div>
          <h2 className="section-title mb-3">Made to Look Good</h2>
          <p className="text-blazr-muted text-lg">Because food that tastes this good should look the part too.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${i === 0 ? "h-48 md:h-full" : "h-36 md:h-44"}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-sm">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="btn-outline inline-block">View Full Gallery →</Link>
        </div>
      </div>
    </section>
  );
}
