import { getTerms } from "@/app/data/terms";
import TermsList from "@/app/components/TermsList";

export default async function WordsPage() {
  const terms = await getTerms();
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">用語解説</h1>
      <TermsList terms={terms} />
    </main>
  );
}