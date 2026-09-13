"use client";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

type DeliveryType = "delivery" | "pickup";
type PaymentType  = "cod" | "jazzcash" | "easypaisa";

const karachiAreas = [
  "Gulshan-e-Iqbal","DHA Phase 1","DHA Phase 2","DHA Phase 4","DHA Phase 6",
  "Clifton","Defence","Saddar","Nazimabad","North Nazimabad","Liaquatabad",
  "FB Area","Malir","Korangi","Landhi","Shah Faisal Colony","Bahria Town",
];

export default function OrderPage() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const { showToast } = useToast();
  const [delivery, setDelivery] = useState<DeliveryType>("delivery");
  const [payment,  setPayment]  = useState<PaymentType>("cod");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", whatsapp: "", address: "", area: "", instructions: ""
  });

  const deliveryFee  = delivery === "delivery" ? 100 : 0;
  const grandTotal   = totalPrice + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name || !form.phone) { showToast("Please enter your name and phone number", "error"); return false; }
    if (delivery === "delivery" && (!form.address || !form.area)) { showToast("Please enter delivery address and area", "error"); return false; }
    if (items.length === 0) { showToast("Your cart is empty!", "error"); return false; }
    return true;
  };

  const buildWAMessage = () => {
    const lines = items.map((i) => `  • ${i.name} x${i.quantity} = Rs. ${(i.price * i.quantity).toLocaleString()}`).join("\n");
    return encodeURIComponent(
      `🔥 *New Order — BLAZR Fast Food*\n\n` +
      `👤 *Customer:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      (form.whatsapp ? `💬 *WhatsApp:* ${form.whatsapp}\n` : "") +
      `📦 *Order Type:* ${delivery === "delivery" ? "Home Delivery" : "Self Pickup"}\n` +
      (delivery === "delivery" ? `📍 *Address:* ${form.address}, ${form.area}, Karachi\n` : "") +
      `💳 *Payment:* ${payment === "cod" ? "Cash on Delivery" : payment === "jazzcash" ? "JazzCash" : "Easypaisa"}\n\n` +
      `🍔 *Order Items:*\n${lines}\n\n` +
      `💰 *Subtotal:*  Rs. ${totalPrice.toLocaleString()}\n` +
      `🚴 *Delivery:*  Rs. ${deliveryFee}\n` +
      `✅ *Grand Total: Rs. ${grandTotal.toLocaleString()}*\n\n` +
      (form.instructions ? `📝 *Instructions:* ${form.instructions}` : "")
    );
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/923001234567?text=${buildWAMessage()}`, "_blank");
    setSubmitted(true);
    showToast("Order sent via WhatsApp! 🎉", "success");
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;
    setSubmitted(true);
    showToast("Order placed successfully! We'll confirm shortly 🔥", "success");
  };

  if (submitted) return (
    <div className="min-h-screen bg-blazr-dark flex items-center justify-center px-4">
      <Navbar />
      <div className="text-center mt-20">
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="section-title mb-4">Order Placed!</h1>
        <p className="text-blazr-muted text-lg mb-8">We&apos;ll confirm your order shortly. Get ready for BLAZR!</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={() => { setSubmitted(false); clearCart(); }} className="btn-red">New Order</button>
          <a href="/" className="btn-ghost">Go Home</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 bg-blazr-charcoal border-b border-blazr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag mx-auto mb-3">🛒 Checkout</div>
          <h1 className="section-title mb-2">Complete Your Order</h1>
          <p className="text-blazr-muted">Fill in your details and we&apos;ll get cooking!</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* ── LEFT: Form ── */}
            <div className="lg:col-span-3 space-y-5">

              {/* Order type */}
              <div className="card-dark p-6">
                <h2 className="font-black text-white text-base uppercase tracking-wide mb-4">📦 Order Type</h2>
                <div className="grid grid-cols-2 gap-3">
                  {([["delivery","🚴","Home Delivery","Rs. 100 fee"],["pickup","🏪","Self Pickup","Free"]] as const).map(([v,e,l,n])=>(
                    <button key={v} onClick={() => setDelivery(v)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${delivery===v?"border-blazr-red bg-blazr-red/10":"border-blazr-border hover:border-blazr-red/40"}`}>
                      <div className="text-2xl mb-1">{e}</div>
                      <div className="font-bold text-white text-sm">{l}</div>
                      <div className="text-xs text-blazr-muted">{n}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer details */}
              <div className="card-dark p-6">
                <h2 className="font-black text-white text-base uppercase tracking-wide mb-4">👤 Your Details</h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="input-dark" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="0300-1234567" className="input-dark" type="tel" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">WhatsApp Number</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="0300-1234567 (if different)" className="input-dark" type="tel" />
                  </div>
                  {delivery === "delivery" && (
                    <>
                      <div>
                        <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Delivery Address *</label>
                        <input name="address" value={form.address} onChange={handleChange} placeholder="House/Flat No, Street, Block" className="input-dark" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Karachi Area *</label>
                        <select name="area" value={form.area} onChange={handleChange} className="input-dark">
                          <option value="">Select your area</option>
                          {karachiAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                        </select>
                      </div>
                    </>
                  )}
                  <div>
                    <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Additional Instructions</label>
                    <textarea name="instructions" value={form.instructions} onChange={handleChange}
                      placeholder="Extra spicy? No onions? Let us know..." rows={3} className="input-dark resize-none" />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="card-dark p-6">
                <h2 className="font-black text-white text-base uppercase tracking-wide mb-4">💳 Payment Method</h2>
                <div className="space-y-2.5">
                  {([
                    ["cod","💵","Cash on Delivery","Pay when you receive your order",""],
                    ["jazzcash","📱","JazzCash","Pay via JazzCash mobile wallet","UI Ready"],
                    ["easypaisa","💚","Easypaisa","Pay via Easypaisa mobile wallet","UI Ready"],
                  ] as const).map(([v,e,l,d,badge])=>(
                    <label key={v} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${payment===v?"border-blazr-red bg-blazr-red/10":"border-blazr-border hover:border-blazr-red/40"}`}>
                      <input type="radio" name="payment" value={v} checked={payment===v} onChange={()=>setPayment(v)} className="accent-blazr-red" />
                      <span className="text-2xl">{e}</span>
                      <div className="flex-1">
                        <div className="font-bold text-white text-sm">{l}</div>
                        <div className="text-xs text-blazr-muted">{d}</div>
                      </div>
                      {badge && <span className="text-[10px] bg-blazr-amber/20 text-blazr-amber px-2 py-0.5 rounded-full font-bold">{badge}</span>}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Summary ── */}
            <div className="lg:col-span-2">
              <div className="card-dark p-6 sticky top-24">
                <h2 className="font-black text-white text-base uppercase tracking-wide mb-4">🧾 Order Summary</h2>

                {items.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-3">🍔</div>
                    <p className="text-blazr-muted text-sm">Your cart is empty</p>
                    <a href="/menu" className="btn-red mt-4 text-sm inline-block py-2 px-5">Browse Menu</a>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-1 mb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3 items-center bg-blazr-charcoal rounded-xl p-2.5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">{item.name}</p>
                            <p className="text-blazr-amber text-xs font-black">Rs. {item.price.toLocaleString()}</p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-blazr-red/20 text-blazr-red hover:bg-blazr-red hover:text-white text-xs font-bold transition-all flex items-center justify-center">−</button>
                            <span className="text-white text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-blazr-red/20 text-blazr-red hover:bg-blazr-red hover:text-white text-xs font-bold transition-all flex items-center justify-center">+</button>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-blazr-muted hover:text-blazr-red transition-colors ml-1 text-xs">✕</button>
                        </div>
                      ))}
                    </div>

                    {/* Totals */}
                    <div className="space-y-1.5 border-t border-blazr-border pt-4 mb-4">
                      <div className="flex justify-between text-sm"><span className="text-blazr-muted">Subtotal</span><span className="text-white font-semibold">Rs. {totalPrice.toLocaleString()}</span></div>
                      <div className="flex justify-between text-sm">
                        <span className="text-blazr-muted">Delivery</span>
                        <span className={`font-semibold ${deliveryFee === 0 ? "text-green-400" : "text-white"}`}>{deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}</span>
                      </div>
                      <div className="flex justify-between font-black text-lg border-t border-blazr-border pt-2">
                        <span className="text-white">Grand Total</span>
                        <span className="text-blazr-amber">Rs. {grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2.5">
                      <button onClick={handleWhatsApp} className="btn-whatsapp w-full text-sm py-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Order via WhatsApp
                      </button>
                      <button onClick={handlePlaceOrder} className="btn-red w-full text-sm py-3">Place Order</button>
                      <button onClick={clearCart} className="w-full text-xs text-blazr-muted hover:text-blazr-red transition-colors py-1">Clear Cart</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
