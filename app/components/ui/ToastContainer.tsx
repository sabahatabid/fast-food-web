"use client";
import { useToast } from "../../context/ToastContext";

const cfg = {
  success: { icon: "✅", border: "border-green-500",  bg: "bg-green-500/10"  },
  error:   { icon: "❌", border: "border-blazr-red",  bg: "bg-blazr-red/10"  },
  info:    { icon: "ℹ️", border: "border-blue-500",   bg: "bg-blue-500/10"   },
  warning: { icon: "⚠️", border: "border-blazr-amber",bg: "bg-blazr-amber/10"},
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return (
    <div className="fixed bottom-6 right-4 z-[200] space-y-2 pointer-events-none max-w-[90vw]">
      {toasts.map((t) => (
        <div key={t.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-l-4 shadow-2xl glass-dark pointer-events-auto toast-enter ${cfg[t.type].border} ${cfg[t.type].bg}`}>
          <span className="text-base">{cfg[t.type].icon}</span>
          <p className="text-sm font-medium text-white flex-1">{t.message}</p>
          <button onClick={() => removeToast(t.id)} className="text-blazr-muted hover:text-white ml-1 transition-colors">✕</button>
        </div>
      ))}
    </div>
  );
}
