"use client";
import { useState } from "react";
import type { Term } from "@/app/data/terms";

export default function TermsList({ terms }: { terms: Term[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("すべて");
  const categories = ["すべて", ...Array.from(new Set(terms.map((t) => t.c ?? "その他")))];
  const filtered = activeCategory === "すべて" ? terms : terms.filter((t) => (t.c ?? "その他") === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              activeCategory === cat
                ? "bg-zinc-950 text-white border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:border-zinc-50"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {filtered.map((term) => (
        <section key={term.id} className="mb-10">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-3">{term.t}</h2>
          {term.p.map((paragraph, i) => (
            <p key={i} className="text-zinc-600 dark:text-zinc-400 mb-2">{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}