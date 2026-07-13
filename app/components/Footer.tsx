"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-brand-red px-3 py-1.5 inline-block">
              <span className="text-white font-black text-xl tracking-widest">
                BLAZE
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Flavour that hits hard. Bold food, bold attitude. We craft every
              bite to leave a mark.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  {social === "facebook" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  )}
                  {social === "instagram" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                      <circle cx="12" cy="12" r="4" strokeWidth={2} />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0} />
                    </svg>
                  )}
                  {social === "twitter" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Menu", "Deals", "Locations", "About Us", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-brand-red text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Menu categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {[
                "Burgers",
                "Wraps",
                "Pizzas",
                "Fries",
                "Drinks",
                "Deals",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href="#menu"
                    className="text-gray-500 hover:text-brand-red text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Get Updates
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe for deals, new menu items and more.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#111111] border border-[#1f1f1f] text-white placeholder-gray-600 text-sm px-3 py-2.5 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button type="submit" className="btn-red w-full text-xs py-2.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Blaze Restaurant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
