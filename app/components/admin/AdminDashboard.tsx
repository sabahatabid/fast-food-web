"use client";
import { useState } from "react";
import { products as initialProducts, Product, categories } from "../../data/products";

type Tab = "dashboard" | "products" | "orders" | "customers";

const mockOrders = [
  { id:"ORD-001", customer:"Zaid Mirza",     area:"DHA Phase 6",     items:"Zinger Burger x2, Loaded Fries x1", total:1370, status:"delivered",  date:"Today"     },
  { id:"ORD-002", customer:"Hira Fatima",    area:"Gulshan",         items:"Broast Family Platter x1",          total:2699, status:"preparing",   date:"Today"     },
  { id:"ORD-003", customer:"Asad Khan",      area:"Clifton",         items:"Desi Tikka Pizza x1, Fries x1",     total:1639, status:"pending",     date:"Today"     },
  { id:"ORD-004", customer:"Mahnoor Sheikh", area:"DHA",             items:"Mega Meal Deal x2",                 total:2798, status:"out",         date:"Yesterday" },
  { id:"ORD-005", customer:"Bilal Qureshi",  area:"North Nazimabad", items:"Double Beef Burger x1, Wings x1",   total:1440, status:"delivered",   date:"Yesterday" },
  { id:"ORD-006", customer:"Sara Abbasi",    area:"Gulshan",         items:"Classic BLAZR Burger x3",           total:1770, status:"cancelled",   date:"2 days ago"},
];

const statusStyles: Record<string,string> = {
  pending:   "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  preparing: "bg-blue-500/15   text-blue-400   border-blue-500/30",
  out:       "bg-purple-500/15 text-purple-400  border-purple-500/30",
  delivered: "bg-green-500/15  text-green-400  border-green-500/30",
  cancelled: "bg-red-500/15    text-blazr-red   border-red-500/30",
};
const statusLabel: Record<string,string> = {
  pending:"Pending", preparing:"Preparing", out:"Out for Delivery", delivered:"Delivered", cancelled:"Cancelled"
};

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab]       = useState<Tab>("dashboard");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editing, setEditing]   = useState<Product | null>(null);
  const [showAdd, setShowAdd]   = useState(false);
  const [draft, setDraft]       = useState<Partial<Product>>({});
  const [catFilter, setCatFilter] = useState("all");
  const [search, setSearch]     = useState("");

  const todayRevenue  = mockOrders.filter((o) => o.date==="Today" && o.status!=="cancelled").reduce((s,o)=>s+o.total,0);
  const totalRevenue  = mockOrders.filter((o) => o.status!=="cancelled").reduce((s,o)=>s+o.total,0);
  const deliveredCount = mockOrders.filter((o) => o.status==="delivered").length;

  const filteredProducts = products.filter((p) => {
    const matchCat = catFilter === "all" || p.category === catFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleDelete = (id: string) => { if (confirm("Delete this product?")) setProducts((p)=>p.filter((x)=>x.id!==id)); };
  const handleSave   = () => { if (!editing) return; setProducts((p)=>p.map((x)=>x.id===editing.id?editing:x)); setEditing(null); };
  const handleAdd    = () => {
    if (!draft.name || !draft.price) return;
    setProducts((p) => [...p, { id:`custom-${Date.now()}`, name:draft.name!, description:draft.description||"", price:Number(draft.price)||0, image:draft.image||"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop", category:draft.category||"burgers" }]);
    setDraft({}); setShowAdd(false);
  };

  const tabs: [Tab, string, string][] = [["dashboard","📊","Dashboard"],["products","🍔","Products"],["orders","📦","Orders"],["customers","👥","Customers"]];

  return (
    <div className="min-h-screen bg-blazr-dark flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-60 bg-black border-r border-blazr-border flex-col fixed h-full z-20">
        <div className="p-5 border-b border-blazr-border">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blazr-gradient rounded-xl flex items-center justify-center text-lg">🔥</div>
            <div><div className="font-black text-white text-sm tracking-widest">BLAZR</div><div className="text-[9px] text-blazr-muted tracking-widest uppercase">Admin Panel</div></div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(([id, emoji, label]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${tab===id?"bg-blazr-red text-white shadow-md shadow-blazr-red/30":"text-blazr-muted hover:bg-white/5 hover:text-white"}`}>
              <span>{emoji}</span>{label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-blazr-border">
          <button onClick={onLogout} className="w-full text-blazr-muted hover:text-blazr-red text-sm font-bold uppercase tracking-widest py-2 px-4 rounded-xl hover:bg-blazr-red/10 transition-all text-left">
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 md:ml-60">
        {/* Top bar */}
        <div className="bg-black border-b border-blazr-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-black text-white text-lg uppercase tracking-widest">{tab}</h1>
          <div className="flex items-center gap-3">
            <span className="text-blazr-muted text-sm hidden sm:block">Welcome, Admin 🔥</span>
            <button onClick={onLogout} className="md:hidden text-blazr-muted hover:text-blazr-red text-sm">🚪</button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden bg-black px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide border-b border-blazr-border">
          {tabs.map(([id, emoji, label]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${tab===id?"bg-blazr-red text-white":"border border-blazr-border text-blazr-muted"}`}>
              {emoji} {label}
            </button>
          ))}
        </div>

        <div className="p-6">

          {/* ── DASHBOARD ── */}
          {tab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label:"Today's Revenue",  val:`Rs. ${todayRevenue.toLocaleString()}`, icon:"💰", color:"border-blazr-amber/30 bg-blazr-amber/5"  },
                  { label:"Total Revenue",    val:`Rs. ${totalRevenue.toLocaleString()}`, icon:"📈", color:"border-green-500/30  bg-green-500/5"       },
                  { label:"Total Orders",     val:mockOrders.length,                      icon:"📦", color:"border-blazr-red/30  bg-blazr-red/5"       },
                  { label:"Delivered",        val:deliveredCount,                         icon:"✅", color:"border-blue-500/30   bg-blue-500/5"         },
                ].map((s,i)=>(
                  <div key={i} className={`card-dark p-5 border ${s.color}`}>
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-2xl font-black text-white">{s.val}</div>
                    <div className="text-[10px] text-blazr-muted uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="card-dark p-5 rounded-2xl">
                <h2 className="font-black text-white text-sm uppercase tracking-widest mb-4">Recent Orders</h2>
                <div className="space-y-2">
                  {mockOrders.slice(0,5).map((o)=>(
                    <div key={o.id} className="flex items-center gap-3 py-2 border-b border-blazr-border last:border-0">
                      <div className="text-xs font-mono text-blazr-muted w-20 flex-shrink-0">{o.id}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-bold truncate">{o.customer}</div>
                        <div className="text-blazr-muted text-xs truncate">{o.items}</div>
                      </div>
                      <div className="text-blazr-amber font-black text-sm flex-shrink-0">Rs. {o.total.toLocaleString()}</div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${statusStyles[o.status]}`}>{statusLabel[o.status]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── PRODUCTS ── */}
          {tab === "products" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <input placeholder="Search products..." value={search} onChange={(e)=>setSearch(e.target.value)} className="input-dark flex-1 min-w-[180px]" />
                <select value={catFilter} onChange={(e)=>setCatFilter(e.target.value)} className="input-dark w-44">
                  <option value="all">All Categories</option>
                  {categories.slice(1).map((c)=><option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
                <button onClick={()=>setShowAdd(true)} className="btn-red py-2.5 px-5 text-xs flex-shrink-0">+ Add Product</button>
              </div>

              {showAdd && (
                <div className="card-dark p-5 rounded-2xl border border-blazr-red/30">
                  <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Add New Product</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input placeholder="Product Name *" value={draft.name||""} onChange={(e)=>setDraft(d=>({...d,name:e.target.value}))} className="input-dark" />
                    <input placeholder="Price (Rs.) *" type="number" value={draft.price||""} onChange={(e)=>setDraft(d=>({...d,price:Number(e.target.value)}))} className="input-dark" />
                    <textarea placeholder="Description" value={draft.description||""} onChange={(e)=>setDraft(d=>({...d,description:e.target.value}))} className="input-dark resize-none sm:col-span-2" rows={2} />
                    <select value={draft.category||""} onChange={(e)=>setDraft(d=>({...d,category:e.target.value}))} className="input-dark">
                      <option value="">Select Category</option>
                      {categories.slice(1).map((c)=><option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                    <input placeholder="Image URL" value={draft.image||""} onChange={(e)=>setDraft(d=>({...d,image:e.target.value}))} className="input-dark" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button onClick={handleAdd} className="btn-red py-2 px-5 text-xs">Save Product</button>
                    <button onClick={()=>{setShowAdd(false);setDraft({})}} className="btn-ghost py-2 px-5 text-xs">Cancel</button>
                  </div>
                </div>
              )}

              <p className="text-blazr-muted text-xs">{filteredProducts.length} products</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((prod)=>(
                  <div key={prod.id} className="card-dark overflow-hidden rounded-2xl">
                    {editing?.id === prod.id ? (
                      <div className="p-4 space-y-2">
                        <input value={editing.name} onChange={(e)=>setEditing({...editing,name:e.target.value})} className="input-dark text-sm" />
                        <input type="number" value={editing.price} onChange={(e)=>setEditing({...editing,price:Number(e.target.value)})} className="input-dark text-sm" />
                        <textarea value={editing.description} onChange={(e)=>setEditing({...editing,description:e.target.value})} className="input-dark text-sm resize-none" rows={2} />
                        <input value={editing.image} onChange={(e)=>setEditing({...editing,image:e.target.value})} placeholder="Image URL" className="input-dark text-sm" />
                        <div className="flex gap-2">
                          <button onClick={handleSave} className="btn-red py-1.5 px-4 text-xs">Save</button>
                          <button onClick={()=>setEditing(null)} className="btn-ghost py-1.5 px-4 text-xs">Cancel</button>
                        </div>
                      </div>
                    ):(
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={prod.image} alt={prod.name} className="w-full h-32 object-cover"
                          onError={(e)=>{(e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop";}} />
                        <div className="p-3">
                          <h4 className="font-bold text-white text-sm truncate">{prod.name}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-blazr-amber font-black text-sm">Rs. {prod.price.toLocaleString()}</span>
                            <span className="text-[9px] text-blazr-muted bg-blazr-charcoal px-2 py-0.5 rounded-full uppercase">{prod.category}</span>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <button onClick={()=>setEditing(prod)} className="flex-1 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg py-1.5 text-xs font-bold transition-colors">✏️ Edit</button>
                            <button onClick={()=>handleDelete(prod.id)} className="flex-1 bg-blazr-red/10 text-blazr-red hover:bg-blazr-red/20 rounded-lg py-1.5 text-xs font-bold transition-colors">🗑 Del</button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── ORDERS ── */}
          {tab === "orders" && (
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {["All","Pending","Preparing","Out for Delivery","Delivered","Cancelled"].map((s)=>(
                  <button key={s} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blazr-border text-blazr-muted hover:border-blazr-red hover:text-blazr-red transition-all">{s}</button>
                ))}
              </div>
              <div className="card-dark rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blazr-charcoal border-b border-blazr-border">
                      <tr>{["Order ID","Customer","Area","Items","Total","Status","Date"].map((h)=>(
                        <th key={h} className="text-left px-4 py-3 text-[10px] font-black text-blazr-muted uppercase tracking-widest whitespace-nowrap">{h}</th>
                      ))}</tr>
                    </thead>
                    <tbody className="divide-y divide-blazr-border">
                      {mockOrders.map((o)=>(
                        <tr key={o.id} className="hover:bg-white/3 transition-colors">
                          <td className="px-4 py-3 text-xs font-mono text-blazr-muted">{o.id}</td>
                          <td className="px-4 py-3 font-bold text-white whitespace-nowrap">{o.customer}</td>
                          <td className="px-4 py-3 text-blazr-muted text-xs">{o.area}</td>
                          <td className="px-4 py-3 text-blazr-muted text-xs max-w-[160px] truncate">{o.items}</td>
                          <td className="px-4 py-3 font-black text-blazr-amber whitespace-nowrap">Rs. {o.total.toLocaleString()}</td>
                          <td className="px-4 py-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusStyles[o.status]}`}>{statusLabel[o.status]}</span>
                          </td>
                          <td className="px-4 py-3 text-blazr-muted text-xs">{o.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── CUSTOMERS ── */}
          {tab === "customers" && (
            <div className="card-dark p-5 rounded-2xl">
              <h2 className="font-black text-white text-sm uppercase tracking-widest mb-4">Customer List</h2>
              <div className="space-y-2">
                {[
                  { name:"Zaid Mirza",     phone:"0300-XXXXXXX", area:"DHA Phase 6",     orders:8,  spent:9200  },
                  { name:"Hira Fatima",    phone:"0321-XXXXXXX", area:"Gulshan-e-Iqbal", orders:5,  spent:6800  },
                  { name:"Asad Khan",      phone:"0333-XXXXXXX", area:"Clifton",          orders:12, spent:14300 },
                  { name:"Mahnoor Sheikh", phone:"0312-XXXXXXX", area:"DHA",              orders:3,  spent:4100  },
                  { name:"Bilal Qureshi",  phone:"0345-XXXXXXX", area:"North Nazimabad",  orders:6,  spent:7200  },
                ].map((c,i)=>(
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/3 transition-colors border border-transparent hover:border-blazr-border">
                    <div className="w-10 h-10 bg-blazr-red/15 rounded-full flex items-center justify-center text-blazr-red font-black flex-shrink-0">
                      {c.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm">{c.name}</div>
                      <div className="text-blazr-muted text-xs">{c.phone} · {c.area}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-blazr-muted text-xs">{c.orders} orders</div>
                      <div className="text-blazr-amber font-black text-sm">Rs. {c.spent.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
