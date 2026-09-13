const items = [
  "🍔 Burgers",  "🍕 Pizza",  "🍖 Broast",  "🥪 Sandwiches",
  "🍗 Chicken", "💥 Deals",  "🍟 Fries",   "⭐ Starting from Rs. 290",
  "📍 3 Karachi Branches", "🚀 25 Min Delivery",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-blazr-red border-y border-blazr-red/40 py-3 overflow-hidden relative">
      <div className="flex ticker-animate whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center text-white font-bold text-sm mx-6 uppercase tracking-widest flex-shrink-0 gap-1">
            {item}
            <span className="text-white/30 ml-5">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
