export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tag?: "bestseller" | "new" | "popular" | "spicy" | "deal";
  isVeg?: boolean;
}

export const categories = [
  { id: "all",       label: "All",        emoji: "🔥" },
  { id: "burgers",   label: "Burgers",    emoji: "🍔" },
  { id: "chicken",   label: "Chicken",    emoji: "🍗" },
  { id: "pizza",     label: "Pizza",      emoji: "🍕" },
  { id: "sandwiches",label: "Sandwiches", emoji: "🥪" },
  { id: "broast",    label: "Broast",     emoji: "🍖" },
  { id: "sides",     label: "Sides",      emoji: "🍟" },
  { id: "deals",     label: "Deals",      emoji: "💥" },
];

export const products: Product[] = [
  // ── BURGERS ──
  {
    id: "b1",
    name: "Classic BLAZR Burger",
    description: "Juicy beef patty, fresh lettuce, tomato, pickles and BLAZR's signature sauce in a toasted brioche bun.",
    price: 590,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    category: "burgers",
    tag: "popular",
  },
  {
    id: "b2",
    name: "Zinger Burger",
    description: "Crispy spiced chicken fillet, coleslaw, jalapeños and zesty mayo — Karachi's all-time favourite.",
    price: 690,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=400&fit=crop",
    category: "burgers",
    tag: "bestseller",
  },
  {
    id: "b3",
    name: "Double Beef Burger",
    description: "Two flame-grilled beef patties, double cheese, caramelised onions and smoky BBQ sauce.",
    price: 890,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=400&fit=crop",
    category: "burgers",
    tag: "popular",
  },
  {
    id: "b4",
    name: "Crispy Chicken Burger",
    description: "Golden-fried crispy chicken breast, shredded lettuce, creamy garlic sauce in a soft sesame bun.",
    price: 650,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500&h=400&fit=crop",
    category: "burgers",
    tag: "new",
  },
  // ── CHICKEN ──
  {
    id: "c1",
    name: "Crispy Chicken",
    description: "Hand-battered, twice-fried golden crispy chicken — marinated in secret BLAZR spices for 12 hours.",
    price: 790,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop",
    category: "chicken",
    tag: "bestseller",
  },
  {
    id: "c2",
    name: "Chicken Strips",
    description: "Tender strips of premium chicken breast, breaded and fried crisp. Served with dipping sauce.",
    price: 590,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&h=400&fit=crop",
    category: "chicken",
    tag: "popular",
  },
  {
    id: "c3",
    name: "Chicken Wings",
    description: "Flame-kissed wings tossed in BLAZR's fiery hot sauce. Crispy outside, tender and juicy inside.",
    price: 550,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&h=400&fit=crop",
    category: "chicken",
    tag: "spicy",
  },
  {
    id: "c4",
    name: "Spicy Chicken Pieces",
    description: "Bone-in chicken pieces marinated in Karachi-style spicy masala, fried golden and served hot.",
    price: 690,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&h=400&fit=crop",
    category: "chicken",
    tag: "spicy",
  },
  // ── PIZZA ──
  {
    id: "p1",
    name: "BLAZR Spicy Pepperoni",
    description: "Premium hand-stretched dough loaded with tangy tomato sauce, mozzarella and fiery spiced pepperoni. Bold. Cheesy. Unbeatable.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&h=400&fit=crop",
    category: "pizza",
    tag: "bestseller",
  },
  {
    id: "p2",
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ base, shredded chicken, caramelised onions, capsicum and a double layer of melted cheese.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop",
    category: "pizza",
    tag: "popular",
  },
  {
    id: "p3",
    name: "Desi Tikka Pizza",
    description: "Karachi's own pizza — spicy tikka chicken, tangy green chutney base, roasted peppers, fresh tomatoes and generous layers of mozzarella. A desi masterpiece.",
    price: 1349,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
    category: "pizza",
    tag: "new",
  },
  // ── SANDWICHES ──
  {
    id: "s1",
    name: "Club Sandwich",
    description: "Triple-layer toasted bread stacked with chicken, egg, fresh veggies and BLAZR's creamy mayo. Karachi classic, done right.",
    price: 590,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop",
    category: "sandwiches",
    tag: "popular",
  },
  {
    id: "s2",
    name: "Crispy Chicken Sub",
    description: "Toasted foot-long sub roll loaded with crispy chicken, shredded lettuce, tomatoes and signature garlic sauce.",
    price: 650,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&h=400&fit=crop",
    category: "sandwiches",
    tag: "bestseller",
  },
  {
    id: "s3",
    name: "Beef Steak Sandwich",
    description: "Tender grilled beef steak slices in a warm ciabatta with caramelised onions, mushrooms and rich steak sauce.",
    price: 890,
    image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=500&h=400&fit=crop",
    category: "sandwiches",
    tag: "popular",
  },
  // ── BROAST ──
  {
    id: "br1",
    name: "Half Broast",
    description: "Premium half chicken marinated overnight in secret broast spice blend, pressure-fried golden and crispy. Served with naan and mint chutney.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&h=400&fit=crop",
    category: "broast",
    tag: "bestseller",
  },
  {
    id: "br2",
    name: "4 Pieces Broast",
    description: "4 generous pieces of BLAZR's signature broast chicken — crispy coating, juicy inside. A Karachi staple.",
    price: 790,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop",
    category: "broast",
    tag: "popular",
  },
  {
    id: "br3",
    name: "Broast Family Platter",
    description: "The ultimate Karachi family feast — 8 pieces crispy broast chicken, fresh naan, seasoned fries, garlic dip, mint chutney and raita. Feeds 4–5.",
    price: 2699,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&h=400&fit=crop",
    category: "broast",
    tag: "deal",
  },
  // ── SIDES ──
  {
    id: "si1",
    name: "Loaded Fries",
    description: "Crispy fries smothered in melted cheese sauce, crispy chicken bits and BLAZR's signature spice blend.",
    price: 490,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop",
    category: "sides",
    tag: "bestseller",
  },
  {
    id: "si2",
    name: "Regular Fries",
    description: "Golden, crispy, perfectly salted fries — the perfect companion to any BLAZR meal.",
    price: 290,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&h=400&fit=crop",
    category: "sides",
  },
  {
    id: "si3",
    name: "Cheese Fries",
    description: "Classic fries generously covered in warm, gooey cheese sauce. Simple. Satisfying. Addictive.",
    price: 450,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&h=400&fit=crop",
    category: "sides",
    tag: "popular",
  },
  {
    id: "si4",
    name: "Chicken Nuggets",
    description: "Bite-sized golden nuggets of tender chicken breast, crunchy outside and soft inside. Served with sweet chilli dip.",
    price: 520,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&h=400&fit=crop",
    category: "sides",
    tag: "popular",
  },
  // ── DEALS ──
  {
    id: "d1",
    name: "Mega Meal Deal",
    description: "BLAZR Zinger Burger + 4 Pieces Broast + Large Fries + 500ml Drink. Everything you need in one legendary meal.",
    price: 1399,
    originalPrice: 1699,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&h=400&fit=crop",
    category: "deals",
    tag: "deal",
  },
  {
    id: "d2",
    name: "Family Feast Deal",
    description: "Half Broast + Classic Burger + Crispy Chicken Sub + Loaded Fries + Cheese Fries + 2 Drinks. Perfect for the family.",
    price: 2999,
    originalPrice: 3799,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    category: "deals",
    tag: "deal",
  },
  {
    id: "d3",
    name: "BLAZR Combo Deal",
    description: "Double Beef Burger + Chicken Wings (4 pcs) + Regular Fries + Drink. Built for the serious food lover.",
    price: 1599,
    originalPrice: 2030,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=400&fit=crop",
    category: "deals",
    tag: "deal",
  },
];

export const tagConfig = {
  bestseller: { label: "Best Seller",  bg: "bg-blazr-red",    text: "text-white" },
  new:        { label: "New",          bg: "bg-green-600",    text: "text-white" },
  popular:    { label: "Popular",      bg: "bg-blazr-amber",  text: "text-blazr-dark" },
  spicy:      { label: "🌶 Spicy",     bg: "bg-orange-600",   text: "text-white" },
  deal:       { label: "💥 Deal",      bg: "bg-blazr-gold",   text: "text-blazr-dark" },
};

export const bestSellers = products.filter((p) => p.tag === "bestseller");
export const deals = products.filter((p) => p.category === "deals");

export const reviews = [
  { id: "1", name: "Zaid Mirza",      city: "DHA Phase 6",     rating: 5, comment: "BLAZR's zinger is hands down the best in Karachi. The spice level is perfect and delivery was super fast!", avatar: "Z", date: "2 days ago" },
  { id: "2", name: "Hira Fatima",     city: "Gulshan-e-Iqbal", rating: 5, comment: "Ordered the Broast Family Platter for a family dinner — everyone was speechless. The naan and dips made it perfect.", avatar: "H", date: "5 days ago" },
  { id: "3", name: "Asad Khan",       city: "Clifton",         rating: 5, comment: "The Desi Tikka Pizza is INSANE. Never thought tikka + pizza would work but BLAZR nailed it. Very Karachi!", avatar: "A", date: "1 week ago" },
  { id: "4", name: "Mahnoor Sheikh",  city: "DHA",             rating: 5, comment: "I order from BLAZR every Friday night. Loaded Fries + Zinger Burger is my go-to. Never disappoints.", avatar: "M", date: "1 week ago" },
  { id: "5", name: "Bilal Qureshi",   city: "Clifton",         rating: 4, comment: "Premium taste, great packaging and fast delivery. BLAZR is the real deal in Karachi fast food.", avatar: "B", date: "2 weeks ago" },
  { id: "6", name: "Sara Abbasi",     city: "Gulshan",         rating: 5, comment: "Late-night cravings sorted by BLAZR! Got the Mega Meal Deal and saved Rs. 300. Absolutely worth it.", avatar: "S", date: "2 weeks ago" },
];

export const locations = [
  {
    name: "Gulshan-e-Iqbal",
    address: "Main University Road, Gulshan-e-Iqbal, Karachi, Sindh",
    phone: "021-XXXXXXX",
    hours: "12:00 PM – 2:00 AM",
    delivery: "20–30 min",
    emoji: "📍",
  },
  {
    name: "DHA Phase 6",
    address: "Khayaban-e-Ittehad, DHA Phase 6, Karachi, Sindh",
    phone: "021-XXXXXXX",
    hours: "12:00 PM – 2:00 AM",
    delivery: "25–35 min",
    emoji: "📍",
  },
  {
    name: "Clifton",
    address: "Block 5, Clifton, Karachi, Sindh, Pakistan",
    phone: "021-XXXXXXX",
    hours: "12:00 PM – 2:00 AM",
    delivery: "25–35 min",
    emoji: "📍",
  },
];
