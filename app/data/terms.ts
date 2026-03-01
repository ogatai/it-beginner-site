import { itTermsSeed } from "@/app/data/itTermsSeed";

export type Term = {
  id: string;
  t: string;
  p: string[];
  c?: string;
  sourceUrl?: string;
};

export type FetchTermsOptions = {
  useExternal?: boolean;
  limit?: number;
};

type WikipediaSummary = {
  extract?: string;
};

async function fetchWikipediaSummary(term: string): Promise<string | null> {
  const url = `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as WikipediaSummary;
    return data.extract?.trim() || null;
  } catch {
    return null;
  }
}

function seedToTerm(limit: number): Term[] {
  return itTermsSeed.slice(0, limit).map((item) => ({
    id: item.id,
    t: item.term,
    c: item.category,
    p: [item.description],
    sourceUrl: item.sourceUrl,
  }));
}

export async function getTerms(options: FetchTermsOptions = {}): Promise<Term[]> {
  const limit = Math.min(Math.max(options.limit ?? 200, 1), 200);
  const base = seedToTerm(limit);

  if (!options.useExternal) {
    return base;
  }

  const enriched = await Promise.all(
    base.map(async (term) => {
      const summary = await fetchWikipediaSummary(term.t);
      if (!summary) return term;
      return {
        ...term,
        p: [summary],
      };
    }),
  );

  return enriched;
}
