"use client";

import { useState } from "react";

const categories = ["All", "Burgers", "Fries", "Wraps", "Pizza", "Deals", "Drinks"];

interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
  tagColor?: string;
  rating: number;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Double Smash Burger",
    price: "Rs. 899",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    tag: "Popular",
    tagColor: "bg-brand-red",
    rating: 5,
    popular: true,
  },
  {
    id: 2,
    name: "Crispy Chicken",
    price: "Rs. 799",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 3,
    name: "Crispy Chicken Wrap",
    price: "Rs. 749",
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
    tag: "New",
    tagColor: "bg-green-600",
    rating: 4,
  },
  {
    id: 4,
    name: "The Triple Stack",
    price: "Rs. 1,099",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop",
    tag: "Special",
    tagColor: "bg-amber-600",
    rating: 5,
    popular: true,
  },
  {
    id: 5,
    name: "Loaded Cheesy Fries",
    price: "Rs. 449",
    category: "Fries",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 6,
    name: "Onion Rings",
    price: "Rs. 349",
    category: "Fries",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 7,
    name: "Zinger Meal",
    price: "Rs. 999",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
    tag: "Deal",
    tagColor: "bg-brand-red",
    rating: 5,
    popular: true,
  },
  {
    id: 8,
    name: "Family Feast",
    price: "Rs. 3,499",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    tag: "Family",
    tagColor: "bg-amber-600",
    rating: 5,
  },
  {
    id: 9,
    name: "Blackened Pepperoni",
    price: "Rs. 1,549",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    tag: "Hot",
    tagColor: "bg-orange-600",
    rating: 4,
  },
  {
    id: 10,
    name: "BBQ Chicken Pizza",
    price: "Rs. 1,399",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    tag: "Popular",
    tagColor: "bg-brand-red",
    rating: 5,
    popular: true,
  },
  {
    id: 11,
    name: "Mega Chicken Pizza",
    price: "Rs. 1,299",
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 12,
    name: "Club Sandwich",
    price: "Rs. 699",
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop",
    rating: 4,
  },
  {
    id: 13,
    name: "Beef Steak Sandwich",
    price: "Rs. 849",
    category: "Wraps",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop",
    tag: "New",
    tagColor: "bg-green-600",
    rating: 4,
  },
  {
    id: 14,
    name: "Fried Chicken Feast",
    price: "Rs. 1,199",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop",
    rating: 5,
    popular: true,
  },
  {
    id: 15,
    name: "Smoky Chicken Platter",
    price: "Rs. 789",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop",
    tag: "Deal",
    tagColor: "bg-brand-red",
    rating: 4,
  },
  {
    id: 16,
    name: "Dragon Twister Platter",
    price: "Rs. 2,499",
    category: "Deals",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    tag: "Special",
    tagColor: "bg-amber-600",
    rating: 5,
  },
  {
    id: 17,
    name: "Coca-Cola",
    price: "Rs. 120",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
    tag: "Cold",
    tagColor: "bg-red-700",
    rating: 5,
    popular: true,
  },
  {
    id: 18,
    name: "Sprite",
    price: "Rs. 120",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop",
    tag: "Cold",
    tagColor: "bg-green-700",
    rating: 4,
  },
  {
    id: 19,
    name: "Pepsi",
    price: "Rs. 120",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop",
    tag: "Cold",
    tagColor: "bg-blue-700",
    rating: 4,
  },
  {
    id: 20,
    name: "Slice Juice",
    price: "Rs. 120",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop",
    tag: "Cold",
    tagColor: "bg-yellow-600",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= rating ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="card-dark group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Tag */}
        {item.tag && (
          <span className={`menu-tag ${item.tagColor} text-white`}>{item.tag}</span>
        )}

        {/* Add button */}
        <button
          className="absolute bottom-3 right-3 bg-brand-red text-white w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700"
          aria-label={`Add ${item.name} to cart`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-brand-red transition-colors">
            {item.name}
          </h3>
          <StarRating rating={item.rating} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-brand-red font-bold text-sm">{item.price}</span>
          {item.popular && (
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">🔥 trending</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">
              — What We Serve
            </p>
            <h2 className="section-title">Our Menu</h2>
          </div>
          <button className="btn-red self-start sm:self-auto">View Full Menu</button>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-150 border ${
                activeCategory === cat
                  ? "bg-brand-red border-brand-red text-white"
                  : "bg-transparent border-[#1f1f1f] text-gray-400 hover:border-brand-red hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
