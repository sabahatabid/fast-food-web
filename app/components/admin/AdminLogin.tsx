"use client";
import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [u, setU] = useState(""); const [p, setP] = useState("");
  const [err, setErr] = useState(""); const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setErr("");
    await new Promise((r) => setTimeout(r, 800));
    if (u === "admin" && p === "blazr2024") { onLogin(); }
    else { setErr("Invalid credentials. Demo: admin / blazr2024"); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-blazr-dark flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="card-dark p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blazr-gradient rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-xl shadow-blazr-red/30">🔥</div>
            <h1 className="font-black text-white text-2xl tracking-wide">BLAZR Admin</h1>
            <p className="text-blazr-muted text-sm mt-1">Fast Food Management Panel</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Username</label>
              <input value={u} onChange={(e) => setU(e.target.value)} placeholder="admin" className="input-dark" required />
            </div>
            <div>
              <label className="text-[10px] font-bold text-blazr-muted uppercase tracking-widest block mb-1">Password</label>
              <input type="password" value={p} onChange={(e) => setP(e.target.value)} placeholder="••••••••" className="input-dark" required />
            </div>
            {err && <div className="bg-blazr-red/10 border border-blazr-red/30 rounded-xl p-3 text-blazr-red text-sm">{err}</div>}
            <button type="submit" disabled={loading} className="btn-red w-full py-3.5">
              {loading ? "Signing in..." : "Sign In 🔐"}
            </button>
          </form>
          <p className="text-center text-xs text-blazr-muted mt-4">Demo: admin / blazr2024</p>
        </div>
      </div>
    </div>
  );
}
