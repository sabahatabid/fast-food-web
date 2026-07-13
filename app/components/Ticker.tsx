const items = [
  "🔥 Double Smash Burger",
  "🍟 Loaded Fries",
  "🍕 BBQ Chicken Pizza",
  "🌯 Crispy Chicken Wrap",
  "🔥 Family Meal Deal",
  "🍔 The Triple Stack",
  "🌶️ Spicy Zinger",
  "🍟 Cheesy Fries",
  "🔥 Mega Meal Deal",
  "🍕 Blackened Pepperoni",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand-red py-3 overflow-hidden border-y border-red-700">
      <div className="ticker-animate flex whitespace-nowrap gap-12">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest flex-shrink-0"
          >
            {item}
            <span className="mx-6 text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
