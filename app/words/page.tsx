import { getTerms } from "@/app/data/terms";

export default async function WordsPage() {
  const terms = await getTerms();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
        用語解説
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        ITでよく出てくる言葉を、初心者向けに解説します。
      </p>

      {terms.map(({ id, t, p }) => (
        <section
          key={id}
          id={id}
          className="mb-10 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">
            {t}って何？
          </h2>
          {p.map((para, i) => (
            <p
              key={i}
              className="text-zinc-600 dark:text-zinc-400 mb-4 last:mb-0"
            >
              {para}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
