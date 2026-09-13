"use client";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const delivery = items.length > 0 ? 100 : 0;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={() => setIsOpen(false)} />}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-blazr-card border-l border-blazr-border z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-blazr-border">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h2 className="font-black text-white text-lg tracking-wide">Your Cart</h2>
            {items.length > 0 && <span className="bg-blazr-red text-white text-xs px-2 py-0.5 rounded-full font-bold">{items.length}</span>}
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-white/5 text-blazr-muted hover:text-white transition-all">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
              <div className="text-6xl">🍔</div>
              <p className="text-blazr-muted font-semibold">Your cart is empty</p>
              <p className="text-sm text-blazr-muted/60">Add something delicious!</p>
              <button onClick={() => setIsOpen(false)} className="btn-red text-sm py-2 px-5">Browse Menu</button>
            </div>
          ) : items.map((item) => (
            <div key={item.id} className="flex gap-3 bg-blazr-charcoal rounded-2xl p-3 border border-blazr-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-white truncate">{item.name}</p>
                <p className="text-blazr-amber font-black text-sm">Rs. {item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 rounded-full bg-blazr-red/20 text-blazr-red hover:bg-blazr-red hover:text-white text-xs font-bold transition-all flex items-center justify-center">−</button>
                  <span className="text-white text-xs font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 rounded-full bg-blazr-red/20 text-blazr-red hover:bg-blazr-red hover:text-white text-xs font-bold transition-all flex items-center justify-center">+</button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeItem(item.id)} className="text-blazr-muted hover:text-blazr-red transition-colors text-xs">✕</button>
                <span className="text-white font-bold text-sm">Rs. {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-blazr-border space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm"><span className="text-blazr-muted">Subtotal</span><span className="text-white font-semibold">Rs. {totalPrice.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-blazr-muted">Delivery</span><span className="text-white font-semibold">Rs. {delivery}</span></div>
              <div className="flex justify-between font-black text-base border-t border-blazr-border pt-2">
                <span className="text-white">Total</span>
                <span className="text-blazr-amber">Rs. {(totalPrice + delivery).toLocaleString()}</span>
              </div>
            </div>
            <Link href="/order" onClick={() => setIsOpen(false)} className="btn-red w-full block text-center">Checkout</Link>
            <button onClick={() => setIsOpen(false)} className="btn-ghost w-full text-center text-xs">Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
