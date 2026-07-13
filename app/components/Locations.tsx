const locations = [
  {
    name: "Gulshan-e-Iqbal",
    address: "Plot 14, Block 7, Gulshan-e-Iqbal",
    city: "Karachi",
    phone: "+92 21 111-BLAZE",
    hours: "11:00 AM – 2:00 AM",
    tags: ["Dine-In", "Takeaway", "Delivery"],
    icon: "🏙️",
  },
  {
    name: "Star Pines",
    address: "Shop 3, Star Pines Commercial",
    city: "Islamabad",
    phone: "+92 51 111-BLAZE",
    hours: "11:00 AM – 1:00 AM",
    tags: ["Dine-In", "Takeaway"],
    icon: "🌟",
  },
  {
    name: "Clifton",
    address: "Block 5, Clifton, Near Sea View",
    city: "Karachi",
    phone: "+92 21 222-BLAZE",
    hours: "12:00 PM – 3:00 AM",
    tags: ["Dine-In", "Takeaway", "Delivery"],
    icon: "🌊",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">
            — Find Us
          </p>
          <h2 className="section-title">Our Locations</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="card-dark p-6 space-y-4 hover:shadow-lg hover:shadow-brand-red/5 transition-all duration-300"
            >
              {/* Icon + name */}
              <div className="flex items-start gap-3">
                <div className="bg-brand-red/10 border border-brand-red/20 p-2.5 text-xl flex-shrink-0">
                  {loc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base uppercase tracking-wide">
                    {loc.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{loc.city}</p>
                </div>
              </div>

              <div className="border-t border-[#1f1f1f] pt-4 space-y-3">
                {/* Address */}
                <div className="flex gap-3">
                  <svg
                    className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">{loc.address}</span>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <svg
                    className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">{loc.phone}</span>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <svg
                    className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">{loc.hours}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {loc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 border border-[#2a2a2a] text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full btn-outline text-xs py-2 mt-2">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
