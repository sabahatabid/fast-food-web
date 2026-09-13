"use client";
import { useState } from "react";
import { reviews } from "../../data/products";

const avatarColors = ["bg-blazr-red","bg-blazr-orange","bg-blazr-amber","bg-purple-500","bg-blue-500","bg-green-500"];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < n ? "text-blazr-amber fill-blazr-amber" : "text-blazr-border fill-blazr-border"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-16 md:py-24 bg-blazr-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-tag mx-auto mb-3">💬 Real Reviews</div>
          <h2 className="section-title mb-3">What Karachi Says</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Stars n={5} />
            <span className="text-2xl font-black text-white ml-1">4.9</span>
            <span className="text-blazr-muted text-sm">(1,200+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((r, i) => (
            <div key={r.id} className="card-dark p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm">{r.name}</div>
                  <div className="text-[10px] text-blazr-muted">📍 {r.city} • {r.date}</div>
                </div>
                <Stars n={r.rating} />
              </div>
              <p className="text-blazr-muted text-sm leading-relaxed italic">&ldquo;{r.comment}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
            className="w-9 h-9 rounded-full border border-blazr-border text-blazr-muted hover:border-blazr-red hover:text-blazr-red transition-all disabled:opacity-30 flex items-center justify-center">‹</button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${page === i ? "bg-blazr-red scale-125" : "bg-blazr-border"}`} />
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1}
            className="w-9 h-9 rounded-full border border-blazr-border text-blazr-muted hover:border-blazr-red hover:text-blazr-red transition-all disabled:opacity-30 flex items-center justify-center">›</button>
        </div>
      </div>
    </section>
  );
}
