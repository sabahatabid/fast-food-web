"use client";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useToast } from "../context/ToastContext";

export default function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { showToast("Please fill all required fields", "error"); return; }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    showToast("Message sent! We'll reply within 24 hours 🔥", "success");
    setForm({ name:"", email:"", phone:"", message:"" });
  };

  return (
    <div className="page-enter min-h-screen bg-blazr-dark">
      <Navbar />

      <section className="pt-24 pb-10 bg-blazr-charcoal border-b border-blazr-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-tag mx-auto mb-3">📞 Contact</div>
          <h1 className="section-title mb-3">Get in Touch</h1>
          <p className="text-blazr-muted text-lg">Questions, feedback or just want to say hi? We&apos;re listening.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon:"📍", title:"Address",      body:"Karachi, Sindh, Pakistan\n(3 Branches)" },
                { icon:"📞", title:"Phone",        body:"021-XXXXXXX\n021-XXXXXXX" },
                { icon:"💬", title:"WhatsApp",     body:"+92 300-XXXXXXX" },
                { icon:"✉️", title:"Email",        body:"hello@blazrfood.pk" },
                { icon:"🕐", title:"Opening Hours",body:"Mon – Sun\n12:00 PM – 2:00 AM" },
              ].map((item, i) => (
                <div key={i} className="card-dark p-4 flex gap-4 group hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 bg-blazr-red/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-blazr-red/20 text-lg group-hover:bg-blazr-red/20 transition-colors">{item.icon}</div>
                  <div>
                    <div className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest">{item.title}</div>
                    <div className="text-white text-sm whitespace-pre-line mt-0.5">{item.body}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="card-dark p-4">
                <div className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest mb-3">Follow BLAZR</div>
                <div className="flex gap-2">
                  {[["FB","https://facebook.com","hover:border-blue-500 hover:text-blue-500"],
                    ["IG","https://instagram.com","hover:border-pink-500 hover:text-pink-500"],
                    ["TT","https://tiktok.com","hover:border-white hover:text-white"],
                    ["WA","https://wa.me/923001234567","hover:border-green-500 hover:text-green-500"]
                  ].map(([l,h,cls])=>(
                    <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full border border-blazr-border text-blazr-muted ${cls} flex items-center justify-center text-[10px] font-black transition-all`}>
                      {l}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp direct */}
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-sm py-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-dark p-7 rounded-2xl">
                <h2 className="font-black text-white text-lg uppercase tracking-wide mb-5">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="input-dark" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="0300-XXXXXXX" className="input-dark" type="tel" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Email *</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="input-dark" type="email" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" rows={5} className="input-dark resize-none" required />
                  </div>
                  <button type="submit" disabled={sending} className="btn-red w-full py-3.5 text-sm">
                    {sending ? "Sending..." : "Send Message 📨"}
                  </button>
                </form>

                {/* Map placeholder */}
                <div className="mt-6 bg-blazr-charcoal rounded-2xl h-44 flex items-center justify-center border border-blazr-border">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-white text-sm font-bold">Karachi, Sindh, Pakistan</p>
                    <a href="https://maps.google.com/?q=Karachi+Pakistan" target="_blank" rel="noopener noreferrer"
                      className="text-blazr-red text-xs hover:underline mt-1 block">Open in Google Maps →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all"
        aria-label="WhatsApp">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </div>
  );
}
